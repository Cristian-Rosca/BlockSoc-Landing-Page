import { Flex, Heading, Text } from "@chakra-ui/react";

const StudentFirstBanner = () => {
  return (

    <Flex flexDirection={"column"} justifyContent={"flex-start"} alignItems={"center"} mt={"10rem"} px={"5%"}>
      <Heading as='h2' size={{ base: "2xl", sm: "2xl", md: "3xl", lg: "3xl" }} textAlign={"center"} >Built by students, for students.</Heading>
      <Text textStyle='primary' fontSize={"1.2rem"}  textAlign={"center"} mt={"1rem"} maxWidth={{base: "90%", sm: "100%", md: "75%", lg: "60%"}}>As a student-first platform, BlockSocDAO was designed to support the next generation of Web3 innovators.
      </Text>
    </Flex>

  );
}

export default StudentFirstBanner;