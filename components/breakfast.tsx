import React from 'react'
import Card from "../components/card"
interface Props {
    menu: MenuItem[]
}

const Breakfast: React.FC<Props> = ({ menu }) => {
    return (
        <>

            {menu.filter(item => item.category === "Breakfast").map((card, index) => (
                <Card card={card} index={index} />
            ))}
        </>
    )
}

export default Breakfast