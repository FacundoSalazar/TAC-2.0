import { Link } from "react-router-dom"

export const RegistersCard = ({register, tipo}) => {
    
    return(
        <Link to={`/inicio/registros-${tipo}/${register?.nota}`} className="card-link">
            <div className="registers__card">
                <div className="registers__card-box">
                    <h3 className="registers__card-nota">{register?.nota}</h3>
                    <h5>Prioritarios</h5>
                    <h6>{register?.localidad}</h6>
                    <p>{register?.fecha}</p>
                </div>
                <div className="registers__card-description">
                    <h4>{register?.areaResponsable}</h4>
                    <p>{register?.estadoForm}</p>
                    
                </div>
            </div>
        </Link>
        
    )
}