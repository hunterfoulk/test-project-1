
import Navbar from "../components/navbar"
import React, { useState, useEffect, useReducer } from 'react';
import Card from "../components/card"
import All from "../components/all"
import Breakfast from "../components/breakfast"
import Lunch from "../components/lunch"
import Dinner from "../components/dinner"

interface Props {
    menu: MenuItem[]
}



const Menu: React.FC<Props> = ({ menu }) => {
    const [tab, setTab] = useState<string>("All")
    const [data, setData] = useState<MenuItem[]>(menu)




    return (
        <>


            <div className="min-h-screen w-full flex flex-col font-mono">
                <Navbar />

                <div className="w-full flex justify-center items-center flex-col" >

                    <div className="flex w-full max-w-[1300px] px-12 py-3 mb-5 mt-2 text-4xl">
                        <span>Menu</span>
                    </div>
                    <div className="filter-bar flex w-full max-w-[1300px] justify-evenly text-lg mb-5">
                        <span className="cursor-pointer" onClick={() => setTab("All")} style={tab === "All" ? { borderBottom: "1px solid #EE3367" } : null}>All</span>
                        <span className="cursor-pointer" onClick={() => setTab("Breakfast")} style={tab === "Breakfast" ? { borderBottom: "1px solid #EE3367" } : null}>Breakfast</span>
                        <span className="cursor-pointer" onClick={() => setTab("Lunch")} style={tab === "Lunch" ? { borderBottom: "1px solid #EE3367" } : null}>Lunch</span>
                        <span className="cursor-pointer" onClick={() => setTab("Dinner")} style={tab === "Dinner" ? { borderBottom: "1px solid #EE3367" } : null}>Dinner</span>
                    </div>
                    <div className="content-container max-w-[1300px] w-full flex flex-wrap justify-around box-border pt-10 pb-20" >

                        {tab === "All" ? <All menu={menu} /> : null}
                        {tab === "Breakfast" ? <Breakfast menu={menu} /> : null}
                        {tab === "Lunch" ? <Lunch menu={menu} /> : null}
                        {tab === "Dinner" ? <Dinner menu={menu} /> : null}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu



export const getStaticProps = async () => {

    const resp = await fetch('http://localhost:3000/api/menu');
    const json = await resp.json();

    return {
        props: {
            menu: json
        },
    }
}