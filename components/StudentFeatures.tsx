import { Box, Divider, Text } from "@chakra-ui/react";
import Image from "next/image";
import discord_logo from "../public/discord.svg"
import { TiArrowDownThick } from "react-icons/ti";


export const StudentFeatures = () => {
  return (

    <Box display={"flex"} justifyContent={"space-apart"} mt={"5rem"}>
      {/* Left Side Section */}
      <Box display={"flex"} flexDirection={"column"} justifyContent={"space-evenly"} >
        <Box display={"flex"}>
          <Box bg={"rgba(52, 52, 52, 0.2)"} display={"flex"} flexDirection={"column"} p={"2rem"} width={"11rem"} rounded={10}>
            <Image src={discord_logo} width={"100px"} height={"100px"} />
            <Text pt={"2rem"} textStyle='secondary' fontSize={"20"} textAlign={"center"}>Bounties</Text>
          </Box>
          <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
            <Divider variant={"customLink"} orientation='horizontal' width={"11rem"} />
          </Box>
        </Box>

        <Box display={"flex"}>
          <Box bg={"rgba(52, 52, 52, 0.2)"} display={"flex"} flexDirection={"column"} p={"2rem"} width={"11rem"} rounded={10}>
            <Image src={discord_logo} width={"100px"} height={"100px"} />
            <Text textStyle='secondary' fontSize={"20"} pt={"2rem"} textAlign={"center"}>Education</Text>
          </Box>
          <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
            <Divider variant={"customLink"} orientation='horizontal' width={"11rem"} />
          </Box>
        </Box>
      </Box>
      {/* Middle Section */}
      <Box display={"flex"} flexDirection={"column"} bg={"rgba(52, 52, 52, 0.2)"} height={"40rem"} width={"30rem"} alignItems={"center"}  justifyContent={"center"} rounded={10} p={"2rem"}>

        <Image src={discord_logo} width={"200px"} height={"200px"} />


          <Text textAlign={"center"} textStyle='secondary' fontSize={"20"} mt={"5rem"}>Build Your Verifiable On-Chain Resume</Text>


      </Box>
      {/* Right Side Section */}
      <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
        <Box display={"flex"}>
          <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} >
            <Divider variant={"customLink"} orientation='horizontal' width={"11rem"} />
          </Box>
          <Box bg={"rgba(52, 52, 52, 0.2)"} display={"flex"} flexDirection={"column"} p={"2rem"} width={"11rem"} rounded={10}>
            <Image src={discord_logo} width={"100px"} height={"100px"} />
            <Text pt={"2rem"} textStyle='secondary' fontSize={"20"} textAlign={"center"}>Web3 Jobs</Text>
          </Box>
        </Box>
      </Box>

    </Box>
  );
}

export default StudentFeatures;