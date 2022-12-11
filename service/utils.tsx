import BountiesInfo from "../components/FeatureInfo/BountiesInfo"
import CommunityInfo from "../components/FeatureInfo/CommunityInfo"
import EducationInfo from "../components/FeatureInfo/EducationInfo"
import BountiesIcon from "../components/FeaturesIcon/BountiesIcon"
import CommunityIcon from "../components/FeaturesIcon/CommunityIcon"
import EducationIcon from "../components/FeaturesIcon/EducationIcon"
import JobPortalsInfo from '../components/FeatureInfo/JobPortalsInfo'
import JobPortalsIcon from "../components/FeaturesIcon/JobPortalsIcon"

export const getFeatureInfoSection = (sectionName: string) => {
    switch (sectionName) {
      case "Education":
        return <EducationInfo />
      case "Bounties":
        return <BountiesInfo />
      case "Job Portals":
        return <JobPortalsInfo />
      case "Community":
        return <CommunityInfo />
      default:
        return <BountiesInfo />
    }
  }

 export const getFeatureIconSection = (sectionName: string) => {
    switch (sectionName) {
      case "Education":
        return <EducationIcon />
      case "Bounties":
        return <BountiesIcon />
      case "Job Portals":
        return <JobPortalsIcon />
      case "Community":
        return <CommunityIcon />
      default:
        return <BountiesIcon />
    }
  }