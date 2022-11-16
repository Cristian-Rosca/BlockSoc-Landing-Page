import { Box, Divider, Text } from "@chakra-ui/react";
import Image from "next/image";
import discord_logo from "../public/discord.svg"

const HowItWorksStudents = () => {
    return (
        
        <Box display={"flex"} justifyContent={"space-apart"} mt={"5rem"}>
        {/* Left Side Section */}
        <Box display={"flex"} flexDirection={"column"} justifyContent={"space-evenly"} >
          <Box display={"flex"}>
          <Box bg={"rgba(52, 52, 52, 0.2)"} display={"flex"} flexDirection={"column"} p={"2rem"} width={"11rem"}>
            <Image src={discord_logo} width={"100px"} height={"100px"} />
            <Text pt={"2rem"} textStyle='secondary' fontSize={"20"}>Bounties</Text>
          </Box>
          <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
          <Divider orientation='horizontal' width={"11rem"} />
          </Box>
          </Box>

          <Box display={"flex"}>
          <Box bg={"rgba(52, 52, 52, 0.2)"} display={"flex"} flexDirection={"column"} p={"2rem"} width={"11rem"}>
            <Image src={discord_logo} width={"100px"} height={"100px"} />
            <Text textStyle='secondary' fontSize={"20"} pt={"2rem"} >Education</Text>
          </Box>
          <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
          <Divider orientation='horizontal' width={"11rem"} />
          </Box>
          </Box>
        </Box>
        {/* Middle Section */}
        <Box display={"flex"} flexDirection={"column"} bg={"rgba(52, 52, 52, 0.2)"} height={"40rem"} width={"30rem"} alignItems={"center"} justifyContent={"center"}>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"} >
          <Image src={discord_logo} width={"200px"} height={"200px"} />
          </Box>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mt={"6rem"} width={"80%"}>
          <Text textAlign={"center"} textStyle='secondary' fontSize={"20"}>Verifiable On-Chain Resumes</Text>
          </Box>
        </Box>
        {/* Right Side Section */}
        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
        <Box display={"flex"}>
          <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} >
          <Divider orientation='horizontal' width={"11rem"} />
          </Box>
          <Box bg={"rgba(52, 52, 52, 0.2)"} display={"flex"} flexDirection={"column"} p={"2rem"} width={"11rem"}>
            <Image src={discord_logo} width={"100px"} height={"100px"} />
            <Text pt={"2rem"} textStyle='secondary' fontSize={"20"}>Web3 Jobs</Text>
          </Box>
          </Box>
        </Box>

      </Box>
      );
}
 
export default HowItWorksStudents;