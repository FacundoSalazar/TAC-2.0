import { Route, Routes } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Finalizados } from "../pages/Finalizados"
import { Inicio } from "../pages/Inicio"
import { Mapa } from "../pages/Mapa"
import { Prioritarios } from "../pages/Prioritarios"
import { Perfil } from "../pages/Perfil"


export const HomeRouter = () => {
  return (
    <>
    <header className="animate__animated animate__fadeInDown">
          <Navbar/>
        </header>
        
        <div className="content ">
          <Routes>
              <Route path="/"               element={<Inicio />}/>
              <Route path="/inicio/*"       element={<Inicio />}/>
              <Route path="/prioritarios/*" element={<Prioritarios />}/>
              <Route path="/finalizados/*"  element={<Finalizados />}/>
              <Route path="/mapa"           element={<Mapa />}/>
              <Route path="/perfil/*"       element={<Perfil />}/>
              <Route path="/*"              element={<>Pagina no encontrada.</>} />
          </Routes>
        </div>
    </>
  )
}

