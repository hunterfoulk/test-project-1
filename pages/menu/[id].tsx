import React, { useState } from 'react'
import Navbar from "../../components/navbar"
import useSWR from 'swr'
import { useRouter } from 'next/router'

interface Props {
    menuItem: any
}

interface menuItem {
    message: string
}

const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    if (res.status !== 200) {
        throw new Error(data.message)
    }
    return data
}

const MenuItem: React.FC<Props> = ({ menuItem }) => {
    const { query } = useRouter()
    const { data, error } = useSWR(() => query.id && `/api/${query.id}`, fetcher)
    const [message, setMessage] = useState<string>("")


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



    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <>
            < div className="min-h-screen w-full flex flex-col items-center bg-white font-mono pb-12">
                <Navbar />
                <div className="item-container flex  w-full max-w-[1500px] flex-col p-4 mt-10">
                    <div className="item-header flex w-full max-h-[280px] justify-center mb-5 ">
                        <img className="max-w-[280px]" src={`/images/${data.img}`} style={{ filter: "drop-shadow(3px 4px 3px #d3d3d3)" }} />
                    </div>
                    <div className="title-container flex w-full justify-center text-4xl font-mono text-[#4A4A4A] mt-2 mb-5 py-1">
                        <span>{data.title}</span>
                    </div>
                    <div className="price-container flex w-full justify-center text-xl font-mono text-[#4A4A4A] mt-3 py-1">



                        <div className="flex w-[400px] max-w-full justify-between ">
                            <span>{data.cals} cals</span>
                            <span>${data.price}</span>
                        </div>


                    </div>
                    <div className="sides-container flex w-full justify-center flex-col items-center mt-5">
                        <div className=" flex w-[400px] max-w-full mt-5 " ><span className="font-momo text-3xl ">Sides</span></div>
                        <div className="flex justify-between w-[400px] max-w-full mt-6">
                            {data.sides.map((side: string) => (
                                <span className="">{side}</span>
                            ))}
                        </div>

                    </div>
                    <div className="sides-container flex w-full justify-center flex-col items-center mt-5">
                        <div className=" flex w-[400px] max-w-full mt-5" ><span className="font-momo text-3xl ">Description</span></div>
                        <div className=" flex justify-between w-[400px] max-w-full mt-5">

                            <span>{data.description}</span>
                        </div>
                    </div>
                    <div className="reviews-container flex w-full justify-center flex-col items-center mt-5">
                        <div className=" flex w-[400px] max-w-full mt-5"><span className="font-momo text-3xl ">Reviews</span></div>
                        <div className=" flex w-[400px] max-w-full mt-5 flex-col">
                            {data.reviews.map((data: any) => (
                                <>
                                    <span className="text-lg">{data.name}</span>
                                    <span>{data.message}</span>
                                </>
                            ))}
                        </div>
                        <div className=" flex w-[400px] max-w-full mt-5 flex-col">
                            <input placeholder="Leave review..." className="bg-gray-200 py-1 px-1 rounded-sm " value={message} onChange={(e) => setMessage(e.target.value)} />
                            <button className="mt-3 py-1 rounded-sm bg-[#EE3367] text-white hover:bg-[#dc295a] focus:outline-none " onClick={() => SubmitReview()}>Leave Review</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuItem

