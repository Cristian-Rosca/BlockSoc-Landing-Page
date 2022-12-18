import { Box, Button, useMediaQuery } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { getFeatureIconSection, getFeatureInfoSection } from "../../service/utils";
import { HiOutlineCube } from "react-icons/hi";
import { CompanyInfoContext } from "../../contexts/CompanyInfoContext";

const CompanyFeaturesDetails = () => {
  
  const {companyFeatureInfoDisplay, setCompanyFeatureInfoDisplay} = useContext(CompanyInfoContext)

  const [isLessThan650px, isGreaterThan650px, isLessThan1080px, isGreaterThan1080px] = useMediaQuery([
    '(max-width: 650px)',
    '(min-width: 650px)',
    '(max-width: 1080px)',
    '(min-width: 1080px)'
  ]);
  
  return ( 
            <>
            {isGreaterThan1080px ?
              <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} mt={"5rem"} px={"5%"}>
                <Box display={"flex"} flexDirection={"column"}  alignItems={"flex-start"} width={"20%"} ml={"3%"}>
                <Button leftIcon={companyFeatureInfoDisplay === "Company_Bounties" ? <HiOutlineCube></HiOutlineCube> : <></>} variant={"link"} textStyle='primary' fontSize={companyFeatureInfoDisplay === "Company_Bounties" ? "1.3rem" : "1.2rem"} mt={10} color={companyFeatureInfoDisplay === "Company_Bounties" ? "#D1FF6F" : ""} onClick={() => setCompanyFeatureInfoDisplay("Company_Bounties")}>Bounties</Button>
                <Button leftIcon={companyFeatureInfoDisplay === "Company_Exposure" ? <HiOutlineCube></HiOutlineCube> : <></>} variant={"link"} textStyle='primary' fontSize={companyFeatureInfoDisplay === "Company_Exposure" ? "1.3rem" : "1.2rem"} mt={10} color={companyFeatureInfoDisplay === "Company_Exposure" ? "#D1FF6F" : ""} onClick={() => setCompanyFeatureInfoDisplay("Company_Exposure")}>Exposure</Button>
                <Button leftIcon={companyFeatureInfoDisplay === "Company_Talent" ? <HiOutlineCube></HiOutlineCube> : <></>} variant={"link"} fontSize={companyFeatureInfoDisplay === "Company_Talent" ? "1.3rem" : "1.2rem"} textStyle='primary' mt={10} color={companyFeatureInfoDisplay === "Company_Talent" ? "#D1FF6F" : ""} onClick={() => setCompanyFeatureInfoDisplay("Company_Talent")}>Web3 Talent</Button>
                <Button leftIcon={companyFeatureInfoDisplay === "Company_Start-ups" ? <HiOutlineCube></HiOutlineCube> : <></>} variant={"link"} fontSize={companyFeatureInfoDisplay === "Company_Start-ups" ? "1.3rem" : "1.2rem"} textStyle='primary' mt={10} color={companyFeatureInfoDisplay === "Company_Start-ups" ? "#D1FF6F" : ""} onClick={() => setCompanyFeatureInfoDisplay("Company_Start-ups")}>Start-ups</Button>
                </Box>
                <Box width={"40%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                  {getFeatureInfoSection(companyFeatureInfoDisplay)}
                </Box>
                <Box width={"20%"} display={"flex"} justifyContent={"center"} alignItems={"center"} mr={"3%"} >
                  {getFeatureIconSection(companyFeatureInfoDisplay)}
                </Box>
              </Box> : ""
            }
            {
              isGreaterThan650px && isLessThan1080px ?
                <Box display={"flex"} flexDirection={"column"} justifyContent={"flex start"} alignItems={"center"} mt={"4rem"}>
                  <Box display={"flex"} flexDirection={"row"} gap={3}>
                  <Button leftIcon={companyFeatureInfoDisplay === "Company_Bounties" ? <HiOutlineCube></HiOutlineCube> : <></>} variant={"link"} textStyle='primary' fontSize={companyFeatureInfoDisplay === "Company_Bounties" ? "1.3rem" : "1.2rem"}  color={companyFeatureInfoDisplay === "Company_Bounties" ? "#D1FF6F" : ""} onClick={() => setCompanyFeatureInfoDisplay("Company_Bounties")}>Bounties</Button>
                <Button leftIcon={companyFeatureInfoDisplay === "Company_Exposure" ? <HiOutlineCube></HiOutlineCube> : <></>} variant={"link"} textStyle='primary' fontSize={companyFeatureInfoDisplay === "Company_Exposure" ? "1.3rem" : "1.2rem"}  color={companyFeatureInfoDisplay === "Company_Exposure" ? "#D1FF6F" : ""} onClick={() => setCompanyFeatureInfoDisplay("Company_Exposure")}>Exposure</Button>
                <Button leftIcon={companyFeatureInfoDisplay === "Company_Talent" ? <HiOutlineCube></HiOutlineCube> : <></>} variant={"link"} fontSize={companyFeatureInfoDisplay === "Company_Talent" ? "1.3rem" : "1.2rem"} textStyle='primary'  color={companyFeatureInfoDisplay === "Company_Talent" ? "#D1FF6F" : ""} onClick={() => setCompanyFeatureInfoDisplay("Company_Talent")}>Web3 Talent</Button>
                <Button leftIcon={companyFeatureInfoDisplay === "Company_Start-ups" ? <HiOutlineCube></HiOutlineCube> : <></>} variant={"link"} fontSize={companyFeatureInfoDisplay === "Company_Start-ups" ? "1.3rem" : "1.2rem"} textStyle='primary'  color={companyFeatureInfoDisplay === "Company_Start-ups" ? "#D1FF6F" : ""} onClick={() => setCompanyFeatureInfoDisplay("Company_Start-ups")}>Start-ups</Button>
                  </Box>
                  <Box display={"flex"} flexDirection={"row"} justifyContent={"space-around"} alignItems={"center"}  mt={"3rem"} px={"5%"}>
                  <Box display={"flex"} width={"60%"}>
                    {getFeatureInfoSection(companyFeatureInfoDisplay)}
                  </Box>
                  <Box display={"flex"} width={"30%"}>
                    {getFeatureIconSection(companyFeatureInfoDisplay)}
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
                      {getFeatureInfoSection("Company_Bounties")}
                    </Box>
                 
                    <Box mt={"3rem"} display={"flex"}>
                      {getFeatureInfoSection("Company_Exposure")}
                    </Box>
              
                    <Box mt={"3rem"} display={"flex"}>
                      {getFeatureInfoSection("Company_Talent")}
                    </Box>
                  
                    <Box mt={"3rem"} display={"flex"}>
                      {getFeatureInfoSection("Company_Start-ups")}
                    </Box>
      
                </Box>
                : ""
            }
          </>
     );
}
 
export default CompanyFeaturesDetails;