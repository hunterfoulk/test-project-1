import React from 'react'
import Card from "../components/card"
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

interface Props {
    data: MenuItem[]


}

const Lunch: React.FC<Props> = ({ data, }) => {
    return (
        <>
            {data.filter(item => item.category === "Lunch").map((card, index) => (
                <>
                    <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} transition={{ duration: 0.5, delay: index / 15 }}>
                        <Card card={card} index={index} data={data} />
                    </motion.div>
                </>
            ))}
        </>
    )
}

export default Lunch