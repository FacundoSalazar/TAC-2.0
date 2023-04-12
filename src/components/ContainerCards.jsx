import { Aside } from "./Aside"
import { RegistersCard } from "./RegistersCard"
import { useFetch } from "../hooks/useFetch";


export const ContainerCards = () => {
    

    const { data, isLoading, hasError } = useFetch('http://www.localhost:8080/api/registers');
    console.log(data)

    if (isLoading) return <>Cargando registros..</>

    // Estaria bueno que solamente se muestren 15 registros para que la peticion al servidor 
    // sea mas eficiente. Podria haber un boton que muestre 15 registros mas y asi sucesivamente.
    // Hay que controlar que muestre los nuevos 15 registros, junto con los que ya estaban.

    return(
        <div className="container__inicio">
            <Aside />
            <section className="container__inicio-cards animate__animated animate__fadeIn">
            {data && data.map( register => 
                <RegistersCard 
                key={register._id} 
                register={register} 
                tipo="generales"/>
            )}
            </section>
        </div>
    )
}