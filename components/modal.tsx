import React, { useEffect, useState } from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { IoIosCloseCircleOutline } from 'react-icons/io';


interface Props {

}

const Modal = ({ isToggled, setToggled, order, orderTotal }) => {

    const backdrop = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }




    return (
        <>
            <AnimatePresence exitBeforeEnter>
                {isToggled && (
                    <motion.div className="backdrop fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-[1]"
                        variants={backdrop}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        onClick={() => setToggled(false)}
                    >
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 1 }} exit={{ opacity: 0, y: 30 }} className="fixed w-full w-[600px] top-[15%] max-w-[95%] m-auto left-0 right-0 flex flex-col shadow-lg " >
                            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 1 }} exit={{ opacity: 0, y: 30 }} className="rounded-sm ">
                                <div className="bg-[#EE3367] w-full flex justify-between p-2 rounded-t-[5px]">
                                    <span className="text-white text-2xl">Order {order.id}</span>
                                    <span className="text-white rounded-full text-3xl p-[2px] font-bold cursor-pointer" onClick={() => setToggled(false)}><IoIosCloseCircleOutline /></span>
                                </div>

                                <div className="w-full flex flex-col max-h-[550px] overflow-y-scroll rounded-b-[5px]">
                                    <div className="p-3 bg-white">
                                        <h2 className="text-2xl mb-1">Order Summary</h2>
                                    </div>

                                    <div className="w-full py-3 px-3 bg-white">
                                        {order.items.map((item) => (
                                            <div className="w-full flex flex-row items-center border-b-2 border-gray-100 py-2 max-h-[120px] ">
                                                <div className="flex max-w-[70px]">
                                                    <img className="w-full" src={`/images/${item.img}`} />
                                                </div>
                                                <div className="flex flex-col px-2 relative w-full">
                                                    <span>{item.title}</span>
                                                    <span className="text-gray-500 text-sm py-[1px]">{item.cals}Kcal</span>
                                                    <span className="absolute right-0">${item.price}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="w-full py-3 px-3 bg-white">
                                        <div className="w-full py-3 px-3 bg-white flex justify-between">
                                            <span>Order</span>
                                            <span>${orderTotal}</span>
                                        </div>
                                        <div className="w-full py-3 px-3 bg-white flex justify-between">
                                            <span>Delivery</span>
                                            <span>$5</span>
                                        </div>
                                        <div className="w-full py-3 px-3 bg-white flex justify-between">
                                            <span className="text-lg font-bold">Total</span>
                                            <span className="text-lg font-bold">${orderTotal + 5}</span>
                                        </div>
                                        <div className="w-full py-3 px-3 bg-white flex flex-col justify-between">
                                            <span className="text-lg font-bold">Customer</span>
                                            <span >{order.customer}</span>
                                        </div>
                                        <div className="w-full py-3 px-3 bg-white flex flex-col justify-between">
                                            <span className="text-lg font-bold">Address</span>
                                            <span >{order.address}</span>
                                        </div>
                                        <div className="w-full py-3 px-3 bg-white flex flex-col justify-between">
                                            <span className="text-lg font-bold">Payment</span>
                                            <div className="w-full py-3 bg-white flex flex-row items-center">
                                                <img src={`/images/visaicon.PNG`} />
                                                <span className="ml-3">**** **** **** 1410</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                        </motion.div>
                    </motion.div>
                )}

            </AnimatePresence>
        </>
    )
}

export default Modal