import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import discord_logo from "../../public/discord.svg"


export const CompanyExposureInfo = () => {
  return (

    <Box display={"flex"} flexDirection={"column"} >
      <Heading as='h3' size='xl'>Gain Exposure</Heading >
      <Text textStyle='primary' fontSize={"19"} mt={"1rem"}>By partnering with BlockSocDAO, you can tap into the power of our vibrant community of web3-native students and professionals. As a partner, our entire community will learn about your business or project, giving you the opportunity to onboard new users and build your brand.

        <br /><br />

        With a strong presence on our platform, you can connect with top talent and showcase your business or project to a highly engaged audience.</Text>
    </Box>

  );
}

export default CompanyExposureInfo;