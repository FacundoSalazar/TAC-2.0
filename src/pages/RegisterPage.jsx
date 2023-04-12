import { useParams } from "react-router-dom";
import { BackArrow } from "../components/BackArrow";

export const RegisterPage = () => {

    
    const { numero } = useParams()
    console.log(numero)

    // Hacer una peticion al backend que encuentre el numero de nota ({numero})
    // y mostrar por pantalla los detalles.

    return(
    <>
        <BackArrow />
        <div>Registro con numero de nota {numero}</div>
    </>
    )
}