import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import discord_logo from "../../public/discord.svg"


export const StudentBountiesInfo = () => {
  return (

    <Box display={"flex"} flexDirection={"column"}>
      <Heading as='h3' size='xl' >Bounties</Heading >
      <Text textStyle='primary' fontSize={"19"} mt={"1rem"}>BlockSocDAO is committed to helping students gain practical industry experience in Web3. Students can complete industry-relevant bounties and projects set out by our team and partners.

        <br /><br />

        By completing these bounties, students not only add valuable experience to their resumes, but they also have the opportunity to get paid in crypto for their work. This helps students build their skills and knowledge while also allowing them to get a taste of what it&apos;s like to work in Web3.</Text>
    </Box>

  );
}

export default StudentBountiesInfo;