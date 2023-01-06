import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import discord_logo from "../../public/discord.svg"


export const StudentEducationInfo = () => {
    return ( 
        
         
          <Box display={"flex"} flexDirection={"column"}>
            <Heading as='h3' size='xl' >Education</Heading >
            <Text textStyle='primary' fontSize={"19"} mt={"1rem"} >Our platform offers a range of high-quality education courses in web3 and blockchain, allowing students to gain the skills and knowledge they need to succeed in this rapidly growing industry. 
            <br/><br/>
            With a variety of fields of study to choose from, including programming and UI/UX, students can tailor their learning journey to meet their specific goals and interests. We work with leading web3 education providers meaning that students can be confident that they are receiving best-in-class education and training.</Text>
          </Box>


     );
}
 
export default StudentEducationInfo;