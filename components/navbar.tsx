import React, { useState, useRef, useContext } from 'react'
import Image from "next/image"
import { FaShoppingBag } from 'react-icons/fa';
import { Drawer, DrawerOverlay, DrawerContent } from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"
import { CartContext } from "../context/cartContext"
import Link from "next/link"
import Swal from 'sweetalert2'
import CartIcon from "../components/cartIcon"
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
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
                    <div className="justify-around flex-1 flex items-center text-xl text-[#4A4A4A]" style={{ transform: "translateZ(0)" }}>


                        <Link href="/">
                            <span className=" cursor-pointer" >Home</span>
                        </Link>
                        <Link href="/menu">
                            <span className="cursor-pointer " >Menu</span>
                        </Link>

                        <span className="">Rewards</span>

                        <CartIcon cartData={cartData} btnRef={btnRef} onOpen={onOpen} />
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
                                        <AnimatePresence>
                                            {cartData.cart.length === 0 ? <motion.span initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.5, delay: 1 / 5 }}>You have no items in your order yet.</motion.span> :
                                                cartData.cart.map((item: MenuItem, index) => (
                                                    <motion.div initial={{ y: -1000, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        exit={{ y: -1000, opacity: 0 }}
                                                        transition={{ duration: 0.5, delay: 1 / 15 }}
                                                        className="cart-card w-full flex mb-5 p-2 bg-[#FAFAFC] " key={index}>
                                                        <div className="cart-image-container flex flex-1 justify-center filter drop-shadow-xl py-2 min-h-[120px] font-mono">
                                                            <img className="min-w-full min-h-full" src={`/images/${item.img}`} />
                                                        </div>
                                                        <div className="cart-text-container flex flex-1 flex-col items-center justify-between py-2 font-mono">
                                                            <span>{item.title}</span>
                                                            <span>${item.price}</span>
                                                            <button className="btn px-2 bg-[#EE3367] rounded-md text-white hover:bg-[#dc295a] focus:outline-none" onClick={() => {
                                                                cartDispatch({ type: 'FILTER_PRODUCTS', index: index })
                                                            }}>Remove</button>
                                                        </div>

                                                    </motion.div>

                                                ))
                                            }

                                            {cartData.cart.length === 0 ? null : <motion.div initial={{ y: -1000, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: -1000, opacity: 0 }}
                                                transition={{ duration: 0.5, delay: 1 / 15 }} className="checkout-button-container w-full flex items-center justify-center flex-col font-mono">
                                                <span>Total: ${total}</span>
                                                <button onClick={() => {
                                                    onClose()
                                                    Swal.fire(
                                                        'Order Completed!',
                                                        `Your Total Amount Is ${total}`,
                                                        'success'
                                                    )

                                                    cartDispatch({ type: 'CHECKOUT' })

                                                }} className="button w-1/2 mt-[50px] bg-[#EE3367] px-3 py-2 rounded-md text-white text-lg shadow-lg focus:outline-none hover:bg-[#dc295a] "> Check out</button>
                                            </motion.div>}
                                        </AnimatePresence>

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