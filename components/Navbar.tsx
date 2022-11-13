import Link from "next/link";
import Image from "next/image";
import { Box, Button } from "@chakra-ui/react"
import bs_logo from "../public/bs-logo.png"



const Navbar = () => {
    return (
        <nav >
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} pt={"1rem"} pb={"1rem"} bg={"black"} opacity={0.75}>
                <Box display={"flex"} ml={"2rem"} >
                    <Link href="/">
                        <a>
                            <Image src={bs_logo} height={"75px"} width={"75px"} />
                        </a>
                    </Link>
                </Box>
                <Box display={"flex"} mr={"2rem"} >
                    <Button textStyle='primary' width={"auto"} p={"2rem"} bgColor={"purple.600"}>Launch dApp</Button>
                </Box>

            </Box>
        </nav>

    );
}

export default Navbar;