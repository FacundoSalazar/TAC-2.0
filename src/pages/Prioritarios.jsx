import { Route, Routes } from "react-router-dom"
import { RegisterPage } from "./RegisterPage"
import { PrioritariosHome } from "./PrioritariosHome"

export const Prioritarios = () => {
    return(
        <>
            <Routes>
                <Route index element={<PrioritariosHome />} />
                <Route path="/:numero" element={<RegisterPage />}/>
            </Routes>
        </>
    )
}