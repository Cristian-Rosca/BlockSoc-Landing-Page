import { Flex, Button, Heading, Text } from "@chakra-ui/react";

const HeroContainer = () => {
  return (

    <Flex flexDirection={"column"} justifyContent={"flex-start"} alignItems={"center"} mt={{ base: "5rem", lg: "8rem" }} px={{ base: "5%", md: "10%", lg: "15%" }}>
      <Heading as={"h2"} size={{ base: "2xl", sm: "2xl", md: "3xl", lg: "4xl" }} lineHeight={"1.3rem"} textAlign={"center"}> Web3&apos;s premier talent development hub</Heading>
      <Text textStyle='primary' fontSize={"1.2rem"} textAlign={"center"} mt={"2rem"} width={"80%"}>BlockSocDAO is the central Web3 education and upskilling hub 
designed for students interested in learning about and building a career in Web3. BlockSocDAO offers a suite of tools and features that enable web3 native employers to discover, verify, and recruit the best emerging Web3 talent.
      </Text>
      <Button textStyle='primary' mt={"3rem"} width={"auto"} p={{base: "1.4rem", md:"1.5rem" }} bgColor={"purple.600"} rounded={12}>Join Our Discord</Button>
    </Flex>

  );
}

export default HeroContainer;