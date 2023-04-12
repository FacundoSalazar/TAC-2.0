import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { HomeRouter } from "./HomeRouter"

export const MainRouter = () => {
    return(
        <>
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="/*"    element={<HomeRouter />} />
            </Routes>
        </>
    )
}