import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import discord_logo from "../public/discord.svg"


const CallToActionContainer = () => {
    return ( 
        <Container mt={"8rem"} maxW='container.xl' bg={"#3D00EE"} rounded={10}>
        <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} >
          <Heading pt={"5rem"} px={"3rem"} as='h2' size='3xl' textAlign={"start"} >Help us build the next frontier of Web 3.0 talent.</Heading>
          <Box display={"flex"} flexDirection={"row"} justifyContent={"space-evenly"} gap={"4rem"} mt={"3rem"}>
            <Box display={"flex"} flexDirection={"column"} px={"3rem"}>
              <Heading mt={"1rem"} as='h4' fontSize={"26"}>Student?</Heading>
              <Text textStyle='primary' fontSize={"19"}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
              <Button textStyle='primary' mt={"3rem"} width={"auto"} p={"1.5rem"} bgColor={"purple.600"} alignSelf={"start"} >Join BlockSocDAO</Button>
            </Box>
            <Box display={"flex"} flexDirection={"column"} px={"3rem"}>
              <Heading mt={"1rem"} as='h4' fontSize={"26"} >Company?</Heading>
              <Text textStyle='primary' fontSize={"19"} >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
              <Button textStyle='primary' mt={"3rem"} width={"auto"} p={"1.5rem"} bgColor={"purple.600"} alignSelf={"start"} >Join BlockSocDAO</Button>
            </Box>

          </Box>
          <Box display={"flex"} flexDirection={"row"} justifyContent={"start"} px={"3rem"} pt={"3rem"} pb={"2rem"}>
            <Box display={"flex"} flexDirection={"column"} >
              <Heading mt={"1rem"} as='h4' fontSize={"24"} marginTop={"2rem"}>Just want to hang out? Join our Discord</Heading>
              <Box display={"flex"} justifyContent={"start"} my={"1rem"}>
                <Link href="https://discord.gg/YRKHzc7ymb" >
                  <a target="_blank">
                    <Image src={discord_logo} height={"50px"} width={"50px"} />
                  </a>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
     );
}
 
export default CallToActionContainer;