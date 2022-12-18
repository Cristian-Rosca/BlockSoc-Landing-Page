import { Box, Button, useMediaQuery } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { getFeatureIconSection, getFeatureInfoSection } from "../../service/utils";
import { HiOutlineCube } from "react-icons/hi";
import { StudentInfoContext } from "../../contexts/StudentInfoContext";


const StudentFeaturesDetails = () => {

  const { studentFeatureInfoDisplay, setStudentFeatureInfoDisplay } = useContext(StudentInfoContext)

  const [isLessThan650px, isGreaterThan650px, isLessThan1080px, isGreaterThan1080px] = useMediaQuery([
    '(max-width: 650px)',
    '(min-width: 650px)',
    '(max-width: 1080px)',
    '(min-width: 1080px)'
  ]);

  return (
    <>
    {/* // Create a function that will conditionally render the component based on the media query -> essentially put the below into a function? */}
      {isGreaterThan1080px ?
        <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} mt={"5rem"} px={"5%"}>
          <Box display={"flex"} flexDirection={"column"}  alignItems={"flex-start"} width={"20%"} ml={"3%"}>
            <Button leftIcon={studentFeatureInfoDisplay === "Student_Education" ? <HiOutlineCube></HiOutlineCube> : <></>} variant={"link"} textStyle='primary' fontSize={studentFeatureInfoDisplay === "Student_Education" ? "1.3rem" : "1.2rem"}  mt={10} color={studentFeatureInfoDisplay === "Student_Education" ? "#D1FF6F" : ""} onClick={() => setStudentFeatureInfoDisplay("Student_Education")}>Education</Button>
            <Button leftIcon={studentFeatureInfoDisplay === "Student_Bounties" ? <HiOutlineCube></HiOutlineCube> : <></>} variant={"link"} textStyle='primary' fontSize={studentFeatureInfoDisplay === "Student_Bounties" ? "1.3rem" : "1.2rem"}  mt={10} color={studentFeatureInfoDisplay === "Student_Bounties" ? "#D1FF6F" : ""} onClick={() => setStudentFeatureInfoDisplay("Student_Bounties")}>Bounties</Button>
            <Button leftIcon={studentFeatureInfoDisplay === "Student_Resume" ? <HiOutlineCube></HiOutlineCube> : <></>} variant={"link"}  fontSize={studentFeatureInfoDisplay === "Student_Resume" ? "1.3rem" : "1.2rem"} textStyle='primary' mt={10} color={studentFeatureInfoDisplay === "Student_Resume" ? "#D1FF6F" : ""} onClick={() => setStudentFeatureInfoDisplay("Student_Resume")}>On-Chain Resumes</Button>
            <Button leftIcon={studentFeatureInfoDisplay === "Student_Job_Portals" ? <HiOutlineCube></HiOutlineCube> : <></>} variant={"link"}  fontSize={studentFeatureInfoDisplay === "Student_Job_Portals" ? "1.3rem" : "1.2rem"} textStyle='primary' mt={10} color={studentFeatureInfoDisplay === "Student_Job_Portals" ? "#D1FF6F" : ""} onClick={() => setStudentFeatureInfoDisplay("Student_Job_Portals")}>Web3 Jobs</Button>
          </Box>
          <Box width={"40%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            {getFeatureInfoSection(studentFeatureInfoDisplay)}
          </Box>
          <Box width={"20%"} display={"flex"} justifyContent={"center"} alignItems={"center"} mr={"3%"} >
            {getFeatureIconSection(studentFeatureInfoDisplay)}
          </Box>
        </Box> : ""
      }
      {
        isGreaterThan650px && isLessThan1080px ?
          <Box display={"flex"} flexDirection={"column"} justifyContent={"flex start"} alignItems={"center"} mt={"4rem"}>
            <Box display={"flex"} flexDirection={"row"} gap={3}>
              <Button leftIcon={studentFeatureInfoDisplay === "Student_Education" ? <HiOutlineCube></HiOutlineCube> : <></>} variant={"link"} textStyle='primary' fontSize={studentFeatureInfoDisplay === "Student_Education" ? "1.3rem" : "1.2rem"} color={studentFeatureInfoDisplay === "Student_Education" ? "#D1FF6F" : ""} onClick={() => setStudentFeatureInfoDisplay("Student_Education")}>Education</Button>
              <Button leftIcon={studentFeatureInfoDisplay === "Student_Bounties" ? <HiOutlineCube></HiOutlineCube> : <></>} variant={"link"} textStyle='primary' fontSize={studentFeatureInfoDisplay === "Student_Bounties" ? "1.3rem" : "1.2rem"} color={studentFeatureInfoDisplay === "Student_Bounties" ? "#D1FF6F" : ""} onClick={() => setStudentFeatureInfoDisplay("Student_Bounties")}>Bounties</Button>
              <Button leftIcon={studentFeatureInfoDisplay === "Student_Resume" ? <HiOutlineCube></HiOutlineCube> : <></>} variant={"link"} fontSize={studentFeatureInfoDisplay === "Student_Resume" ? "1.3rem" : "1.2rem"} textStyle='primary' color={studentFeatureInfoDisplay === "Student_Resume" ? "#D1FF6F" : ""} onClick={() => setStudentFeatureInfoDisplay("Student_Resume")}>On-Chain Resumes</Button>
              <Button leftIcon={studentFeatureInfoDisplay === "Student_Job_Portals" ? <HiOutlineCube></HiOutlineCube> : <></>} variant={"link"} fontSize={studentFeatureInfoDisplay === "Student_Job_Portals" ? "1.3rem" : "1.2rem"} textStyle='primary' color={studentFeatureInfoDisplay === "Student_Job_Portals" ? "#D1FF6F" : ""} onClick={() => setStudentFeatureInfoDisplay("Student_Job_Portals")}>Web3 Jobs</Button>
            </Box>
            <Box display={"flex"} flexDirection={"row"} justifyContent={"space-around"} alignItems={"center"}  mt={"3rem"} px={"5%"}>
            <Box display={"flex"} width={"60%"}>
              {getFeatureInfoSection(studentFeatureInfoDisplay)}
            </Box>
            <Box display={"flex"} width={"30%"}>
              {getFeatureIconSection(studentFeatureInfoDisplay)}
            </Box>
            </Box>
          </Box>
          : ""

      }
      {
        isLessThan650px ?
          <Box display={"flex"} flexDirection={"column"} justifyContent={"flex start"} textAlign={"center"} alignItems={"center"} px={"8%"}>
            {/*  make this a map -> turn each of these into enums */}
              <Box mt={"3rem"} display={"flex"}>
                {getFeatureInfoSection("Student_Education")}
              </Box>
           
              <Box mt={"3rem"} display={"flex"}>
                {getFeatureInfoSection("Student_Bounties")}
              </Box>
        
              <Box mt={"3rem"} display={"flex"}>
                {getFeatureInfoSection("Student_Resume")}
              </Box>
            
              <Box mt={"3rem"} display={"flex"}>
                {getFeatureInfoSection("Student_Job_Portals")}
              </Box>

          </Box>
          : ""
      }
    </>
  )
      
}

export default StudentFeaturesDetails;