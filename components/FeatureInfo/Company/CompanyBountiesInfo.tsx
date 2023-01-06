import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import discord_logo from "../../public/discord.svg"


export const CompanyBountiesInfo = () => {
  return (

    <Box display={"flex"} flexDirection={"column"}>
      <Heading as='h3' size='xl'>Outsource Bounties</Heading >
      <Text textStyle='primary' fontSize={"19"} mt={"1rem"}>Our platform allows you to post tasks to our bounty board, ensuring that they are completed by skilled, web3-native individuals. You can pay for these tasks in crypto, meaning that the process is convenient, fast and secure.

        <br /><br />

        By outsourcing tasks to the Web3 community through BlockSocDAO, you can free up time to focus on the work that is most important to you.</Text>
    </Box>

  );
}

export default CompanyBountiesInfo;