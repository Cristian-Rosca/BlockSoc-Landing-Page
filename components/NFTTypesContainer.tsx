import { Box, Container, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import studentNft_icon from "../public/studentNft.png"
import enterpriseNft_icon from "../public/enterpriseNft.png"


const NFTTypesContainer = () => {
 
  const [isGreaterThan650px] = useMediaQuery([
    '(min-width: 650px)',
  ]);
 
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} mt={"10rem"} px={"7%"}>
      <Box display={"flex"} flexDirection={"column"} width={"90%"}>
        <Heading as='h2' size={{ base: "2xl", sm: "2xl", md: "3xl", lg: "3xl" }} textAlign={"center"} >Types of NFTs</Heading>
        <Text textStyle='primary' textAlign={"center"} mt={"1rem"} fontSize={"1.3rem"} >Access to the platform can be gained by owning one of two NFT types: Student NFTs and Enterprise NFTs. 
        </Text>
      </Box>
      <Box  display={"flex"} flexDirection={isGreaterThan650px ? "row" : "column"} justifyContent={isGreaterThan650px ? "space-evenly" : ""} gap={"4rem"} width={isGreaterThan650px ? "70%" : ""} textAlign={"center"}>
        <Box mt={isGreaterThan650px ? "5rem" : "3rem"} display={"flex"} flexDirection={"column"} alignItems={"center"} bg={"rgba(52, 52, 52, 0.2)"} width={isGreaterThan650px ? "40%" : ""} px={isGreaterThan650px ? "2.5%" : "10%"}  rounded={10}>
          <Box px={"10%"} mt={"3rem"}>
            <Image src={studentNft_icon} objectFit={"contain"} />
          </Box>
          <Heading my={"2rem"} as='h4' fontSize={"1.1rem"}>Student NFT</Heading>
        </Box>
        <Box mt={isGreaterThan650px ? "5rem": ""} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} bg={"rgba(52, 52, 52, 0.2)"} width={isGreaterThan650px ? "40%" : "%"} px={isGreaterThan650px ? "2.5%" : "10%"} rounded={10}>
          <Box px={"10%"} mt={"3rem"}>
            <Image src={enterpriseNft_icon} objectFit={"contain"} />
          </Box>
          <Heading my={"2rem"} as='h4' fontSize={"1.1rem"} >Enterprise NFT</Heading>
        </Box>
      </Box>
    </Box>


  );
}

export default NFTTypesContainer;