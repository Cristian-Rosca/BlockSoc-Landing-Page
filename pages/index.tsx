import { Box, Button, Container, Divider, Heading, Text, useMediaQuery } from '@chakra-ui/react'
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

  const [isGreaterThan650px] = useMediaQuery([
    '(min-width: 650px)',
  ]);

  return (
    <>

      <Box display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} >

        <HeroContainer />

        <ActiveDisplayContext.Provider value={{ howItWorksDisplay, setHowItWorksDisplay }}>


          {isGreaterThan650px ? <WhatWeOfferContainer /> : <HowItWorksContainer />}

          <StudentFirstBanner />

          {isGreaterThan650px ? <HowItWorksContainer /> : ""}

        </ActiveDisplayContext.Provider>



        <PartnersContainer />
        <CallToActionContainer />
        <NFTTypesContainer />

      </Box>

    </>
  )
}

export default Home
