

export default function Excursiones(){
    return(
        <>
            <div className="excursions-layout">

            <aside className="filter-sidebar">
                <div className="filter-sidebar-header">
                <span className="filter-sidebar-title">Filtraje</span>
                <button className="filter-clear-btn" id="clearBtn" style={{display: "none"}}>✕ Limpiar</button>
                </div>

                <div className="filter-section">
                <label className="filter-section-label">🔍 Buscar</label>
                <div className="search-wrapper">
                    <span className="search-icon"></span>
                    <input type="text" id="fName" placeholder="Nombre..." />
                </div>
                </div>

                <div className="filter-section">
                <label className="filter-section-label">Ordenar por</label>
                <select id="fSort" >
                    <option value="name">Nombre</option>
                    <option value="rating">Mejor nota</option>
                    <option value="commentCount">Más comentarios</option>
                </select>
                </div>

                <div className="filter-section">
                <label className="filter-section-label">Zona</label>
                <select id="fZone">
                    <option value="">Todas</option>
                    <option value="mallorca">Mallorca</option>
                    <option value="menorca">Menorca</option>
                    <option value="ibiza">Ibiza</option>
                    <option value="formentera">Formentera</option>
                    <option value="cabrera">Cabrera</option>
                </select>
                </div>

                <div className="filter-section">
                <label className="filter-section-label">Zona</label>
                <select id="fZone">
                    <option value="">Todas</option>
                    <option>Tramuntana</option>
                    <option>Migjorn</option>
                    <option>Llevant</option>
                    <option>Raiguer</option>
                    <option>Pla</option>
                </select>
                </div>



            </aside>








            <div className="results-col">
                <div className="results-header">
                <h1 className="section-title" style={{fontSize:"2rem"}}>Catálogo de excursiones</h1>
                </div>

                <div id="gridView" className="grid-cards" style={{display: "grid"}}>


                <a href="excursion-detail.html?id=2" className="exc-card">
                    <div className="exc-card-image" style={{background:"linear-gradient(135deg,#1e4030,#1e4030cc)"}}>
                    <span className="card-icon">🏔️</span>
                    <span className="island-label">Menorca</span>
                    <span className="badge badge-open">Abierta</span>
                    </div>
                    <div className="exc-card-body">
                    <div className="exc-card-zone">Tramuntana · Es Mercadal</div>
                    <h3 className="exc-card-title">Camí de Cavalls (norte)</h3>
                    <div className="exc-card-footer">
                        <div className="exc-card-rating"><span className="stars">★</span><span className="stars">★</span><span className="stars">★</span><span className="stars">★</span><span className="stars">★</span> <span className="rating-score">4.6</span></div>
                        <span className="exc-card-comments">💬 18</span>
                    </div>
                    </div>
                </a>


                </div>
                <div id="tableView" style={{display:"none",overflowX:"auto"}}>
                <table className="data-table">
                    <thead><tr>
                    <th>Nombre ↕</th>
                    <th>Municipio ↕</th>
                    <th>Isla ↕</th>
                    <th>Zona ↕</th>
                    <th>Disponibilidad ↕</th>
                    <th>Nota ↕</th>
                    <th>Comentarios ↕</th>
                    <th>Acción</th>
                    </tr></thead>
                    <tbody id="tableBody"></tbody>
                </table>
                </div>
                <div className="pagination" id="pagination"><div className="page-btn active">1</div><div className="page-btn ">2</div></div>
            </div>

            </div>
        </>
    )
}