import { Box} from "@chakra-ui/react";
import Image from "next/image";
import discord_logo from "../../public/discord.svg"


export const JobPortalsIcon = () => {
    return ( 
          <Box display={"flex"} flexDirection={"column"} flex={4}>
            <Image src={discord_logo} width={"300px"} height={"300px"} />
          </Box>
     );
}
 
export default JobPortalsIcon;