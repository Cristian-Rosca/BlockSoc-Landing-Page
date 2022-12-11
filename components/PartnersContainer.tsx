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
        <Box display={"flex"} flexDirection={{base: "column", sm: "column", md: "row", lg: "row", xl: "row"}} justifyContent={"space-between"} gap={"2rem"} alignItems={{base: "center", sm: "center", md: "", lg: "", xl: ""}} px={"3rem"}>
          <Box width={{base: "50%", sm: "50%", md: "25%", lg: "25%", xl: "25%"}}>
            <Image src={daolens_logo} objectFit={"contain"} />
          </Box>
          <Box width={{base: "50%", sm: "50%", md: "25%", lg: "25%", xl: "25%"}}>
            <Image src={moralis_logo} objectFit={"contain"} />
          </Box>
          <Box width={{base: "50%", sm: "50%", md: "25%", lg: "25%", xl: "25%"}}>
            <Image src={cityDAO_logo} objectFit={"contain"} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default PartnersContainer;