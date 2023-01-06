import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import discord_logo from "../../public/discord.svg"


export const CompanyStartUpsInfo = () => {
  return (


    <Box display={"flex"} flexDirection={"column"} flex={3}>
      <Heading as='h3' size='xl'>Find New Start-Ups</Heading >
      <Text textStyle='primary' fontSize={"19"} mt={"1rem"}>By owning an Enterprise NFT from BlockSocDAO, you&apos;ll get exclusive access to the blockchain startups and projects created by our talented community of web3 professionals and students. 
      
        <br /><br />
      This means that you&apos;ll be among the first to see the innovative ideas and technologies that are being developed by our members, giving you a unique opportunity to get in on the ground floor of potentially game-changing projects.</Text>
    </Box>


  );
}

export default CompanyStartUpsInfo;