
import React, { useState, useEffect, useReducer } from 'react';
import Navbar from "../components/navbar"
import Link from "next/link"

export default function Home() {


  return (


    <div className="min-h-screen w-full flex flex-col items-center bg-white font-mono">
      <Navbar />


      {/* Header */}
      <div className="w-full bg-white max-w-[1500px] flex mt-20 rounded-lg py-2 flex-row">
        <div className="flex-1 flex items-center justify-center ">
          <div className="flex items-center md:items-start w-auto max-w-[100%] flex flex-col">
            <span className="mb-3 text-[42px]">Are You Hungry?</span>
            <span className="mb-5 text-[60px]">Don't Wait!</span>
            <span className="mb-5 text-xl text-[#EE3367] ">Get Started With Your Order. </span>
            <div className="flex justify-center md:justify-start">
              <Link href="/menu">
                <button className="focus:outline-none min-w-[100px] bg-[#EE3367] px-3 py-2 rounded-md text-white shadow-md hover:bg-[#dc295a]">Start Order</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:block flex-1 flex ">
          <img src="/images/foodplate.png" className="min-h-full" style={{ filter: "drop-shadow(9px 17px 10px #d3d3d3)" }} />

        </div>
      </div>
      {/* Cards Section */}

      <div className="w-full max-w-[1500px] flex justify-around my-[120px] flex-wrap py-10 ">
        <div className="card min-w-[280px] max-w-[280px] shadow-lg rounded-lg py-3 mb-4" style={{ boxShadow: "0 8px 18px 1px #d3d3d3" }}>
          <div className="flex max-h-[200px] flex justify-center mb-4">
            <img src="/images/chicken2.png" className="w-[60%] h-full" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="mb-2">Chicken Salad</span>
            <span>$12.99</span>
          </div>
        </div>
        <div className="card min-w-[280px] max-w-[280px] shadow-lg rounded-lg py-3 mb-4" style={{ boxShadow: "0 8px 18px 1px #d3d3d3" }}>
          <div className="flex max-h-[200px] flex justify-center mb-4">
            <img src="/images/foodplate.png" className="w-[60%] h-full" style={{ filter: "drop-shadow(3px 4px 3px #d3d3d3)" }} />
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="mb-2">Steak And Potatoes</span>
            <span>14.99</span>
          </div>


        </div>
        <div className="card min-w-[280px] max-w-[280px] rounded-lg py-3 mb-4" style={{ boxShadow: "0 8px 18px 1px #d3d3d3" }} >
          <div className="flex justify-center mb-4">
            <img src="/images/salmon1.png" className="w-[60%] h-full" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="mb-2">Salmon Salad</span>
            <span>$14.99</span>
          </div>
        </div>
      </div>
    </div >


  )
}

