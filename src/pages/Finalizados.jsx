import { Routes, Route } from "react-router-dom"
import { RegisterPage } from "./RegisterPage"
import { FinalizadosHome } from "./FinalizadosHome"

export const Finalizados = () => {

    return(
        <>
            <Routes>
                <Route index element={<FinalizadosHome/>} />
                <Route path="/:numero" element={<RegisterPage />}/>
            </Routes>
        </>
    )
}