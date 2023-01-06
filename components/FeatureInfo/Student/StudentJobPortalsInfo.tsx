import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import discord_logo from "../../public/discord.svg"


export const StudentJobPortals = () => {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Heading as='h3' size='xl'>Web3 Jobs</Heading >
      <Text textStyle='primary' fontSize={"19"} mt={"1rem"}>Our ultimate goal is to provide learners with a clear pathway to gaining valuable skills and acquiring a job in Web3. The platform is designed to help students stand out and get noticed by top web3 employers.
        <br /><br />
        With a strong on-chain CV, students give themselves the best possible chance of landing their dream job. Join our community and begin your journey today.  </Text>
    </Box>
  );
}

export default StudentJobPortals;