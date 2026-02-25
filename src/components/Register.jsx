import { Link } from "react-router-dom"

export default function LandingPage(){
    return(
        <>
            <div class="bt-auth-wrap d-flex align-items-center justify-content-center p-3 py-5">
            <div class="bt-auth-card-wide">
                <div class="text-center mb-4">
                <a href="index.html" class="text-decoration-none d-inline-block mb-3"><span class="font-serif fs-2 text-dark">Balear<span class="text-gold">Trek</span></span></a>
                <h2 class="font-serif text-dark">Crear cuenta</h2>
                </div>
                <div class="bg-white shadow-sm p-4">
                <form action="#" method="post">
                    <div class="row g-3 mb-3">
                    <div class="col-sm-6"><label class="bt-filter-label" for="firstName">Nombre</label><input type="text" class="form-control" id="firstName" placeholder="Juan" /></div>
                    <div class="col-sm-6"><label class="bt-filter-label" for="lastName">Apellidos</label><input type="text" class="form-control" id="lastName" placeholder="García Pérez" /></div>
                    </div>
                    <div class="mb-3"><label class="bt-filter-label" for="idNumber">DNI / NIE</label><input type="text" class="form-control" id="idNumber" placeholder="12345678A" /></div>
                    <div class="mb-3"><label class="bt-filter-label" for="phone">Teléfono</label><input type="tel" class="form-control" id="phone" placeholder="600 123 456" /></div>
                    <div class="mb-3"><label class="bt-filter-label" for="email">Correo electrónico</label><input type="email" class="form-control" id="email" placeholder="correo@ejemplo.com" /></div>
                    <div class="row g-3 mb-3">
                    <div class="col-sm-6"><label class="bt-filter-label" for="password">Contraseña</label><input type="password" class="form-control" id="password" placeholder="Mín. 8 caracteres" /></div>
                    <div class="col-sm-6"><label class="bt-filter-label" for="password2">Confirmar</label><input type="password" class="form-control" id="password2" placeholder="Repite la contraseña" /></div>
                    </div>
                    <div class="bg-cream-dark p-3 mb-4 border-start border-4 border-warning small text-stone">Al registrarte aceptas nuestras normas de participación y la política de privacidad.</div>
                    <button type="submit" class="btn btn-dark fw-semibold w-100">Crear cuenta →</button>
                </form>
                </div>
                <p class="text-center text-stone small mt-3"> ¿Ya tienes cuenta?
                        <Link 
                            to="/login" 
                            className="text-success text-decoration-none fw-semibold"
                        >
                            Iniciar sesión
                        </Link>    
                </p>
            </div>
            </div>
        </>
    )
}