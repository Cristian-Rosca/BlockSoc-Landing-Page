import {Box} from "@chakra-ui/react"

const Footer = () => {
    return ( 
        <Box display={"flex"} justifyContent={"flex-start"} color={"white"} alignItems={"flex-end"} p={"2rem"} bottom={0} bg={"rgba(0, 0, 0, 0.75)"}>
            {new Date().getFullYear()} BlocSoc DAO&trade;. All Rights Reserved.
        </Box> 
     );
}
 
export default Footer;