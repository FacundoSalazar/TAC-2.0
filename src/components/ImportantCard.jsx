import { MdInfo, MdDelete } from "react-icons/md"

export const ImportantCard = () => {

    // La idea es que cuando se haga click en un tema importante, se habra
    // otra pagina en la cual lo detalle.
    // Ademas hacer un useEffect cuando el usuario elimine el registro.
    // useEffect con dependencia de cambio. Esto hara que se renderice de vuelta el componente.

    return(
        <div className="container__inicio-importants--cards">
            <h4>Reunion con Gerencia de Inmuebles</h4>
            <div className="container__inicio-importants--actions">
                <MdInfo color="#0066CC" size={20}/> { /* Hacer un componente aparte */}
                <MdDelete color="#ff4d4d" size={20}/> { /* Hacer un componente aparte */}
            </div>
        </div>
    )
}