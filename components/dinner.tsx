import React from 'react'
import Card from "../components/card"

interface Props {
    menu: MenuItem[]
}

const Dinner: React.FC<Props> = ({ menu }) => {
    return (
        <>
            {menu.filter(item => item.category === "Dinner").map((card, index) => (
                <Card card={card} index={index} />
            ))}
        </>
    )
}

export default Dinner