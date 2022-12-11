import React, { createContext } from "react"

type StudentInfoContext = {
    studentFeatureInfoDisplay: string,
    setStudentFeatureInfoDisplay: React.Dispatch<React.SetStateAction<string>>
}

const iStudentInfoState = {
    studentFeatureInfoDisplay: "Student_Education",
    setStudentFeatureInfoDisplay: () => { }
}

export const StudentInfoContext = createContext<StudentInfoContext>(iStudentInfoState)