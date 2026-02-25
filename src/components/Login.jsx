import { Link } from "react-router-dom"

export default function Login(){
    return(
        <div className="auth-wrapper">
        <div className="form-card">
            <div style={{textAlign:"center",marginBottom:"2rem"}}>
                <Link 
                    to="/" 
                    className="auth-brand nav-brand"
                >
                    <span>BalearTrek</span>
                </Link>
            <h2 className="auth-subtitle">Iniciar sesión</h2>
            </div>

            <div className="form-group">
            <label className="form-label">Correo electrónico / DNI </label>
            <input className="form-input" id="email" type="email" placeholder="example@mail.com / 12345678A" />
            </div>
            <div className="form-group">
            <label className="form-label">Contraseña</label>
            <input className="form-input" id="password" type="password" placeholder="••••••••••••••••" />
            </div>
            <button className="btn btn-dark btn-full">
            Entrar
            </button>
            <p className="auth-footer">
                <Link 
                    to="/register" 
                >
                     ¿No tienes cuenta?
                </Link>                
            </p>
        </div>
        </div>        
    )
}