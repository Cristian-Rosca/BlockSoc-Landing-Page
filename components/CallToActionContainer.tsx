import { Box, Button, Container, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import discord_logo from "../public/discord.svg"


const CallToActionContainer = () => {

  const [isGreaterThan650px] = useMediaQuery([
    '(min-width: 650px)',
  ]);

  return (

    <Box display={"flex"} flexDirection={"column"} mt={"8rem"} justifyContent={"flex-start"} rounded={10} bg={"#3D00EE"} mx={isGreaterThan650px ? "10%" : "7%"} textAlign={isGreaterThan650px ? "start" : "center"} mb={"4rem"}>
      <Heading pt={isGreaterThan650px ? "5rem" : "3rem"} px={"5%"} as='h2' size={isGreaterThan650px ? "3xl" : "xl"}  >Help us build the next frontier of Web 3.0 talent.</Heading>
      <Box display={"flex"} flexDirection={isGreaterThan650px ? "row" : "column"} mt={"3rem"} px={"5%"} justifyContent={"space-between"} alignItems={isGreaterThan650px ? "" : "center"} gap={isGreaterThan650px ? "" : "3rem"}>
        <Box display={"flex"} flexDirection={"column"} width={isGreaterThan650px ? "40%" : "90%"} alignItems={isGreaterThan650px ? "" : "center"}>
          <Heading mt={"1rem"} as='h4' fontSize={{base: "1.6rem", md: "1.9em"}}>Student?</Heading>
          <Text textStyle='primary' fontSize={"19"}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          <Box>
            <Button textStyle='primary' mt={isGreaterThan650px ? "3rem" : "2rem"} p={{base: "1.4rem", md:"1.5rem" }} bgColor={"purple.600"} rounded={12}>Join Discord</Button>
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"} width={isGreaterThan650px ? "40%" : "90%"} alignItems={isGreaterThan650px ? "" : "center"} >
          <Heading mt={"1rem"} as='h4' fontSize={{base: "1.6rem", md: "1.9em"}}>Company?</Heading>
          <Text textStyle='primary' fontSize={"19"} >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          <Box>
            <Button textStyle='primary' mt={isGreaterThan650px ? "3rem" : "2rem"} p={{base: "1.4rem", md:"1.5rem" }} bgColor={"purple.600"} rounded={12}>Contact Us</Button>
          </Box>
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={"row"} justifyContent={"start"} px={"5%"} pt={"3rem"} pb={"2rem"}>
        <Box display={"flex"} flexDirection={"column"} >
          <Heading mt={"1rem"} as='h4' fontSize={isGreaterThan650px ? "1.5rem" : "1.3rem"} marginTop={"2rem"}>Just want to hang out? Join our Discord</Heading>
          <Box display={"flex"} my={"1rem"} justifyContent={isGreaterThan650px ? "" : "center"}>
            <Link href="https://discord.gg/YRKHzc7ymb" >
              <a target="_blank">
                <Image src={discord_logo} height={"50px"} width={"50px"} />
              </a>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>

  );
}

export default CallToActionContainer;