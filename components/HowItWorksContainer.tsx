import { Box, Button, Container, Heading } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ActiveDisplayContext } from "../contexts/ActiveDisplayContext";
import { CompanyInfoContext } from "../contexts/CompanyInfoContext";
import { StudentInfoContext } from "../contexts/StudentInfoContext";
import CompanyFeaturesDetails from "./FeaturesDetailsContainers/CompanyFeaturesDetails";
import StudentFeaturesDetails from "./FeaturesDetailsContainers/StudentFeaturesDetails";



const HowItWorksContainer = () => {

  const { howItWorksDisplay, setHowItWorksDisplay } = useContext(ActiveDisplayContext)

  const [studentFeatureInfoDisplay, setStudentFeatureInfoDisplay] = useState<string>("Student_Education")
  const [companyFeatureInfoDisplay, setCompanyFeatureInfoDisplay] = useState<string>("Company_Education")



  return (
    <Container mt={"10rem"} maxW='100%'>
      <Heading as='h2' size='3xl' textAlign={"center"} >How it works</Heading>
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
      <StudentInfoContext.Provider value={{ studentFeatureInfoDisplay, setStudentFeatureInfoDisplay }}>
        <CompanyInfoContext.Provider value={{ companyFeatureInfoDisplay, setCompanyFeatureInfoDisplay }}>
          {(howItWorksDisplay === "Students") ? <StudentFeaturesDetails /> : <CompanyFeaturesDetails />}
        </CompanyInfoContext.Provider>
      </StudentInfoContext.Provider>
    </Container>
  );
}

export default HowItWorksContainer;