import { Box} from "@chakra-ui/react";
import Image from "next/image";
import talent_icon from "../../../public/talentIcon.png"


export const CompanyTalentIcon = () => {
    return ( 
      <Box>
      <Image src={talent_icon} objectFit={"contain"} />
    </Box>
     );
}
 
export default CompanyTalentIcon;