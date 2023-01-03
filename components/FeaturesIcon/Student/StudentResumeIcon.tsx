import { Box} from "@chakra-ui/react";
import Image from "next/image";
import profile_icon from "../../../public/profileIcon.png"



export const StudentResumeIcon = () => {
    return ( 
      <Box>
      <Image src={profile_icon} objectFit={"contain"} />
    </Box>
     );
}
 
export default StudentResumeIcon;