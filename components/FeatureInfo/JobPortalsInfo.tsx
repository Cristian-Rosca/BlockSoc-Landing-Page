import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import discord_logo from "../../public/discord.svg"


export const JobPortals = () => {
    return ( 
          <Box display={"flex"} flexDirection={"column"} flex={3}>
            <Heading as='h2' size='3xl' textAlign={"center"}>Web 3.0 Job Portals</Heading >
            <Text textStyle='primary' fontSize={"19"} mt={10}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              {<br />} {<br />}
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          </Box>
     );
}
 
export default JobPortals;