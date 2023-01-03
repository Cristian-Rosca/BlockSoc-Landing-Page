import { Box} from "@chakra-ui/react";
import Image from "next/image";
import bounties_icon from "../../../public/bountiesIcon.png"



export const StudentBountiesIcon = () => {
    return ( 
      <Box>
      <Image src={bounties_icon} objectFit={"contain"} />
    </Box>
     );
}
 
export default StudentBountiesIcon;