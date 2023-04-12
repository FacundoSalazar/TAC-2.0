import { Route, Routes } from "react-router-dom"
import { NewRegister } from "./NewRegister"
import { InicioHome } from "./InicioHome"
import { RegisterPage } from "./RegisterPage"
import { ImportantPage } from "./ImportantPage"

export const Inicio = () => {
    return(
        <>
        <Routes>
            <Route index element={<InicioHome />} />
            <Route path="/agregar" element={<NewRegister />}/>
            <Route path="/agregar/tema-importante" element={<NewRegister />}/>
            <Route path="/temas-importantes/*" element={<ImportantPage />}/>
            <Route path="/registros-generales/:numero" element={<RegisterPage />}/>
            <Route path="/*" element={<>Pagina no encontrada.</>}/>

        </Routes>            
        </>
        
    )
}