import { Box} from "@chakra-ui/react";
import Image from "next/image";
import job_icon from "../../../public/jobIcon.png"



export const StudentJobPortalsIcon = () => {
    return ( 
      <Box>
      <Image src={job_icon} objectFit={"contain"} />
    </Box>
     );
}
 
export default StudentJobPortalsIcon;