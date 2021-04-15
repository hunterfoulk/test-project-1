import React, { useState } from 'react'
interface Props {


}



const SideDrawer: React.FC<Props> = ({ }) => {
    // bg - [#F4F6F9]
    const [tab, setTab] = useState("Home")

 
    return (
        <>

            <div className="drawer-header w-full flex flex-col items-center font-mono" >


                <div className=" w-full flex items-center flex-col font-mono">
                    <img src="/images/fast-food.png" className="w-[70px] filter drop-shadow-xl mb-2 mt-6" />

                    <span className="text-3xl">Hunt's</span>
                </div>

            </div>

            <div className="nav-container w-full flex flex-col items-centerfont-mono mt-10">
                <div className="w-full flex flex-col items-center">
                    <div className="sidedrawer-link w-full mb-5 flex justify-center py-1 text-lg cursor-pointer" style={tab === "Home" ? { borderRight: "2px solid #EE3367", fontWeight: "bolder", color: "#4B4B4B", backgroundColor:"#F9F9FC" } : null} onClick={() => setTab("Home")}>
                        <span>Home</span>
                    </div>
                    <div className="sidedrawer-link w-full mb-5 flex justify-center py-1 text-lg cursor-pointer" style={tab === "Menu" ? { borderRight: "2px solid #EE3367", fontWeight: "bolder", color: "#4B4B4B", backgroundColor:"#F9F9FC" } : null} onClick={() => setTab("Menu")}>
                        <span>Menu</span>
                    </div>
                </div>


            </div>

            <button className="button w-1/2 mt-[100px] bg-[#EE3367] px-3 py-2 rounded-md text-white text-lg shadow-lg ">Check out</button>
        </>
    )
}

export default SideDrawer