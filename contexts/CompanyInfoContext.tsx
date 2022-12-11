import React, { createContext } from "react"

type CompanyInfoContext = {
    companyFeatureInfoDisplay: string,
    setCompanyFeatureInfoDisplay: React.Dispatch<React.SetStateAction<string>>
}

const iCompanyInfoState = {
    companyFeatureInfoDisplay: "Company_Education",
    setCompanyFeatureInfoDisplay: () => { }
}

export const CompanyInfoContext = createContext<CompanyInfoContext>(iCompanyInfoState)