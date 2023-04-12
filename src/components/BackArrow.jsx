import { Link } from "react-router-dom"
import { MdArrowBack } from "react-icons/md"

export const BackArrow = () => {
    return(
        <>
            <Link to="/" className='backToHome animate__animated animate__fadeIn'>
                <MdArrowBack size={40}/>
            </Link>
        </>
    )
}