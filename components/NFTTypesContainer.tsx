import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import discord_logo from "../public/discord.svg"


const NFTTypesContainer = () => {
    return ( 
        <Container mt={"10rem"} maxW='container.lg' >
        <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} alignItems={"center"}>
          <Heading as='h2' size='3xl' textAlign={"center"} >Types of NFTs</Heading>
          <Text textStyle='primary' textAlign={"center"} mt={"1rem"} fontSize={"19"} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Box>
        <Box mb={"5rem"} display={"flex"} flexDirection={"row"} justifyContent={"space-evenly"} gap={"4rem"}>
          <Box mt={"5rem"} display={"flex"} flexDirection={"column"} bg={"rgba(52, 52, 52, 0.2)"} p={"3rem"} rounded={10}>
            <Image src={discord_logo} width={"150px"} height={"150px"} />
            <Heading mt={"3rem"} as='h4' size='l' >Dynamic NFT for students</Heading>
          </Box>
          <Box mt={"5rem"} display={"flex"} flexDirection={"column"} bg={"rgba(52, 52, 52, 0.2)"} p={"3rem"} rounded={10}>
            <Image src={discord_logo} width={"150px"} height={"150px"} />
            <Heading mt={"3rem"} as='h4' size='l' >Resource NFT for companies</Heading>
          </Box>
        </Box>

      </Container>
     );
}
 
export default NFTTypesContainer;