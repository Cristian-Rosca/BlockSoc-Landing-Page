import { Box} from "@chakra-ui/react";
import Image from "next/image";
import education_icon from "../../../public/educationIcon.png"


export const StudentEducationIcon = () => {
    return ( 
          <Box mx={"10rem"} >
            <Image src={education_icon} width={"300px"} height={"300px"} />
          </Box>
     );
}
 
export default StudentEducationIcon;