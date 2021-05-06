import React from 'react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, InputGroup, Input, InputLeftElement } from "@chakra-ui/react"


const List = ({ data, setOrder, setTotal, setToggled, term }) => {
    return (
        <>
            {data.filter(order => order.customer.toLowerCase().includes(term.toLowerCase())).map((order, i) => (

                <Tr className="cursor-pointer hover:bg-gray-50" layoutId={order.id} onClick={() => {
                    setOrder(order)
                    setTotal(order.items.reduce((acc, curr) => {
                        return acc + curr.price
                    }, 0))
                    setToggled(true)
                }}>

                    <Td>{order.id}</Td>
                    <Td>{order.customer}</Td>
                    <Td >{order.address}</Td>
                    <Td >{order.phone}</Td>
                    <Td >${order.amount}</Td>
                </Tr>
            ))}
        </>
    )
}

export default List