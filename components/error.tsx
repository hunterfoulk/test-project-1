import React from 'react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from "@chakra-ui/react"


interface Props {

}

const Error: React.FC<Props> = ({ }) => {
    return (
        <>
            <div className="h-[100vh] flex justify-center items-center w-[full] ">
                <Alert status="error" style={{ width: "40%", maxWidth: "80%", display: "flex", justifyContent: "center" }}>
                    <AlertIcon />
                     There was an error processing your request
                    </Alert>
            </div>
        </>
    )
}

export default Error