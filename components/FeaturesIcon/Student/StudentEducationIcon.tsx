import { Box} from "@chakra-ui/react";
import Image from "next/image";
import education_icon from "../../../public/educationIcon.png"


export const StudentEducationIcon = () => {
    return ( 
          <Box>
            <Image src={education_icon} objectFit={"contain"} />
          </Box>
     );
}
 
export default StudentEducationIcon;