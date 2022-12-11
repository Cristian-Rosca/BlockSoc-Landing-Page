import { Box, Button, Container, Heading } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ActiveDisplayContext } from "../contexts/ActiveDisplayContext";
import CompanyFeatures from "./CompanyFeatures";
import StudentFeatures from "./StudentFeatures";

const WhatWeOfferContainer = () => {
    const {howItWorksDisplay, setHowItWorksDisplay} = useContext(ActiveDisplayContext)

    return ( 
        <Container mt={"10rem"} maxW='container.lg'>
          <Heading as='h2' size='3xl' textAlign={"center"}>What We Offer</Heading>
          {howItWorksDisplay === "Students" ?
            <Box display={"flex"} justifyContent={"center"} mt={"1rem"}>
              <Button mr={7} fontSize={"22"} textStyle='primary' color={"#D1FF6F"} variant={"link"} onClick={() => setHowItWorksDisplay("Students")}>For Students</Button>
              <Button textStyle='primary' fontSize={"22"} variant={"link"} onClick={() => setHowItWorksDisplay("Company")}>For Companies</Button>
            </Box>
            :
            <Box display={"flex"} justifyContent={"center"} mt={"1rem"}>
              <Button mr={7} fontSize={"22"} textStyle='primary' variant={"link"} onClick={() => setHowItWorksDisplay("Students")}>For Students</Button>
              <Button textStyle='primary' fontSize={"22"} variant={"link"} color={"#D1FF6F"} onClick={() => setHowItWorksDisplay("Company")}>For Companies</Button>
            </Box>
          }
          {(howItWorksDisplay === "Students") ? <StudentFeatures /> : <CompanyFeatures />}

        </Container>
     );
}
 
export default WhatWeOfferContainer;