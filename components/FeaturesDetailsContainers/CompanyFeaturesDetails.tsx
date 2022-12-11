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
                <Button leftIcon={companyFeatureInfoDisplay === "Education" ? <HiOutlineCube></HiOutlineCube> : <></>} variant={"link"} textStyle='primary' fontSize={companyFeatureInfoDisplay === "Education" ? "22" : "19"} ml={"5rem"} mt={10} color={companyFeatureInfoDisplay === "Education" ? "#D1FF6F" : ""} onClick={() => setCompanyFeatureInfoDisplay("Education")}>Bounties</Button>
                <Button leftIcon={companyFeatureInfoDisplay === "Bounties" ? <HiOutlineCube></HiOutlineCube> : <></>} variant={"link"} textStyle='primary' fontSize={companyFeatureInfoDisplay === "Bounties" ? "22" : "19"} ml={"5rem"} mt={10} color={companyFeatureInfoDisplay === "Bounties" ? "#D1FF6F" : ""} onClick={() => setCompanyFeatureInfoDisplay("Bounties")}>Exposure</Button>
                <Button leftIcon={companyFeatureInfoDisplay === "Job Portals" ? <HiOutlineCube></HiOutlineCube> : <></>} variant={"link"} ml={"5rem"} fontSize={companyFeatureInfoDisplay === "Job Portals" ? "22" : "19"} textStyle='primary' mt={10} color={companyFeatureInfoDisplay === "Job Portals" ? "#D1FF6F" : ""} onClick={() => setCompanyFeatureInfoDisplay("Job Portals")}>Web3 Talent</Button>
                <Button leftIcon={companyFeatureInfoDisplay === "Community" ? <HiOutlineCube></HiOutlineCube> : <></>} variant={"link"} ml={"5rem"} fontSize={companyFeatureInfoDisplay === "Community" ? "22" : "19"} textStyle='primary' mt={10} color={companyFeatureInfoDisplay === "Community" ? "#D1FF6F" : ""} onClick={() => setCompanyFeatureInfoDisplay("Community")}>Start-ups</Button>
              </Box>
              {getFeatureInfoSection(companyFeatureInfoDisplay)}
              {getFeatureIconSection(companyFeatureInfoDisplay)}
            </Box>
     );
}
 
export default CompanyFeaturesDetails;