import { NavLink, useNavigate, Link, useLocation } from 'react-router-dom';
import { MdAccountCircle, MdLogout, MdMenu } from "react-icons/md";

export const Navbar = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const onLogout = () => {
        navigate('./login', {
            replace: true
        })
    }


    const activeLink = ({ isActive }) => `${isActive ? 'activeLink' : ''}`;
    const activePerfil = ({isActive}) => `${isActive ? "activePerfil" : ''}`
    const inicioActive = location.pathname === "/" || location.pathname.startsWith("/inicio");


    return(
        <>
            <nav>
                <Link to="/" id='logo'>
                    <img src='\src\assets\Trenes_arg_cargas_logo.png' alt="logo" />
                </Link>
                <div className='nav__container-linksBox'>
                    <NavLink to="/inicio"       className={`${inicioActive ? 'activeLink' : ''}`}>Inicio</NavLink>
                    <NavLink to="/prioritarios" className={activeLink}>Prioritaros</NavLink>
                    <NavLink to="/finalizados"  className={activeLink}>Finalizados</NavLink>
                    <NavLink to="/mapa"         className={activeLink}>Mapa</NavLink>
                    <div className='nav__container-linksBox--search'>
                        {/* <input type="search" name="" id="" /> */}
                    </div>
                </div>
                <div className="nav__container-loginBox">
                    <h5>FVS</h5>
                    <NavLink to="/perfil" className={activePerfil}>
                        <MdAccountCircle size={"30px"}  />
                    </NavLink>
                    <MdLogout onClick={onLogout} size={"30px"}/>
                </div>
                <div className='toggle-btn'>
                    <MdMenu />
                </div>
            </nav>
        </>
    )
}