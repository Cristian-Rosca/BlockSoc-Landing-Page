import { Box} from "@chakra-ui/react";
import Image from "next/image";
import startUps_icon from "../../../public/startUpsIcon.png"


export const CompanyStartUpsIcon = () => {
    return ( 
      <Box>
      <Image src={startUps_icon} objectFit={"contain"} />
    </Box>
     );
}
 
export default CompanyStartUpsIcon;