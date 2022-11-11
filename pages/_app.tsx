import type { AppProps } from 'next/app'
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react'
import Fonts from '../components/Fonts'

import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/800.css";



const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "black",
        color: "white"
      },
    })
  },
  fonts: {
    heading: `Sharp Grotesk`,
  },

  textStyles: { 
    primary: {
        fontFamily: `Montserrat`,
        fontWeight: '400',
    },
    secondary: {
        fontFamily: `Montserrat`,
        fontWeight: '800',
    },
    
    
},
  
  
  
      
      
  
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
        <Fonts/>
        <Box bgImage="../background.png" bgPosition="center" bgRepeat="repeat">
        <Component  {...pageProps} />
        </Box>
    </ChakraProvider>
  )
}

export default MyApp
