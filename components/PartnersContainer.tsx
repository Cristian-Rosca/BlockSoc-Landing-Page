import { Box, Container, Heading } from "@chakra-ui/react";
import Image from 'next/image'
import daolens_logo from "../public/daolens.png"
import moralis_logo from "../public/moralis.png"
import cityDAO_logo from "../public/citydao.png"
import discord_logo from "../public/discord.svg"



const PartnersContainer = () => {
    return ( 
        <Container mt={"10rem"} maxW='container.lg'>
            <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} >
              <Heading as='h3' size='xl' textAlign={"center"} alignSelf={"center"} width={"80%"} mb={"4rem"}>Trusted by partners from across the globe</Heading>
              <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"}>
                <Image src={daolens_logo} width={"177px"} height={"48px"} />
                <Image src={moralis_logo} width={"177px"} height={"48px"} />
                <Image src={cityDAO_logo} width={"177px"} height={"48px"} />
              </Box>
            </Box>
          </Container>
     );
}
 
export default PartnersContainer;