import Link from "next/link";
import Image from "next/image";
import { Button, Flex } from "@chakra-ui/react"
import bs_logo from "../public/bs-logo.png"



const Navbar = () => {
    return (
        <nav >
            <Flex justifyContent={"space-between"} alignItems={"center"}  bg={"rgba(0, 0, 0, 0.7)"}>
                <Flex maxW={{base: "15%", sm: "20", md: "10%", lg: "5%"}} m={"1rem"} ml={"2rem"}>
                    <Link href="/">
                        <a>
                            <Image src={bs_logo} objectFit={"contain"} />
                        </a>
                    </Link>
                </Flex>
                <Flex>
                    <Button textStyle='primary' bgColor={"purple.600"} mr={"2rem"} rounded={12} p={{base: "1.3rem", md:"1.5rem" }}>Register Interest</Button>
                </Flex>

            </Flex>
        </nav>

    );
}

export default Navbar;