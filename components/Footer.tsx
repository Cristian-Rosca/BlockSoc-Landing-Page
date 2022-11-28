import {Box, Text} from "@chakra-ui/react"

const Footer = () => {
    return ( 
        <Box display={"flex"} justifyContent={"flex-start"} color={"white"} alignItems={"flex-end"} p={"2rem"} bottom={0} bg={"rgba(0, 0, 0, 0.75)"}>
            <Text textStyle={"primary"}>{new Date().getFullYear()} BlocSoc DAO&trade;</Text>
        </Box> 
     );
}
 
export default Footer;