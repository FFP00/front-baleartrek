import { Link } from "react-router-dom"

export default function LandingPage(){
    return(
        <>
            <div className="auth-wrapper">
                <div className="form-card" style={{maxWidth:"520px"}}>
                    <div style={{textAlign:"center", marginBottom:"2rem"}}>
                    <a href="index.html" className="auth-brand nav-brand"><span>BalearTrek</span></a>
                    <h2 className="auth-subtitle">Crear cuenta</h2>
                    </div>

                    <div className="form-row">
                    <div className="form-group"><label className="form-label">Nombre</label><input className="form-input" id="firstName" placeholder="Juan" /></div>
                    <div className="form-group"><label className="form-label">Apellidos</label><input className="form-input" id="lastName" placeholder="García Pérez" /></div>
                    </div>
                    <div className="form-group">
                    <label className="form-label">DNI / NIE</label>
                    <input className="form-input" id="idNumber" placeholder="12345678A" />
                    </div>
                    <div className="form-group">
                    <label className="form-label">Teléfono</label>
                    <input className="form-input" id="phone" type="tel" placeholder="987 654 321" />
                    </div>
                    <div className="form-group">
                    <label className="form-label">Correo electrónico</label>
                    <input className="form-input" id="email" type="email" placeholder="correo@ejemplo.com" />
                    </div>
                    <div className="form-row">
                    <div className="form-group">
                        <label className="form-label">Contraseña</label>
                        <input className="form-input" id="password" type="password" placeholder="Mínimo 8 caracteres" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Confirmar</label>
                        <input className="form-input" id="password2" type="password" placeholder="Repite la contraseña" />
                    </div>
                    </div>

                    <div style={{fontSize:".78rem",color:"var(--stone)",marginBottom:"1.2rem",background:"var(--cream)",padding:".75rem",borderLeft:"2px solid var(--gold)"}}>
                    Al registrarte aceptas nuestras normas de participación y la política de privacidad.
                    </div>

                    <button className="btn btn-dark btn-full">
                    Crear cuenta
                    </button>
                    <p className="auth-footer">
                        <Link 
                            to="/login" 
                        >
                            ¿Ya tienes cuenta?
                        </Link>     
                    </p>
                </div>
            </div>        
        </>
    )
}