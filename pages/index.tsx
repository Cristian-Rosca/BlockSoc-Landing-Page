import { Box, Button, Container, Divider, Heading, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from "react";
import CallToActionContainer from '../components/CallToActionContainer'
import NFTTypesContainer from '../components/NFTTypesContainer'
import HeroContainer from '../components/HeroContainer'
import PartnersContainer from '../components/PartnersContainer'
import StudentFirstBanner from '../components/StudentFirstBanner'
import WhatWeOfferContainer from '../components/WhatWeOfferContainer'
import { ActiveDisplayContext } from '../contexts/ActiveDisplayContext'
import HowItWorksContainer from '../components/HowItWorksContainer';

const Home: NextPage = () => {


  const [howItWorksDisplay, setHowItWorksDisplay] = useState<string>("Students")

  return (
    <>

      <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} >

        <HeroContainer />

        <ActiveDisplayContext.Provider value={{ howItWorksDisplay, setHowItWorksDisplay }}>


          <WhatWeOfferContainer />

          <StudentFirstBanner />

          <HowItWorksContainer />
        </ActiveDisplayContext.Provider>



        <PartnersContainer />
        <CallToActionContainer />
        <NFTTypesContainer />

      </Box>

    </>
  )
}

export default Home
