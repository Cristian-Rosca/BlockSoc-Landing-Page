import { Flex, Button, Heading, Text } from "@chakra-ui/react";

const HeroContainer = () => {
  return (

    <Flex flexDirection={"column"} justifyContent={"flex-start"} alignItems={"center"} mt={{ base: "5rem", lg: "8rem" }} px={{ base: "5%", md: "10%", lg: "15%" }}>
      <Heading as={"h2"} size={{ base: "2xl", sm: "2xl", md: "3xl", lg: "4xl" }} lineHeight={"1.3rem"} textAlign={"center"}> Bridging the Web 3.0 talent gap</Heading>
      <Text textStyle='primary' fontSize={"1.2rem"} textAlign={"center"} mt={"2rem"} width={"80%"}>BlockSoc is the gateway for students entering into Web3 and the ideal platform for employers seeking to discover innovative Web3.0 talent
      </Text>
      <Button textStyle='primary' mt={"3rem"} width={"auto"} p={{base: "1.4rem", md:"1.5rem" }} bgColor={"purple.600"} rounded={12}>Join BlockSoc</Button>
    </Flex>

  );
}

export default HeroContainer;