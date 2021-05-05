import React, { useContext, useState, useReducer } from 'react'
import useSWR from 'swr'
import Loading from "../components/loading"
import Error from "../components/error"
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import Navbar from "../components/navbar"
import { FaRegCreditCard } from 'react-icons/fa';
import { FaCartArrowDown } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { SearchIcon } from "@chakra-ui/icons"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    InputGroup,
    Input,
    InputLeftElement
} from "@chakra-ui/react"

interface Props {

}

const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    if (res.status !== 200) {
        throw new (Error as any)("ERROR")
    }
    return data
}

const Orders: React.FC<Props> = ({ }) => {
    const { data, error } = useSWR('/api/orders', fetcher)





    if (!data) return <Loading />
    if (error) return <Error />

    const total = data.reduce((acc, curr) => {

        return acc + curr.amount

    }, 0)

    return (
        <>
            <div className="min-h-screen w-full flex items-center flex-col font-mono px-2">
                <Navbar />
                <div className="orders-bar w-full max-w-[1300px] flex flex-col mt-[10px] px-2" >
                    <div className="orders-bar w-full flex flex-row pb-[30px] pt-[20px] justify-between">

                        <div className="flex p-7 justify-start px-12 rounded-md " style={{ boxShadow: "0 2px 6px rgb(0 0 0 / 15%" }}>
                            <div className="flex items-center">
                                <div className="bg-[#23BAA6] rounded-lg p-3 text-white text-xl">
                                    <FaStar />
                                </div>

                            </div>
                            <div className="px-4 flex flex-col justify-center">
                                <span className="text-md ">Rating</span>
                                <h2 className="text-2xl">95%</h2>
                            </div>

                        </div>


                        <div className="flex p-7 justify-center px-12 rounded-md shadow-lg" style={{ boxShadow: "0 2px 6px rgb(0 0 0 / 15%" }}>
                            <div className="flex items-center">
                                <div className="bg-[#4FA8E9] rounded-lg p-3 text-white text-xl">
                                    <FaCartArrowDown />
                                </div>
                            </div>
                            <div className="px-4 flex flex-col justify-center">

                                <span className="text-md ">Orders</span>
                                <h2 className="text-2xl">{data.length}</h2>
                            </div>
                        </div>


                        <div className="flex p-7 justify-end px-12 rounded-md " style={{ boxShadow: "0 2px 6px rgb(0 0 0 / 15%" }}>

                            <div className="flex items-center">
                                <div className="bg-[#FFC144] rounded-lg p-3 text-white text-xl">
                                    <FaRegCreditCard />
                                </div>
                            </div>

                            <div className="px-4 flex flex-col justify-center">
                                <span className="text-md ">Balance</span>
                                <h2 className="text-2xl">${Math.round(total)}</h2>
                            </div>


                        </div>

                    </div>

                    <div className="search-container flex w-full max-w-[1300px] flex flex-col" >
                        <h1 className="text-2xl">Orders</h1>
                    </div>

                    <div className="search-container flex w-full max-w-[1300px] flex flex-col mt-[20px] mb-[10px]" >
                        <InputGroup >
                            <InputLeftElement
                                pointerEvents="none"
                                children={<SearchIcon color="gray.300" />}
                            />
                            <Input type="tel" placeholder="Search..." />
                        </InputGroup>
                    </div>
                    <div className="w-full max-w-[1300px] max-h-[560px] overflow-y-scroll" style={{ boxShadow: "0 8px 18px 1px #d3d3d3" }}>
                        <Table variant="simple">

                            <Thead className="bg-[#EE3367] ">
                                <Tr style={{ padding: "10px 0px" }}>
                                    <Th style={{ color: "white" }} >Order Id</Th>
                                    <Th style={{ color: "white" }} >Customer</Th>
                                    <Th style={{ color: "white" }} >Address</Th>
                                    <Th style={{ color: "white" }}>Phone</Th>
                                    <Th style={{ color: "white" }} >Amount</Th>
                                </Tr>
                            </Thead>


                            <Tbody className="w-full overflow-y-scroll">

                                {data.map((order: any) => (
                                    <Tr className="cursor-pointer hover:bg-gray-50">
                                        <Td>{order.id}</Td>
                                        <Td>{order.customer}</Td>
                                        <Td >{order.address}</Td>
                                        <Td >{order.phone}</Td>
                                        <Td >${order.amount}</Td>
                                    </Tr>
                                ))}

                            </Tbody>

                        </Table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Orders