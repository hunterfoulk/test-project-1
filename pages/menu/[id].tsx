import React from 'react'
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
    console.log("DATA", data)



    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <>
            < div className="min-h-screen w-full flex flex-col items-center bg-white font-mono ">
                <Navbar />
                <div className="item-container flex  w-full max-w-[1500px] flex-col p-4 mt-10">
                    <div className="item-header flex  w-full max-h-[180px] justify-center mb-5">
                        <img src={`/images/${data.img}`} style={{ filter: "drop-shadow(3px 4px 3px #d3d3d3)" }} />
                    </div>
                    <div className="title-container flex w-full justify-center text-4xl font-mono text-[#4A4A4A] mt-5 mb-5 py-1">
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
                </div >
            </div>
        </>
    )
}

export default MenuItem

