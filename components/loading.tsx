import React from 'react'
import { Spinner } from "@chakra-ui/react"

interface Props {

}

const Loading: React.FC<Props> = ({ }) => {
    return (
        <>
            <div className="h-[100vh] flex justify-center items-center">

                <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                />
            </div>
        </>
    )
}

export default Loading