import React, { useState } from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import Card from "../components/card"
interface Props {
    data: MenuItem[]



}

const All: React.FC<Props> = ({ data }) => {



    return (
        <>

            {data.map((card: MenuItem, index: number) => (

                <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} transition={{ duration: 0.5, delay: index / 15 }}>
                    <Card card={card} index={index} data={data} />
                </motion.div>

            ))}


        </>
    )
}

export default All