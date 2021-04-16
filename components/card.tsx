import React, { useState, useRef, useContext } from 'react'
import { CartContext } from "../context/cartContext"
import Link from 'next/link'


interface Props {
    card: MenuItem
    index: number

}

const Card: React.FC<Props> = ({ card, index }) => {
    const { dispatch: cartDispatch, cartData } = useContext(CartContext);


    return (
        <>
            <div className="card relative min-w-[320px] max-w-[320px] bg-white flex flex-col mx-10 items-stretch rounded-lg mb-20 mt-12" style={{ boxShadow: "0 8px 18px 1px #d3d3d3" }}>
                <div className="card-image-container min-h-[100px] w-full flex flex-col justify-center ">

                    <img className="image absolute w-[50%] top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3" src={`/images/${card.img}`} style={{ filter: "drop-shadow(3px 4px 3px #d3d3d3)" }} />

                </div>
                <div className="card-text-container h-full w-full p-3" >
                    <div className="card title w-full flex justify-center font-mono text-2xl p-2 text-[#4A4A4A]">
                        <span >{card.title}</span>
                    </div>

                    <div className="card-price w-full flex justify-around font-mono p-2 mt-2 text-md text-gray-500">
                        <span>${card.price}</span>

                    </div>
                    <div className="card-sides w-full flex justify-around font-mono p-2 mt-2 flex-col">
                        <div className="flex justify-center text-[#4A4A4A] mb-5">
                            <span>Sides</span>
                        </div>
                        <div className="flex justify-evenly text-sm text-gray-400 ">
                            {card.sides.map((side: string) => (
                                <span>{side}</span>
                            ))}
                        </div>
                    </div>
                    <div className="card-button-container w-full flex justify-around font-mono p-2 mt-3 mb-3 text-md ">
                        <Link href={`/menu/${card.id}`}>
                            <button className="focus:outline-none w-100 border border-gray-400 px-3 py-1 rounded-md hover:bg-[#FAFAFC]">View More</button>
                        </Link>
                        <button className="focus:outline-none w-100 bg-[#EE3367] px-3 py-1 rounded-md text-white shadow-md outlin hover:bg-[#dc295a]" onClick={() => {
                            cartDispatch({ type: 'SET_PRODUCTS', item: card })
                        }}>Add To Cart</button>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Card