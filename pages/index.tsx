import { Box, Button, Container, Heading, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import background from "./background.png"

const Home: NextPage = () => {
  return (
        <>
        <Box display={"flex"} flexDirection={"row"} height={"100rem"}>
          <Container mt={"10rem"} maxW='container.md'>
          <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>

          <Heading as='h1' size='4xl'> Bridging the Web 3.0 Talent Gap</Heading>
            <Text mt={"2rem"}>BlockSocDAO is the gateway for students entering into Web3 and the ideal platform for employers seeking to discover innovative Web3.0 talent
            </Text>
            <Button mt={"3rem"} width={"auto"} bgColor={"purple"}>Join BlockSoc</Button>
          </Box>

          </Container>
        </Box>
        </>
  )
}

export default Home
