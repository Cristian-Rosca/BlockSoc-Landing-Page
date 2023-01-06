import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import discord_logo from "../../public/discord.svg"


export const CompanyTalentInfo = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} flex={3}>
      <Heading as='h3' size='xl'>Web3 Native Talent</Heading >
      <Text textStyle='primary' fontSize={"19"} mt={"1rem"}>Our platform offers an extensive network of skilled individuals who are ready to take on new challenges in the web3 industry. No matter what skill you&apos;re looking for - whether it&apos;s programming, UI/UX design, or marketing - you can find it on our platform.
        <br /><br />
        All of our members have verifiable on-chain CVs, ensuring trustworthiness and allowing you to easily verify their skills and accomplishments.</Text>
    </Box>
  );
}

export default CompanyTalentInfo;