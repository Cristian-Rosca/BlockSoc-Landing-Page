import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";

const HeroContainer = () => {
    return ( 
        <Container mt={"10rem"} maxW='container.lg'>
            <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} alignItems={"center"}>

              <Heading as='h1' size='4xl' lineHeight={"1.3"} textAlign={"center"}> Bridging the Web 3.0 talent gap</Heading>
              <Text textStyle='primary' fontSize={"19"} width={"90%"} textAlign={"center"} mt={"1rem"}>BlockSoc is the gateway for students entering into Web3 and the ideal platform for employers seeking to discover innovative Web3.0 talent
              </Text>
              <Button textStyle='primary' mt={"3rem"} width={"auto"} p={"1.5rem"} bgColor={"purple.600"}>Join BlockSoc</Button>
            </Box>
          </Container>
     );
}
 
export default HeroContainer;