import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <nav className="navbar">
            <div className="container">

                <NavLink to="/" className="nav-brand">
                <span>BalearTrek</span>
                </NavLink>

                <div className="nav-links">

                <NavLink 
                    to="/meetings" 
                    className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                >
                    Encuentros
                </NavLink>

                <NavLink 
                    to="/excursiones" 
                    className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                >
                    Excursiones
                </NavLink>

                <NavLink 
                    to="/contact" 
                    className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                >
                    Contacto
                </NavLink>

                <NavLink 
                    to="/information" 
                    className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                >
                    FAQ
                </NavLink>               
                </div>

                <div className="nav-auth">
                <NavLink 
                    to="/login" 
                    className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                >
                    Iniciar sesión
                </NavLink>
                </div>

            </div>
        </nav>
    )
}