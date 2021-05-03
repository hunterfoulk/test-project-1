import React from 'react'
import Card from "../components/card"
interface Props {
    data: MenuItem[]
}

const Breakfast: React.FC<Props> = ({ data }) => {
    return (
        <>

            {data.filter(item => item.category === "Breakfast").map((card, index) => (
                <Card card={card} index={index} data={data} />
            ))}
        </>
    )
}

export default Breakfast