import { BackArrow } from '../components/BackArrow'

export const NewRegister = () => {
    return(
        <>
            <BackArrow />
            <div className="container__newRegister animate__animated animate__fadeIn">
                <form>
                    <label>Titulo</label>
                    <input type="text" placeholder="..."/>

                    <div className="container__newRegister-firstBox">
                        <div className="container__newRegister-firstBox--nota">
                            <label>Numero de nota</label>
                            <input type="number" placeholder="..."/>
                        </div>
                        <div>
                            <label>Fecha</label>
                            <span>
                                <input type="date"/>
                                <h3>HOY</h3>
                            </span>
                        </div>

                        <div>
                            <label >Prioritaro</label>
                            <input type="checkbox" />
                        </div>
                    </div>

                    <label>Area responsable</label>
                    <input type="text" placeholder="..."/>

                    <label>Localidad</label>
                    <input type="text" placeholder="..."/>

                    <label>Solicitante</label>
                    <input type="text" placeholder="..."/>
                    
                    <label>Estado</label>
                    <input type="text" placeholder="..."/>


                </form>

                <div className="container__newRegister-buttons">
                    <button>Limpiar</button>
                    <button>Agregar</button>
                </div>

            </div>
        </>
    )
}