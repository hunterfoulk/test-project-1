import React from 'react'
import Card from "../components/card"
interface Props {
    menu: MenuItem[]
}

const All: React.FC<Props> = ({ menu }) => {
    return (
        <>
            {menu.map((card: MenuItem, index: number) => (
                <>
                    <Card card={card} index={index} />
                </>
            ))}
        </>
    )
}

export default All