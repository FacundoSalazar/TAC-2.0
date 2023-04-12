import { RegistersCard } from "../components/RegistersCard"
import { useFetch } from "../hooks/useFetch"

export const PrioritariosHome = () => {

    const seccionLink = window.location.pathname;
    console.log(seccionLink.slice(1));

    const { data, isLoading, hasError } = useFetch(`http://www.localhost:8080/api${seccionLink}`);
    if (isLoading) return <>Cargando registros..</>

    return(
        <div className="container__card-especificos animate__animated animate__fadeIn">
            <h1>Registros Prioritarios</h1>
            <p>Lista de todos los registros prioritaros.</p>
            <div className="container__card">
                {data && data.map( register => 
                    <RegistersCard 
                    key={register._id} 
                    register={register} 
                    tipo="generales"/>
                )}
            </div>  
        </div>
    )
}