import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import discord_logo from "../../public/discord.svg"


export const StudentResumeInfo = () => {
  return (

    <Box display={"flex"} flexDirection={"column"}>
      <Heading as='h3' size='xl' >Your On-Chain Resume</Heading >
      <Text textStyle='primary' fontSize={"19"} mt={"1rem"}>By completing bounties and courses on our platform, students can build up a verifiable on-chain CV that provides proof of their skills and accomplishments. This on-chain CV is a powerful tool that allows students to showcase their knowledge and abilities to potential employers in a way that is verifiable and trustworthy.

        <br /><br />

        We make it easy for students to build, maintain and showcase their on-chain CV, so they can focus on what matters most - building the skills and knowledge they need to succeed.</Text>
    </Box>

  );
}

export default StudentResumeInfo;