import { Box, Button, Container, Divider, Heading, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import daolens_logo from "../public/daolens.png"
import moralis_logo from "../public/moralis.png"
import cityDAO_logo from "../public/citydao.png"
import discord_logo from "../public/discord.svg"
import Link from 'next/link'
import HowItWorksStudents from '../components/HowItWorksStudents'
import HowItWorksCompany from '../components/HowItWorksCompany'
import React, { useEffect, useState } from "react";
import { HiOutlineCube } from "react-icons/hi";
import EducationInfo from '../components/FeatureInfo/EducationInfo'
import CommunityInfo from '../components/FeatureInfo/CommunityInfo'
import BountiesInfo from '../components/FeatureInfo/BountiesInfo'
import JobPortalsInfo from '../components/FeatureInfo/JobPortalsInfo'
import EducationIcon from '../components/FeaturesIcon/EducationIcon'
import BountiesIcon from '../components/FeaturesIcon/BountiesIcon'
import CommunityIcon from '../components/FeaturesIcon/CommunityIcon'
import JobPortalsIcon from '../components/FeaturesIcon/JobPortalsIcon'

const Home: NextPage = () => {

  const [howItWorksDisplay, setHowItWorksDisplay] = useState<string>("Students")
  const [featureInfoDisplay, setFeatureInfoDisplay] = useState<string>("Company")

  const getFeatureInfoSection = (sectionName : string) => {
    switch (sectionName){
      case "Education":
        return <EducationInfo/>
      case "Bounties":
        return <BountiesInfo/>
      case "Job Portals":
        return <JobPortalsInfo/>
      case "Community":
        return <CommunityInfo/>
      default:
        return <BountiesInfo/>
    }
  }
  
  const getFeatureIconSection = (sectionName : string) => {
    switch (sectionName){
      case "Education":
        return <EducationIcon/>
      case "Bounties":
        return <BountiesIcon/>
      case "Job Portals":
        return <JobPortalsIcon/>
      case "Community":
        return <CommunityIcon/>
      default:
        return <BountiesIcon/>
    }
  }

  return (
    <>
      <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
        <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} >
          <Container mt={"10rem"} maxW='container.lg'>
            <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} alignItems={"center"}>

              <Heading as='h1' size='4xl' lineHeight={"1.3"} textAlign={"center"}> Bridging the Web 3.0 talent gap</Heading>
              <Text textStyle='primary' fontSize={"19"} width={"90%"} textAlign={"center"} mt={"1rem"}>BlockSocDAO is the gateway for students entering into Web3 and the ideal platform for employers seeking to discover innovative Web3.0 talent
              </Text>
              <Button textStyle='primary' mt={"3rem"} width={"auto"} p={"2rem"} bgColor={"purple.600"}>Join BlockSocDAO</Button>
            </Box>
          </Container>

          <Container mt={"10rem"} maxW='container.lg'>
            <Heading as='h2' size='3xl' textAlign={"center"} > How it works</Heading>
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
            {(howItWorksDisplay == "Students") ? <HowItWorksStudents /> : <HowItWorksCompany />}

          </Container>

          <Container mt={"11rem"} maxW='container.lg'>
            <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} alignItems={"center"}>
              <Heading as='h2' size='3xl' textAlign={"center"} >A student-first platform</Heading>
              <Text textStyle='primary' fontSize={"19"} width={"60%"} textAlign={"center"} mt={"1rem"}>BlockSocDAO is a student-first platform and we want to do everything right for the new generation of innovators.
              </Text>
            </Box>
          </Container>
          <Container mt={"10rem"} maxW='100%'>
            <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
              <Box display={"flex"} flexDirection={"column"} flex={2} justifyContent={"flex-start"} alignItems={"flex-start"}>
                <Button leftIcon={featureInfoDisplay === "Education" ? <HiOutlineCube></HiOutlineCube> : <></>}variant={"link"} textStyle='primary' fontSize={featureInfoDisplay === "Education" ? "22" : "19" } ml={"5rem"} mt={10} color={featureInfoDisplay === "Education" ? "#D1FF6F" :"" } onClick={() => setFeatureInfoDisplay("Education")}>Education</Button>
                <Button leftIcon={featureInfoDisplay === "Bounties" ? <HiOutlineCube></HiOutlineCube> : <></>} variant={"link"} textStyle='primary' fontSize={featureInfoDisplay === "Bounties" ? "22" : "19" } ml={"5rem"} mt={10} color={featureInfoDisplay === "Bounties" ? "#D1FF6F" :"" } onClick={() => setFeatureInfoDisplay("Bounties")}>Bounties</Button>
                <Button leftIcon={featureInfoDisplay === "Job Portals" ? <HiOutlineCube></HiOutlineCube> : <></>}variant={"link"} ml={"5rem"} fontSize={featureInfoDisplay === "Job Portals" ? "22" : "19" } textStyle='primary' mt={10} color={featureInfoDisplay === "Job Portals" ? "#D1FF6F" :"" } onClick={() => setFeatureInfoDisplay("Job Portals")}>Web 3.0 Job Portals</Button>
                <Button leftIcon={featureInfoDisplay === "Community" ? <HiOutlineCube></HiOutlineCube> : <></>}variant={"link"} ml={"5rem"} fontSize={featureInfoDisplay === "Community" ? "22" : "19" } textStyle='primary' mt={10} color={featureInfoDisplay === "Community" ? "#D1FF6F" :"" } onClick={() => setFeatureInfoDisplay("Community")}>Community</Button>
              </Box>
              {getFeatureInfoSection(featureInfoDisplay)}
              {getFeatureIconSection(featureInfoDisplay)}
            </Box>
          </Container>
          <Container mt={"10rem"} maxW='container.lg'>
            <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} >
              <Heading as='h3' size='xl' textAlign={"center"} alignSelf={"center"} width={"80%"} mb={"2rem"}>Trusted by partners from across the globe</Heading>
              <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"}>
                <Image src={daolens_logo} width={"177px"} height={"48px"} />
                <Image src={moralis_logo} width={"177px"} height={"48px"} />
                <Image src={cityDAO_logo} width={"177px"} height={"48px"} />
              </Box>
            </Box>
          </Container>
          <Container mt={"10rem"} maxW='container.xl' bg={"#3D00EE"}>
            <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} >
              <Heading pt={"5rem"} px={"3rem"} as='h2' size='3xl' textAlign={"start"} >Help us build the next frontier of Web 3.0 talent.</Heading>
              <Box display={"flex"} flexDirection={"row"} justifyContent={"space-evenly"} gap={"4rem"} mt={"3rem"}>
                <Box display={"flex"} flexDirection={"column"} px={"3rem"}>
                  <Heading mt={"1rem"} as='h4' fontSize={"26"}>Student?</Heading>
                  <Text textStyle='primary' fontSize={"19"}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                  <Button textStyle='primary' mt={"3rem"} width={"auto"} p={"1.5rem"} bgColor={"purple.600"} alignSelf={"start"} >Join BlockSocDAO</Button>
                </Box>
                <Box display={"flex"} flexDirection={"column"} px={"3rem"}>
                  <Heading mt={"1rem"} as='h4' fontSize={"26"} >Company?</Heading>
                  <Text textStyle='primary' fontSize={"19"} >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                  <Button textStyle='primary' mt={"3rem"} width={"auto"} p={"1.5rem"} bgColor={"purple.600"} alignSelf={"start"} >Join BlockSocDAO</Button>
                </Box>

              </Box>
              <Box display={"flex"} flexDirection={"row"} justifyContent={"start"} px={"3rem"} pt={"3rem"} pb={"2rem"}>
                <Box display={"flex"} flexDirection={"column"} >
                  <Heading mt={"1rem"} as='h4' fontSize={"24"} marginTop={"2rem"}>Just want to hang out? Join our Discord</Heading>
                  <Box display={"flex"} justifyContent={"start"} my={"1rem"}>
                    <Link href="https://discord.gg/YRKHzc7ymb" >
                      <a target="_blank">
                        <Image src={discord_logo} height={"50px"} width={"50px"} />
                      </a>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>

          <Container mt={"10rem"} maxW='container.lg' >
            <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} alignItems={"center"}>
              <Heading as='h2' size='3xl' textAlign={"center"} >Types of NFTs</Heading>
              <Text textStyle='primary' textAlign={"center"} mt={"1rem"} fontSize={"19"} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </Box>
            <Box mb={"5rem"} display={"flex"} flexDirection={"row"} justifyContent={"space-evenly"} gap={"4rem"}>
              <Box mt={"5rem"} display={"flex"} flexDirection={"column"} bg={"rgba(52, 52, 52, 0.2)"} p={"3rem"}>
                <Image src={discord_logo} width={"150px"} height={"150px"} />
                <Heading mt={"3rem"} as='h4' size='l' >Dynamic NFT for students</Heading>
              </Box>
              <Box mt={"5rem"} display={"flex"} flexDirection={"column"} bg={"rgba(52, 52, 52, 0.2)"} p={"3rem"}>
                <Image src={discord_logo} width={"150px"} height={"150px"} />
                <Heading mt={"3rem"} as='h4' size='l' >Resource NFT for companies</Heading>
              </Box>
            </Box>

          </Container>
        </Box>
      </Box>
    </>
  )
}

export default Home
