import StudentBountiesInfo from "../components/FeatureInfo/Student/StudentBountiesInfo"
import StudentResumeInfo from "../components/FeatureInfo/Student/StudentResumeInfo"
import StudentEducationInfo from "../components/FeatureInfo/Student/StudentEducationInfo"
import StudentJobPortalsInfo from '../components/FeatureInfo/Student/StudentJobPortalsInfo'
import CompanyBountiesInfo from "../components/FeatureInfo/Company/CompanyBountiesInfo"
import CompanyExposureInfo from "../components/FeatureInfo/Company/CompanyExposureInfo"
import CompanyTalentInfo  from '../components/FeatureInfo/Company/CompanyTalentInfo'
import CompanyStartUpsInfo from "../components/FeatureInfo/Company/CompanyStartUpsInfo"

import StudentBountiesIcon from "../components/FeaturesIcon/Student/StudentBountiesIcon"
import StudentResumeIcon from "../components/FeaturesIcon/Student/StudentResumeIcon"
import StudentEducationIcon from "../components/FeaturesIcon/Student/StudentEducationIcon"
import StudentJobPortalsIcon from "../components/FeaturesIcon/Student/StudentJobPortalsIcon"
import CompanyBountiesIcon from "../components/FeaturesIcon/Company/CompanyBountiesIcon"
import CompanyResumeIcon, { CompanyTalentIcon } from "../components/FeaturesIcon/Company/CompanyTalentIcon"
import CompanyEducationIcon, { CompanyExposureIcon } from "../components/FeaturesIcon/Company/CompanyExposureIcon"
import CompanyJobPortalsIcon, { CompanyStartUpsIcon } from "../components/FeaturesIcon/Company/CompanyStartUpsIcon"

export const getFeatureInfoSection = (sectionName: string) => {
    switch (sectionName) {
      case "Student_Education":
        return <StudentEducationInfo />
      case "Student_Bounties":
        return <StudentBountiesInfo />
        case "Student_Resume":
          return <StudentResumeInfo />
      case "Student_Job_Portals":
        return <StudentJobPortalsInfo />

      case "Company_Bounties":
        return <CompanyBountiesInfo />
      case "Company_Exposure":
        return <CompanyExposureInfo />
      case "Company_Talent":
        return <CompanyTalentInfo />
      case "Company_Start-ups":
        return <CompanyStartUpsInfo />
      default:
        return <StudentEducationInfo />
    }
  }

 export const getFeatureIconSection = (sectionName: string) => {
    switch (sectionName) {
      case "Student_Education":
        return <StudentEducationIcon />
      case "Student_Bounties":
        return <StudentBountiesIcon />
        case "Student_Resume":
          return <StudentResumeIcon />
      case "Student_Job_Portals":
        return <StudentJobPortalsIcon />
      case "Company_Exposure":
        return <CompanyExposureIcon />
      case "Company_Bounties":
        return <CompanyBountiesIcon />
      case "Company_Talent":
        return <CompanyTalentIcon />
      case "Company_Start-ups":
        return <CompanyStartUpsIcon />
      default:
        return <StudentEducationIcon />
    }
  }