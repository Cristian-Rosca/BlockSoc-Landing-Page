import React, { createContext } from "react"

type ActiveDisplayContext = {
    howItWorksDisplay: string,
    setHowItWorksDisplay: React.Dispatch<React.SetStateAction<string>>
}

const iActiveDisplayState = {
    howItWorksDisplay: "Student",
    setHowItWorksDisplay: () => { }
}

export const ActiveDisplayContext = createContext<ActiveDisplayContext>(iActiveDisplayState)
