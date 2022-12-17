import { Box} from "@chakra-ui/react";
import Image from "next/image";
import education_icon from "../../../public/educationIcon.png"


export const CompanyResumeIcon = () => {
    return ( 
      <Box>
      <Image src={education_icon} objectFit={"contain"} />
    </Box>
     );
}
 
export default CompanyResumeIcon;