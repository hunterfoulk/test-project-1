import React from 'react'
import Card from "../components/card"
interface Props {
    data: MenuItem[]
}

const All: React.FC<Props> = ({ data }) => {
    return (
        <>
            {data.map((card: MenuItem, index: number) => (
                <>
                    <Card card={card} index={index} data={data} />
                </>
            ))}
        </>
    )
}

export default All