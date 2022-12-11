import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { getFeatureIconSection, getFeatureInfoSection } from "../../service/utils";
import { HiOutlineCube } from "react-icons/hi";

const StudentFeaturesDetails = () => {
  
  const [studentFeatureInfoDisplay, setStudentFeatureInfoDisplay] = useState<string>("Bounties")
  
  return ( 
        <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} mt={"5rem"}>
              <Box display={"flex"} flexDirection={"column"} flex={2} justifyContent={"flex-start"} alignItems={"flex-start"}>
                <Button leftIcon={studentFeatureInfoDisplay === "Education" ? <HiOutlineCube></HiOutlineCube> : <></>} variant={"link"} textStyle='primary' fontSize={studentFeatureInfoDisplay === "Education" ? "22" : "19"} ml={"5rem"} mt={10} color={studentFeatureInfoDisplay === "Education" ? "#D1FF6F" : ""} onClick={() => setStudentFeatureInfoDisplay("Education")}>Education</Button>
                <Button leftIcon={studentFeatureInfoDisplay === "Bounties" ? <HiOutlineCube></HiOutlineCube> : <></>} variant={"link"} textStyle='primary' fontSize={studentFeatureInfoDisplay === "Bounties" ? "22" : "19"} ml={"5rem"} mt={10} color={studentFeatureInfoDisplay === "Bounties" ? "#D1FF6F" : ""} onClick={() => setStudentFeatureInfoDisplay("Bounties")}>Bounties</Button>
                <Button leftIcon={studentFeatureInfoDisplay === "Job Portals" ? <HiOutlineCube></HiOutlineCube> : <></>} variant={"link"} ml={"5rem"} fontSize={studentFeatureInfoDisplay === "Job Portals" ? "22" : "19"} textStyle='primary' mt={10} color={studentFeatureInfoDisplay === "Job Portals" ? "#D1FF6F" : ""} onClick={() => setStudentFeatureInfoDisplay("Job Portals")}>On-Chain Resume</Button>
                <Button leftIcon={studentFeatureInfoDisplay === "Community" ? <HiOutlineCube></HiOutlineCube> : <></>} variant={"link"} ml={"5rem"} fontSize={studentFeatureInfoDisplay === "Community" ? "22" : "19"} textStyle='primary' mt={10} color={studentFeatureInfoDisplay === "Community" ? "#D1FF6F" : ""} onClick={() => setStudentFeatureInfoDisplay("Community")}>Web3 Jobs</Button>
              </Box>
              {getFeatureInfoSection(studentFeatureInfoDisplay)}
              {getFeatureIconSection(studentFeatureInfoDisplay)}
            </Box>
     );
}
 
export default StudentFeaturesDetails;