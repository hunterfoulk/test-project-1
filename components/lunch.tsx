import React from 'react'
import Card from "../components/card"

interface Props {
    data: MenuItem[]
}

const Lunch: React.FC<Props> = ({ data }) => {
    return (
        <>
            {data.filter(item => item.category === "Lunch").map((card, index) => (
                <Card card={card} index={index} data={data} />
            ))}
        </>
    )
}

export default Lunch