import { Box, Divider, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import education_icon from "../public/educationIcon.png"


export const StudentFeatures = () => {

  const [isLessThan650px, isGreaterThan650px, isLessThan1080px, isGreaterThan1080px] = useMediaQuery([
    '(max-width: 650px)',
    '(min-width: 650px)',
    '(max-width: 1080px)',
    '(min-width: 1080px)'
  ]);

  return (

    <>
      {isGreaterThan1080px ? <Box display={"flex"} justifyContent={"center"} mt={"5rem"}>
        {/* Left Side Section */}
        <Box display={"flex"} flexDirection={"column"} justifyContent={"space-evenly"} width={"30%"} gap={"4rem"}>
          <Box display={"flex"}>
            <Box bg={"rgba(52, 52, 52, 0.2)"} display={"flex"} flexDirection={"column"} p={"10%"} rounded={10} width={"55%"}>
              <Box>
                <Image src={education_icon} objectFit={"contain"} />
              </Box>
              <Text pt={"2rem"} textStyle='secondary' fontSize={"1.3rem"} textAlign={"center"}>Bounties</Text>
            </Box>
            <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} width={"45%"}>
              <Divider variant={"customLink"} orientation='horizontal' />
            </Box>
          </Box>

          <Box display={"flex"}>
            <Box bg={"rgba(52, 52, 52, 0.2)"} display={"flex"} flexDirection={"column"} p={"10%"} rounded={10} width={"55%"}>
              <Box>
                <Image src={education_icon} objectFit={"contain"} />
              </Box>
              <Text textStyle='secondary' fontSize={"1.3rem"} pt={"2rem"} textAlign={"center"}>Education</Text>
            </Box>
            <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} width={"45%"}>
              <Divider variant={"customLink"} orientation='horizontal' />
            </Box>
          </Box>
        </Box>

        {/* Middle Section */}
        <Box display={"flex"} flexDirection={"column"} bg={"rgba(52, 52, 52, 0.2)"} width={"30%"} alignItems={"center"} justifyContent={"center"} px={"5%"} rounded={10} >
          <Box >
            <Image src={education_icon} objectFit={"contain"} />
          </Box>
          <Text textAlign={"center"} textStyle='secondary' fontSize={"1.3rem"} mt={"5rem"} >Build Your Verifiable On-Chain Resume</Text>


        </Box>
        {/* Right Side Section */}
        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} width={"30%"}>
          <Box display={"flex"}>
            <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} width={"45%"} >
              <Divider variant={"customLink"} orientation='horizontal' />
            </Box>
            <Box bg={"rgba(52, 52, 52, 0.2)"} display={"flex"} flexDirection={"column"} p={"10%"} rounded={10} width={"55%"}>
              <Box>
                <Image src={education_icon} objectFit={"contain"} />
              </Box>
              <Text pt={"2rem"} textStyle='secondary' fontSize={"1.3rem"} textAlign={"center"}>Web3 Jobs</Text>
            </Box>
          </Box>
        </Box>
      </Box>
        : ""}
      {
        isGreaterThan650px && isLessThan1080px ?
          <Flex flexDirection={"column"} px={"10%"} mt={"3rem"}>
            <Box display={"flex"} flexDirection={"column"} bg={"rgba(52, 52, 52, 0.2)"} alignItems={"center"} justifyContent={"center"} pt={"3rem"} px={"10%"} rounded={10} >
              <Box width={"50%"}>
                <Image src={education_icon} objectFit={"contain"} />
              </Box>
              <Text textAlign={"center"} textStyle='secondary' fontSize={"1.3rem"} py={"3rem"} >Build Your Verifiable On-Chain Resume</Text>
            </Box>

            <Flex justifyContent={"space-between"}>
              <Flex flexDirection={"column"} width={"30%"} alignItems={"center"} >
                <Box display={"flex"} height={"10vh"}>
                  <Divider variant={"customLink"} orientation='vertical' />
                </Box>
                <Box bg={"rgba(52, 52, 52, 0.2)"} display={"flex"} flexDirection={"column"} p={"10%"} rounded={10} >
                  <Box>
                    <Image src={education_icon} objectFit={"contain"} />
                  </Box>
                  <Text pt={"2rem"} textStyle='secondary' fontSize={"1.3rem"} textAlign={"center"}>Bounties</Text>
                </Box>

              </Flex>

              <Flex flexDirection={"column"} width={"30%"} alignItems={"center"}>
                <Box display={"flex"} height={"10vh"}>
                  <Divider variant={"customLink"} orientation='vertical' />
                </Box>
                <Box bg={"rgba(52, 52, 52, 0.2)"} display={"flex"} flexDirection={"column"} p={"10%"} rounded={10} >
                  <Box>
                    <Image src={education_icon} objectFit={"contain"} />
                  </Box>
                  <Text pt={"2rem"} textStyle='secondary' fontSize={"1.3rem"} textAlign={"center"}>Education</Text>
                </Box>

              </Flex>
              <Flex flexDirection={"column"} width={"30%"} alignItems={"center"}>
                <Box display={"flex"} height={"10vh"}>
                  <Divider variant={"customLink"} orientation='vertical' />
                </Box>
                <Box bg={"rgba(52, 52, 52, 0.2)"} display={"flex"} flexDirection={"column"} p={"10%"} rounded={10} >
                  <Box>
                    <Image src={education_icon} objectFit={"contain"} />
                  </Box>
                  <Text pt={"2rem"} textStyle='secondary' fontSize={"1.3rem"} textAlign={"center"}>Web3 Jobs</Text>
                </Box>

              </Flex>
            </Flex>

          </Flex>

          : ""}

    </>


  );
}

export default StudentFeatures;