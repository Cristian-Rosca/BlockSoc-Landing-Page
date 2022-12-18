import { Flex, Heading, Text } from "@chakra-ui/react";

const StudentFirstBanner = () => {
  return (

    <Flex flexDirection={"column"} justifyContent={"flex-start"} alignItems={"center"} mt={"10rem"} px={"5%"}>
      <Heading as='h2' size={{ base: "2xl", sm: "2xl", md: "3xl", lg: "3xl" }} textAlign={"center"} >A student-first platform</Heading>
      <Text textStyle='primary' fontSize={"1.2rem"}  textAlign={"center"} mt={"1rem"} maxWidth={{base: "90%", sm: "85%", md: "75%", lg: "60%"}}>BlockSocDAO is a student-first platform and we want to do everything right for the new generation of innovators.
      </Text>
    </Flex>

  );
}

export default StudentFirstBanner;