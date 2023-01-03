import type { AppProps } from 'next/app'
import { Box, ChakraProvider, color, defineStyle, extendTheme } from '@chakra-ui/react'
import "@fontsource/source-code-pro/"
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/800.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { defineStyleConfig } from '@chakra-ui/react'
import '../styles.css'


const customLink = defineStyle({
  borderWidth: '20px', 
  borderStyle: "solid",
  borderRadius: 10, 
  rounded: 0,
  borderColor: "rgba(52, 52, 52, 0.35)"
})

export const dividerTheme = defineStyleConfig({
  variants: { customLink },
})


const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "black",
        color: "white"
      },
    })
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

  fonts : {
    heading: `Sharp Grotesk`
  },

  components: {
     Divider: dividerTheme 
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box bgImage="../background.png" bgPosition="start" bgRepeat="repeat">
      <Navbar />
        <Component  {...pageProps} />
      <Footer />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
