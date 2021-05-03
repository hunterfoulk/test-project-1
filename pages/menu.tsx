
import Navbar from "../components/navbar"
import React, { useState, useEffect, useReducer } from 'react';
import All from "../components/all"
import Breakfast from "../components/breakfast"
import Lunch from "../components/lunch"
import Dinner from "../components/dinner"
import useSWR from 'swr'
import Loading from "../components/loading"
import Error from "../components/error"
interface Props {
    menu: MenuItem[]
}


const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    console.log("FETCHER DATA", data)
    console.log("FETCHHER FIEDD")
    if (res.status !== 200) {
        throw new (Error as any)("ERROR")
    }
    return data
}

const Menu: React.FC<Props> = () => {
    const [tab, setTab] = useState<string>("All")
    const { data, error } = useSWR('/api/menu', fetcher)
    console.log("dataaa", data)



    if (!data) return <Loading />
    if (error) return <Error />


    return (
        <>

            <div className="min-h-screen w-full flex flex-col font-mono">
                <Navbar />

                <div className="w-full flex justify-center items-center flex-col" >

                    <div className="flex w-full max-w-[1300px] px-12 py-3 mb-5 mt-2 text-4xl">
                        <span>Menu</span>
                    </div>
                    <div className="filter-bar flex w-full max-w-[1300px] justify-evenly text-lg mb-5 ">
                        <span className="cursor-pointer" onClick={() => setTab("All")} style={tab === "All" ? { borderBottom: "1px solid #EE3367" } : null}>All</span>
                        <span className="cursor-pointer" onClick={() => setTab("Breakfast")} style={tab === "Breakfast" ? { borderBottom: "1px solid #EE3367" } : null}>Breakfast</span>
                        <span className="cursor-pointer" onClick={() => setTab("Lunch")} style={tab === "Lunch" ? { borderBottom: "1px solid #EE3367" } : null}>Lunch</span>
                        <span className="cursor-pointer" onClick={() => setTab("Dinner")} style={tab === "Dinner" ? { borderBottom: "1px solid #EE3367" } : null}>Dinner</span>
                    </div>
                    <div className="content-container max-w-[1300px] w-full flex flex-wrap justify-around box-border pt-10 pb-20" >

                        {/* Filter and render the speific category of items you want to see */}
                        {tab === "All" ? <All data={data} /> : null}
                        {tab === "Breakfast" ? <Breakfast data={data} /> : null}
                        {tab === "Lunch" ? <Lunch data={data} /> : null}
                        {tab === "Dinner" ? <Dinner data={data} /> : null}

                    </div>
                </div>
            </div>

        </>
    )
}

export default Menu



