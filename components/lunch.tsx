import React from 'react'
import Card from "../components/card"

interface Props {
    menu: MenuItem[]
}

const Lunch: React.FC<Props> = ({ menu }) => {
    return (
        <>
            {menu.filter(item => item.category === "Lunch").map((card, index) => (
                <Card card={card} index={index} />
            ))}
        </>
    )
}

export default Lunch