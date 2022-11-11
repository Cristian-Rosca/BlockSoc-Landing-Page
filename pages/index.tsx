import { Box, Button, Container, Heading, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import logo from "../public/bs-logo.png"


const Home: NextPage = () => {
  return (
    <>

      <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
        <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} >
          <Container mt={"10rem"} maxW='container.lg'>
            <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} alignItems={"center"}>

              <Heading as='h1' size='4xl' lineHeight={"1.3"} textAlign={"center"}> Bridging the Web 3.0 talent gap</Heading>
              <Text textStyle='primary' width={"60%"} textAlign={"center"} mt={"1rem"}>BlockSocDAO is the gateway for students entering into Web3 and the ideal platform for employers seeking to discover innovative Web3.0 talent
              </Text>
              <Button textStyle='primary' mt={"3rem"} width={"auto"} p={"2rem"} bgColor={"purple.600"}>Join BlockSocDAO</Button>
            </Box>
          </Container>
          <Box mt={"10rem"} display={"flex"} justifyContent={"space-between"}>
          <Text color={"rgba(255, 191, 0, 0.2)"}  fontSize={"120"} textAlign={"center"} >unching Soon</Text>
          <Text color={"rgba(255, 191, 0, 0.2)"}  fontSize={"120"} textAlign={"center"} >Launching Soon</Text>
          </Box>
          <Container mt={"10rem"} maxW='container.lg'>
            <Heading as='h2' size='3xl' textAlign={"center"} > How it works</Heading>
            <Box mt={10} display={"flex"} flexDirection={"row"} justifyContent={"center"}>
              <Button mr={7} variant={"link"}>For Students</Button>
              <Button variant={"link"} >For Companies</Button>
            </Box>
          </Container>
          <Box mt={"10rem"} display={"flex"} justifyContent={"space-between"}>
          <Text color={"rgba(255, 191, 0, 0.2)"}  fontSize={"120"} textAlign={"center"} ml={"12rem"} >Launching Soon</Text>
          <Text color={"rgba(255, 191, 0, 0.2)"}  fontSize={"120"} textAlign={"center"} >Launching</Text>
          </Box>
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
          <Container mt={"10rem"} maxW='container.lg'>
            <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} >
              <Heading as='h3' size='xl' textAlign={"center"} alignSelf={"center"} width={"80%"} mb={"2rem"}>Trusted by partners from across the globe</Heading>
              <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"}>
                <Image src={logo} width={"100px"} height={"150px"} />
                <Image src={logo} width={"100px"} height={"150px"} />
                <Image src={logo} width={"100px"} height={"150px"} />
              </Box>
            </Box>
          </Container>
          <Container mt={"10rem"} maxW='container.xl' bg={"#3D00EE"}>
            <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} >
              <Heading mt={"2rem"} as='h2' size='3xl' textAlign={"center"} >Help us build the next frontier of Web 3.0 talent.</Heading>
              <Box display={"flex"} flexDirection={"row"} justifyContent={"space-evenly"} gap={"4rem"} mt={"3rem"}>
                <Box display={"flex"} flexDirection={"column"} >
                  <Heading mt={"1rem"} as='h4' size='l'>Student?</Heading>
                  <Text>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                  <Button mt={"2rem"} width={"auto"} bgColor={"purple.600"} alignSelf={"start"}>Join BlockSocDAO</Button>
                </Box>
                <Box display={"flex"} flexDirection={"column"} >
                  <Heading mt={"1rem"} as='h4' size='l' >Company?</Heading>
                  <Text>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                  <Button mt={"2rem"} width={"auto"} bgColor={"purple.600"} alignSelf={"start"}>Join BlockSocDAO</Button>
                </Box>

              </Box>
              <Box display={"flex"} flexDirection={"row"} justifyContent={"start"}>
                <Box display={"flex"} flexDirection={"column"} >
                  <Heading mt={"1rem"} as='h4' size='l' mt={"2rem"}>Just want to hang out? Join our Discord</Heading>
                  <Button width={"auto"} bgColor={"purple.600"} mb={"2rem"} mt={"1rem"} alignSelf={"start"}>Join Discord</Button>
                </Box>
              </Box>
            </Box>
          </Container>
          <Box mt={"10rem"} display={"flex"} justifyContent={"space-between"}>
          <Text color={"rgba(255, 191, 0, 0.2)"}  fontSize={"120"} textAlign={"center"} >g Soon</Text>
          <Text color={"rgba(255, 191, 0, 0.2)"}  fontSize={"120"} textAlign={"center"} mr={"20rem"} >Launching Soon</Text>
          </Box>
          <Container mt={"10rem"} maxW='container.lg' >
            <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} alignItems={"center"}>
              <Heading as='h2' size='3xl' textAlign={"center"} >Types of NFTs</Heading>
              <Text width={"60%"} textAlign={"center"} mt={"1rem"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
              </Box>
              <Box display={"flex"} flexDirection={"row"} justifyContent={"space-evenly"} gap={"4rem"}>
                <Box mt={"5rem"} display={"flex"} flexDirection={"column"} bg={"rgba(52, 52, 52, 0.2)"} p={"3rem"}>
                  <Image src={logo} width={"100px"} height={"150px"} />
                  <Heading mt={"1rem"} as='h4' size='l' >Dynamic NFT for students</Heading>
                </Box>
                <Box mt={"5rem"} display={"flex"} flexDirection={"column"} bg={"rgba(52, 52, 52, 0.2)"} p={"3rem"}>
                  <Image src={logo} width={"100px"} height={"150px"} />
                  <Heading mt={"1rem"} as='h4' size='l' >Resource NFT for companies</Heading>
                </Box>
              </Box>
            
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default Home
