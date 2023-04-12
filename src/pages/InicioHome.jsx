import { OrderRegisters } from "../components/OrderRegisters"
import { ContainerCards } from "../components/ContainerCards"
import { Link } from "react-router-dom"
import { NewRegister } from "./NewRegister"
import { MdNoteAdd } from "react-icons/md"

export const InicioHome = () => {
    return(
        <>
        <h1 className="animate__animated animate__fadeIn">Registros Generales</h1>
            <div className="container__buttons animate__animated animate__fadeIn">
                
                <Link to="/inicio/agregar" element={<NewRegister />}>
                    <div className="container__buttons-addRegister">
                        <h6>AGREGAR REGISTRO</h6>
                        <MdNoteAdd size={20}/>
                    </div>
                    </Link>
                
                    <OrderRegisters />
                
            </div>
            <ContainerCards />
        </>
    )
}