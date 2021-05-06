import React, { useState, useContext } from 'react'
import Navbar from "../../components/navbar"
import useSWR from 'swr'
import { useRouter } from 'next/router'
import Loading from "../../components/loading"
import Error from "../../components/error"
import { CartContext } from "../../context/cartContext"
import { motion, AnimateSharedLayout } from "framer-motion";

interface Props {

}

interface menuItem {
    message: string
}

const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    if (res.status !== 200) {
        throw new (Error as any)("ERROR")
    }
    return data as MenuItem
}

const MenuItem: React.FC<Props> = () => {
    const { query } = useRouter()
    const { data, error } = useSWR(() => query.id && `/api/${query.id}`, fetcher)
    const [message, setMessage] = useState<string>("")
    const { dispatch: cartDispatch, cartData } = useContext(CartContext);


    //Add new review to dish.
    const SubmitReview = () => {
        const copy = [...data.reviews]
        let review = {
            name: "anonymous",
            message: message
        }

        let newArr = [...copy, review]
        data.reviews = newArr
        setMessage("")
    }

    let easing = [0.6, -0.05, 0.01, 0.99];

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const fadeInUp = {
        initial: {
            y: 60,
            opacity: 0,
            transition: { duration: 0.6, ease: easing }
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: easing
            }
        }
    };


    if (!data) return <Loading />
    if (error) return <Error />


    return (
        <>
            <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }} className="min-h-screen w-full flex flex-col items-center bg-white font-mono pb-12 overflow-y-hidden" >
                <Navbar />
                <motion.div variants={stagger} className="item-container flex  w-full max-w-[1500px] flex-col p-4 mt-10">
                    <motion.div variants={fadeInUp} className="item-header flex w-full max-h-[280px] justify-center mb-5 ">
                        <img className="max-w-[280px]" src={`/images/${data.img}`} style={{ filter: "drop-shadow(3px 4px 3px #d3d3d3)" }} />
                    </motion.div>
                    <motion.div variants={fadeInUp} className="title-container flex w-full justify-center text-4xl font-mono text-[#4A4A4A] mt-2 mb-5 py-1">
                        <motion.span variants={fadeInUp}>{data.title}</motion.span>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="price-container flex w-full justify-center text-xl font-mono text-[#4A4A4A] mt-3 py-1">



                        <motion.div variants={fadeInUp} className="flex w-[400px] max-w-full justify-between ">
                            <span>{data.cals} cals</span>
                            <span>${data.price}</span>
                        </motion.div>


                    </motion.div>
                    <motion.div variants={fadeInUp} className="sides-container flex w-full justify-center flex-col items-center mt-5">
                        <div className=" flex w-[400px] max-w-full mt-5 " ><span className="font-momo text-3xl ">Sides</span></div>
                        <div className="flex justify-between w-[400px] max-w-full mt-6">
                            {data.sides.map((side: string) => (
                                <span className="">{side}</span>
                            ))}
                        </div>

                    </motion.div>
                    <motion.div variants={fadeInUp} className="sides-container flex w-full justify-center flex-col items-center mt-5">
                        <motion.div variants={fadeInUp} className=" flex w-[400px] max-w-full mt-5" ><span className="font-momo text-3xl ">Description</span></motion.div>
                        <motion.div variants={fadeInUp} className=" flex justify-between w-[400px] max-w-full mt-5">

                            <span>{data.description}</span>
                        </motion.div>

                    </motion.div>
                    <motion.div variants={fadeInUp} className="reviews-container flex w-full justify-center flex-col items-center mt-5">
                        <motion.div variants={fadeInUp} className=" flex w-[400px] max-w-full mt-5"><span className="font-momo text-3xl ">Reviews</span></motion.div>
                        <motion.div variants={fadeInUp} className=" flex w-[400px] max-w-full mt-5 flex-col">
                            {data.reviews.map((data) => (
                                <>
                                    <span className="text-lg">{data.name}</span>
                                    <span>{data.message}</span>
                                </>
                            ))}
                        </motion.div>
                        <motion.div variants={fadeInUp} className=" flex w-[400px] max-w-full mt-5 flex-col">
                            <input placeholder="Leave review..." className="bg-gray-200 py-1 px-1 rounded-sm " value={message} onChange={(e) => setMessage(e.target.value)} />
                            <button className="mt-3 py-1 rounded-sm bg-[#EE3367] text-white hover:bg-[#dc295a] mb-[10px] focus:outline-none " onClick={() => SubmitReview()}>Leave Review</button>
                            <button className="mt-3 py-1 rounded-sm bg-[#EE3367] text-white hover:bg-[#dc295a] focus:outline-none " onClick={() => cartDispatch({ type: 'SET_PRODUCTS', item: data })}
                            >Add To Cart</button>
                        </motion.div>

                    </motion.div>
                </motion.div>
            </motion.div >
        </>
    )
}

export default MenuItem

