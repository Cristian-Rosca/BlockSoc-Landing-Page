import { Box, Button, Container, Heading, useMediaQuery } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ActiveDisplayContext } from "../contexts/ActiveDisplayContext";
import { CompanyInfoContext } from "../contexts/CompanyInfoContext";
import { StudentInfoContext } from "../contexts/StudentInfoContext";
import CompanyFeaturesDetails from "./FeaturesDetailsContainers/CompanyFeaturesDetails";
import StudentFeaturesDetails from "./FeaturesDetailsContainers/StudentFeaturesDetails";



const HowItWorksContainer = () => {

  const { howItWorksDisplay, setHowItWorksDisplay } = useContext(ActiveDisplayContext)

  const [studentFeatureInfoDisplay, setStudentFeatureInfoDisplay] = useState<string>("Student_Education")
  const [companyFeatureInfoDisplay, setCompanyFeatureInfoDisplay] = useState<string>("Company_Bounties")

  const [isGreaterThan650px] = useMediaQuery([
    '(min-width: 650px)',
  ]);

  return (
    <Container mt={isGreaterThan650px ? "10rem" : "7rem"} maxW='100%'>
      <Heading as='h2' size={{base: "2xl", sm: '3xl'}} textAlign={"center"}>How it works</Heading>
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
      <StudentInfoContext.Provider value={{ studentFeatureInfoDisplay, setStudentFeatureInfoDisplay }}>
        <CompanyInfoContext.Provider value={{ companyFeatureInfoDisplay, setCompanyFeatureInfoDisplay }}>
          {(howItWorksDisplay === "Students") ? <StudentFeaturesDetails /> : <CompanyFeaturesDetails />}
        </CompanyInfoContext.Provider>
      </StudentInfoContext.Provider>
    </Container>
  );
}

export default HowItWorksContainer;