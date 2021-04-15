import React, { useState, useRef, useContext } from 'react'
import Image from "next/image"
import { FaShoppingBag } from 'react-icons/fa';
import { Drawer, DrawerOverlay, DrawerContent } from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"
import { CartContext } from "../context/cartContext"
import Link from "next/link"
interface Props {

}

const Navbar: React.FC<Props> = ({ }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { dispatch: cartDispatch, cartData } = useContext(CartContext);
    const btnRef = React.useRef()
    const [tab, setTab] = useState("Home")

    const total = cartData.cart.reduce((sum, curr) => sum + curr.price, 0);

    return (
        <>

            <div className="navbar p-6 font-mono flex justify-center max-w-[100%]">

                <div className="nav-container max-w-[1300px] w-[1300px] flex flex-row">
                    <div className="image-container hidden sm:flex items-center text-2xl text-[#4A4A4A] flex-1 ">
                        <Image src="/images/logo3.png" height={45} width={50} />
                        <Link href="/" >
                            < span className="hidden sm:block ml-2 cursor-pointer" onClick={() => setTab("Home")}>Hunt's</span>
                        </Link>
                    </div>
                    <div className="justify-around flex-1 flex items-center text-xl text-[#4A4A4A] ">

                        <Link href="/">
                            <span className=" cursor-pointer" >Home</span>
                        </Link>
                        <Link href="/menu">
                            <span className="cursor-pointer " >Menu</span>
                        </Link>

                        <span className="">Rewards</span>
                        <span className="cursor-pointer" ref={btnRef} onClick={onOpen}><FaShoppingBag /></span>
                        <Drawer
                            isOpen={isOpen}
                            placement="right"
                            onClose={onClose}
                            finalFocusRef={btnRef}
                        >
                            <DrawerOverlay>
                                <DrawerContent>
                                    <div className="drawer-header w-full text-2xl flex justify-center py-4 font-mono">
                                        <span>Your Order</span>
                                    </div>
                                    <div className="drawer-content w-full flex flex-col items-center mt-5 overflow-y-auto">
                                        {cartData.cart.length === 0 ? <span>You have no items in your order yet.</span> :
                                            cartData.cart.map((item: MenuItem, index) => (

                                                <div className="cart-card w-full flex mb-5 p-2 bg-[#FAFAFC] ">
                                                    <div className="cart-image-container flex flex-1 justify-center filter drop-shadow-xl py-2 min-h-[120px] font-mono">
                                                        <img className="w-1/2 h-full" src={`/images/${item.img}`} />
                                                    </div>
                                                    <div className="cart-text-container flex flex-1 flex-col items-center justify-between py-2 font-mono">
                                                        <span>{item.title}</span>
                                                        <span>${item.price}</span>
                                                        <button className="btn px-2 bg-[#EE3367] rounded-md text-white hover:bg-[#dc295a] focus:outline-none" onClick={() => {
                                                            cartDispatch({ type: 'FILTER_PRODUCTS', index: index })
                                                        }}>Remove</button>
                                                    </div>

                                                </div>
                                            ))

                                        }
                                        {cartData.cart.length === 0 ? null : < div className="checkout-button-container w-full flex items-center justify-center flex-col font-mono">
                                            <span>Total: ${total}</span>
                                            <button className="button w-1/2 mt-[50px] bg-[#EE3367] px-3 py-2 rounded-md text-white text-lg shadow-lg focus:outline-none hover:bg-[#dc295a] "> Check out</button>
                                        </div>}

                                    </div>
                                </DrawerContent>
                            </DrawerOverlay>
                        </Drawer>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar