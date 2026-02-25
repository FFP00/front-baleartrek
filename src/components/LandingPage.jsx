import { Link } from "react-router-dom"

export default function LandingPage(){
    return(
        <>
        <section className="hero">
            <div className="container">
                <div className="hero-inner">

                    <div className="hero-tag anim-fade-up anim-delay-1">
                        Desde 2025
                    </div>

                    <h1 className="hero-title anim-fade-up anim-delay-2">
                        Descubre los <em>rincones</em><br/>mas ocultos de las <em>Baleares</em>
                    </h1>

                </div>
            </div>
        </section>

            <section style={{padding:"5rem 0"}}>
                <div className="container">
                    <div className="section-header">
                    <div className="section-label">Mejor puntuadas</div>
                    <h2 className="section-title" style={{marginTop:".5rem"}}>Excursiones <em style={{fontStyle:"italic", color:"var(--gold)"}}>destacadas</em></h2>
                    </div>
                    <div className="grid-cards" id="featuredGrid">

                    <a href="excursion-detail.html?id=8" className="exc-card">
                        <div className="exc-card-image" style={{background:"linear-gradient(135deg,#1e4030,#1e4030cc)"}}>
                        <span className="card-icon">🏔️</span>
                        <span className="island-label">Mallorca</span>
                        <span className="badge badge-closed">Cerrada</span>
                        </div>
                        <div className="exc-card-body">
                        <div className="exc-card-zone">Tramuntana · Sa Calobra</div>
                        <h3 className="exc-card-title">Torrent de Pareis</h3>
                        <div className="exc-card-footer">
                            <div className="exc-card-rating"><span className="stars">★</span><span className="stars">★</span><span className="stars">★</span><span className="stars">★</span><span className="stars">★</span> <span className="rating-score">4.9</span></div>
                            <span className="exc-card-comments">💬 45</span>
                        </div>
                        </div>
                    </a>

                    </div>
                    <div style={{textAlign: "center", marginTop:"3rem"}}>
                    <Link 
                        to="/excursiones" 
                        className="btn btn-primary btn-sm"
                    >
                        Ver todo el catálogo <span>→</span>
                    </Link>
                    </div>
                </div>
            </section>
        </>
    )
}