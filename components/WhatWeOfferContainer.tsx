import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ActiveDisplayContext } from "../contexts/ActiveDisplayContext";
import CompanyFeatures from "./CompanyFeatures";
import StudentFeatures from "./StudentFeatures";

const WhatWeOfferContainer = () => {
    const {howItWorksDisplay, setHowItWorksDisplay} = useContext(ActiveDisplayContext)

    return ( 
        <Flex flexDirection={"column"} mt={"10rem"} px={"5%"}>
          <Heading as='h2' size={{ base: "2xl", sm: "2xl", md: "3xl", lg: "3xl" }} textAlign={"center"}>What We Offer</Heading>
          {howItWorksDisplay === "Students" ?
        <Box display={"flex"} flexDirection={{base: "column", sm: 'row'}} justifyContent={"center"} mt={"1rem"} gap={"1.2rem"}>
          <Button  fontSize={"1.3rem"} textStyle='primary' color={"#D1FF6F"} variant={"link"} onClick={() => setHowItWorksDisplay("Students")}>For Students</Button>
          <Button textStyle='primary' fontSize={"1.3rem"} variant={"link"} onClick={() => setHowItWorksDisplay("Company")}>For Companies</Button>
        </Box>
        :
        <Box display={"flex"} flexDirection={{base: "column", sm: 'row'}} justifyContent={"center"} mt={"1rem"} gap={"1.2rem"}>
          <Button  fontSize={"1.3rem"} textStyle='primary' variant={"link"} onClick={() => setHowItWorksDisplay("Students")}>For Students</Button>
          <Button textStyle='primary' fontSize={"1.3rem"} variant={"link"} color={"#D1FF6F"} onClick={() => setHowItWorksDisplay("Company")}>For Companies</Button>
        </Box>
      }
          {(howItWorksDisplay === "Students") ? <StudentFeatures /> : <CompanyFeatures />}

        </Flex>
     );
}
 
export default WhatWeOfferContainer;