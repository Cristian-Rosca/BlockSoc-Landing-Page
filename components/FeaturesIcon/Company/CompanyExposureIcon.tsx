import { Box} from "@chakra-ui/react";
import Image from "next/image";
import exposure_icon from "../../../public/exposureIcon.png"

export const CompanyExposureIcon = () => {
    return ( 
      <Box>
      <Image src={exposure_icon} objectFit={"contain"} />
    </Box>
     );
}
 
export default CompanyExposureIcon;