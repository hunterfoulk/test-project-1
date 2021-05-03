import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import '../styles/index.css';
import { CartContextProvider } from "../context/cartContext"
import { ChakraProvider } from "@chakra-ui/react"
import { SWRConfig } from 'swr';

function MyApp({ Component, pageProps }) {
  return <>
    <CartContextProvider>
      <ChakraProvider>

        <Component {...pageProps} />

      </ChakraProvider>
    </CartContextProvider>
  </>
}

export default MyApp
