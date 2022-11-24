import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { HiOutlineCube } from "react-icons/hi";
import discord_logo from "../../public/discord.svg"


export const BountiesInfo = () => {
    return ( 
        <Container mt={"10rem"} maxW='100%'>
        <Box display={"flex"} flexDirection={"row"} justifyContent={"space-around"} alignItems={"center"}>
          <Box display={"flex"} flexDirection={"column"} flex={2} justifyContent={"flex-start"} alignItems={"flex-start"}>
            <Button variant={"link"} textStyle='primary' fontSize={"19"} ml={"5rem"} mt={10} >Education</Button>
            <Button leftIcon={<HiOutlineCube></HiOutlineCube>} variant={"link"} textStyle='secondary' fontSize={"22"} ml={"3rem"} mt={10} color={"#D1FF6F"}>Bounties</Button>
            <Button variant={"link"} ml={"5rem"} fontSize={"19"} textStyle='primary' mt={10}>Web 3.0 Job Portals</Button>
            <Button variant={"link"} ml={"5rem"} fontSize={"19"} textStyle='primary' mt={10}>Community</Button>
          </Box>
          <Box display={"flex"} flexDirection={"column"} flex={3}>
            <Heading as='h2' size='3xl' textAlign={"center"}>Bounties</Heading >
            <Text textStyle='primary' fontSize={"19"} mt={10}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              {<br />} {<br />}
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          </Box>
          <Box display={"flex"} flexDirection={"column"} flex={4}>
            <Image src={discord_logo} width={"300px"} height={"300px"} />
          </Box>
        </Box>
      </Container>
     );
}
 
export default BountiesInfo;