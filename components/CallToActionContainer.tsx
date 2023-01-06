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
          <Heading mt={"1rem"} as='h4' fontSize={{ base: "1.6rem", md: "1.9em" }}>Student?</Heading>
          <Text textStyle='primary' fontSize={"19"}>Do you want access to best-in-class education and the opportunity to gain practical experience, all while being rewarded with crypto? If so, we encourage you to register your interest in our Beta release below. Our platform offers a range of tools and resources designed to help you succeed in the web3 industry, including education courses, bounties, and more.</Text>
          <Box>
            <a href={"https://forms.gle/YGwd2Vi81GmJMxTZA"} target="_blank" rel="noreferrer">
              <Button textStyle='primary' mt={isGreaterThan650px ? "3rem" : "2rem"} p={{ base: "1.4rem", md: "1.5rem" }} bgColor={"purple.600"} rounded={12}>Register Interest</Button>
            </a>
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"} width={isGreaterThan650px ? "40%" : "90%"} alignItems={isGreaterThan650px ? "" : "center"} >
          <Heading mt={"1rem"} as='h4' fontSize={{ base: "1.6rem", md: "1.9em" }}>Company?</Heading>
          <Text textStyle='primary' fontSize={"19"} >If you're a company looking to stay ahead of the curve in the exciting world of web3, we invite you to become a partner. By partnering with us, you'll have access to a highly-engaged and skilled community of web3-native professionals, making it easier for you to recruit top talent and outsource bounties. Contact us today to learn more about partnering with us.</Text>
          <Box>
            <a href={"https://forms.gle/YGwd2Vi81GmJMxTZA"} target="_blank" rel="noreferrer">
              <Button textStyle='primary' mt={isGreaterThan650px ? "3rem" : "2rem"} p={{ base: "1.4rem", md: "1.5rem" }} bgColor={"purple.600"} rounded={12}>Register Interest</Button>
            </a>
          </Box>
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={"row"} justifyContent={"start"} px={"5%"} pt={"3rem"} pb={"2rem"}>
        <Box display={"flex"} flexDirection={"column"} >
          <Heading mt={"1rem"} as='h4' fontSize={isGreaterThan650px ? "1.5rem" : "1.3rem"} marginTop={"2rem"}>Just want to hang out? Join our Discord</Heading>
          <Box display={"flex"} my={"1rem"} justifyContent={isGreaterThan650px ? "" : "center"}>
            <a target="_blank" href="https://discord.gg/YRKHzc7ymb" rel="noreferrer">
              <Image src={discord_logo} height={"50px"} width={"50px"} />
            </a>
          </Box>
        </Box>
      </Box>
    </Box>

  );
}

export default CallToActionContainer;