import { Container, Stack, ButtonGroup, IconButton, Text, Flex } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'



const Footer = () => {
    return (

        <Flex justifyContent={"space-between"} alignItems={"center"} gap={{base: "1rem"}} flexDirection={{ base: 'column-reverse', md: 'row' }} py={{ base: '1rem', md: '2rem' }} px={"5%"}>
            <Flex >
                <Text fontSize="1rem" color="subtle">
                    &copy; {new Date().getFullYear()} BlockSoc DAO, Inc. All rights reserved.
                </Text>
            </Flex>
            <Flex>

                <ButtonGroup variant="ghost">
                    <IconButton
                        as="a"
                        href="#"
                        aria-label="LinkedIn"
                        icon={<FaLinkedin fontSize="1.5rem" />}
                    />
                    <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.5rem" />} />
                    <IconButton
                        as="a"
                        href="#"
                        aria-label="Twitter"
                        icon={<FaTwitter fontSize="1.5rem" />}
                    />
                </ButtonGroup>
            </Flex>
        </Flex>


    );
}

export default Footer;