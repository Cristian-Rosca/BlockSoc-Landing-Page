import type { AppProps } from 'next/app'
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react'
import background from "../public/background.png"

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "black",
        color: "white"
      }
    })
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
        <Box bgImage="../background.png" bgPosition="center" bgRepeat="repeat">
        <Component  {...pageProps} />
        </Box>
    </ChakraProvider>
  )
}

export default MyApp
