import { Box, Container, Heading, Text } from "@chakra-ui/react";

const StudentFirstBanner = () => {
    return ( 
        <Container mt={"11rem"} maxW='container.lg'>
        <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} alignItems={"center"}>
          <Heading as='h2' size='3xl' textAlign={"center"} >A student-first platform</Heading>
          <Text textStyle='primary' fontSize={"19"} width={"60%"} textAlign={"center"} mt={"1rem"}>BlockSocDAO is a student-first platform and we want to do everything right for the new generation of innovators.
          </Text>
        </Box>
      </Container>
     );
}
 
export default StudentFirstBanner;