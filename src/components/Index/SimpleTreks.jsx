import { Link } from "react-router-dom"

export default function SimpleTreks(){
    return(
        <section className="py-5 bg-cream">
        <div className="container">
            <div className="mb-5">
            <h2 className="font-serif display-5">Treks <em className="fst-italic text-gold">destacados</em></h2>
            </div>

            <div className="row g-4">
                <div className="col-sm-6 col-lg-4">
                    <a href="trek-detail.html" className="text-decoration-none">
                    <div className="card border-0 shadow-sm h-100 bt-card-hover">
                        <div className="bt-trek-img bg-t1"><span className="bt-card-icon">🏔️</span><span className="island-pill">Mallorca</span><span className="badge bg-success status-pill">Activo</span></div>
                        <div className="card-body">
                        <div className="bt-card-meta text-stone mb-1">Tramuntana · Escorca</div>
                        <h5 className="font-serif text-dark mb-2">Puig Major</h5>
                        <div className="d-flex justify-content-between align-items-center">
                            <div><span className="text-warning small">★★★★★</span> <span className="fw-semibold small">4.8</span></div>
                            <span className="text-stone small">📋 TRK-2024-001</span>
                        </div>
                        </div>
                    </div>
                    </a>
                </div>
            </div>
            <div className="text-center mt-5">

                <Link 
                    to="/treks"
                    className="btn btn-warning fw-semibold px-4 text-uppercase"
                >
                    Todos los Treks
                </Link>
            
            </div>
        </div>
        </section>
    )
}