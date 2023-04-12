import { IoFilterOutline } from 'react-icons/io5'

export const OrderRegisters = () => {
    // Hacer un useState que permita girar el icono de ordenamiento.
    return(
        <div className="container__buttons-orderRegisters">
            <h6>ORDENAR REGISTROS</h6>
            <IoFilterOutline size={24} className='btnOrder'/>
        </div>
    )
}