import { Box, Button } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { getFeatureIconSection, getFeatureInfoSection } from "../../service/utils";
import { HiOutlineCube } from "react-icons/hi";
import { CompanyInfoContext } from "../../contexts/CompanyInfoContext";

const CompanyFeaturesDetails = () => {
  
  const {companyFeatureInfoDisplay, setCompanyFeatureInfoDisplay} = useContext(CompanyInfoContext)
  
  return ( 

        <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} mt={"5rem"}>
              <Box display={"flex"} flexDirection={"column"} flex={2} justifyContent={"flex-start"} alignItems={"flex-start"}>
                <Button leftIcon={companyFeatureInfoDisplay === "Company_Bounties" ? <HiOutlineCube></HiOutlineCube> : <></>} variant={"link"} textStyle='primary' fontSize={companyFeatureInfoDisplay === "Company_Bounties" ? "22" : "19"} ml={"5rem"} mt={10} color={companyFeatureInfoDisplay === "Company_Bounties" ? "#D1FF6F" : ""} onClick={() => setCompanyFeatureInfoDisplay("Company_Bounties")}>Bounties</Button>
                <Button leftIcon={companyFeatureInfoDisplay === "Company_Exposure" ? <HiOutlineCube></HiOutlineCube> : <></>} variant={"link"} textStyle='primary' fontSize={companyFeatureInfoDisplay === "Company_Exposure" ? "22" : "19"} ml={"5rem"} mt={10} color={companyFeatureInfoDisplay === "Company_Exposure" ? "#D1FF6F" : ""} onClick={() => setCompanyFeatureInfoDisplay("Company_Exposure")}>Exposure</Button>
                <Button leftIcon={companyFeatureInfoDisplay === "Company_Talent" ? <HiOutlineCube></HiOutlineCube> : <></>} variant={"link"} ml={"5rem"} fontSize={companyFeatureInfoDisplay === "Company_Talent" ? "22" : "19"} textStyle='primary' mt={10} color={companyFeatureInfoDisplay === "Company_Talent" ? "#D1FF6F" : ""} onClick={() => setCompanyFeatureInfoDisplay("Company_Talent")}>Web3 Talent</Button>
                <Button leftIcon={companyFeatureInfoDisplay === "Company_Start-ups" ? <HiOutlineCube></HiOutlineCube> : <></>} variant={"link"} ml={"5rem"} fontSize={companyFeatureInfoDisplay === "Company_Start-ups" ? "22" : "19"} textStyle='primary' mt={10} color={companyFeatureInfoDisplay === "Company_Start-ups" ? "#D1FF6F" : ""} onClick={() => setCompanyFeatureInfoDisplay("Company_Start-ups")}>Start-ups</Button>
              </Box>
              {getFeatureInfoSection(companyFeatureInfoDisplay)}
              {getFeatureIconSection(companyFeatureInfoDisplay)}
            </Box>
     );
}
 
export default CompanyFeaturesDetails;