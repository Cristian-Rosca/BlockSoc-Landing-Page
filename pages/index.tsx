import { Box, Button, Container, Heading, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import logo from "../public/bs-logo.png"


const Home: NextPage = () => {
  return (
    <>

      <Box display={"flex"} flexDirection={"row"} height={"100rem"} justifyContent={"center"}>
        <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} >
          <Container mt={"10rem"} maxW='container.lg'>
            <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} alignItems={"center"}>

              <Heading as='h1' size='4xl' lineHeight={"1.3"} textAlign={"center"}> Bridging the Web 3.0 talent gap</Heading>
              <Text width={"60%"} textAlign={"center"} mt={"1rem"}>BlockSocDAO is the gateway for students entering into Web3 and the ideal platform for employers seeking to discover innovative Web3.0 talent
              </Text>
              <Button mt={"3rem"} width={"auto"} bgColor={"purple.600"}>Join BlockSocDAO</Button>
            </Box>
          </Container>
          <Container mt={"10rem"} maxW='container.lg'>
            <Heading as='h2' size='3xl' textAlign={"center"} > How it works</Heading>
            <Box mt={10} display={"flex"} flexDirection={"row"} justifyContent={"center"}>
              <Button mr={7} variant={"link"}>For Students</Button>
              <Button variant={"link"} >For Companies</Button>
            </Box>
          </Container>
          <Container mt={"10rem"} maxW='container.lg'>
            <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} alignItems={"center"}>
              <Heading as='h2' size='3xl' textAlign={"center"} >A student-first platform</Heading>
              <Text width={"60%"} textAlign={"center"} mt={"1rem"}>BlockSocDAO is a student-first platform and we want to do everything right for the new generation of innovators.
              </Text>
            </Box>
          </Container>
          <Container mt={"10rem"} maxW='100%'>
            <Box display={"flex"} flexDirection={"row"} justifyContent={"space-around"}>
              <Box display={"flex"} flexDirection={"column"} flex={2} justifyContent={"flex-start"} alignItems={"flex-start"}>
                <Text ml={"10rem"} mt={10} >Education</Text>
                <Text fontWeight={"bold"} ml={"10rem"} mt={10} color={"purple.600"}>Bounties</Text>
                <Text ml={"10rem"} mt={10}>Web 3.0 Job Portals</Text>
                <Text ml={"10rem"} mt={10}>Community</Text>
              </Box>
              <Box display={"flex"} flexDirection={"column"} flex={3}>
                <Heading as='h2' size='3xl' textAlign={"center"}>Bounties</Heading >
                <Text mt={10}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  {<br />} {<br />}
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
              </Box>
              <Box display={"flex"} flexDirection={"column"} flex={4}>
                <Image src={logo} width={"200px"} height={"350px"} />
              </Box>

            </Box>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default Home
