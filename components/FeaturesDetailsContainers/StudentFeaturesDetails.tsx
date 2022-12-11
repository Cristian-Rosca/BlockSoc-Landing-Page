import { Box, Button } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { getFeatureIconSection, getFeatureInfoSection } from "../../service/utils";
import { HiOutlineCube } from "react-icons/hi";
import { StudentInfoContext } from "../../contexts/StudentInfoContext";


const StudentFeaturesDetails = () => {
  
  const {studentFeatureInfoDisplay, setStudentFeatureInfoDisplay} = useContext(StudentInfoContext)

  
  return ( 
        <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} mt={"5rem"}>
              <Box display={"flex"} flexDirection={"column"} flex={2} justifyContent={"flex-start"} alignItems={"flex-start"}>
                <Button leftIcon={studentFeatureInfoDisplay === "Student_Education" ? <HiOutlineCube></HiOutlineCube> : <></>} variant={"link"} textStyle='primary' fontSize={studentFeatureInfoDisplay === "Student_Education" ? "22" : "19"} ml={"5rem"} mt={10} color={studentFeatureInfoDisplay === "Student_Education" ? "#D1FF6F" : ""} onClick={() => setStudentFeatureInfoDisplay("Student_Education")}>Education</Button>
                <Button leftIcon={studentFeatureInfoDisplay === "Student_Bounties" ? <HiOutlineCube></HiOutlineCube> : <></>} variant={"link"} textStyle='primary' fontSize={studentFeatureInfoDisplay === "Student_Bounties" ? "22" : "19"} ml={"5rem"} mt={10} color={studentFeatureInfoDisplay === "Student_Bounties" ? "#D1FF6F" : ""} onClick={() => setStudentFeatureInfoDisplay("Student_Bounties")}>Bounties</Button>
                <Button leftIcon={studentFeatureInfoDisplay === "Student_Resume" ? <HiOutlineCube></HiOutlineCube> : <></>} variant={"link"} ml={"5rem"} fontSize={studentFeatureInfoDisplay === "Student_Resume" ? "22" : "19"} textStyle='primary' mt={10} color={studentFeatureInfoDisplay === "Student_Resume" ? "#D1FF6F" : ""} onClick={() => setStudentFeatureInfoDisplay("Student_Resume")}>On-Chain Resumes</Button>
                <Button leftIcon={studentFeatureInfoDisplay === "Student_Job_Portals" ? <HiOutlineCube></HiOutlineCube> : <></>} variant={"link"} ml={"5rem"} fontSize={studentFeatureInfoDisplay === "Student_Job_Portals" ? "22" : "19"} textStyle='primary' mt={10} color={studentFeatureInfoDisplay === "Student_Job_Portals" ? "#D1FF6F" : ""} onClick={() => setStudentFeatureInfoDisplay("Student_Job_Portals")}>Web3 Jobs</Button>
              </Box>
              {getFeatureInfoSection(studentFeatureInfoDisplay)}
              {getFeatureIconSection(studentFeatureInfoDisplay)}
            </Box>
     );
}
 
export default StudentFeaturesDetails;