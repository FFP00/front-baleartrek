export default function Contact(){
    return(
        <>
            <div className="detail-hero">
            <div className="container">
                <h1 style={{fontFamily:"var(--font-display)",fontSize:"clamp(2rem,5vw,3rem)",color:"#fff",margin:".5rem 0"}}>Hablemos</h1>
                <p style={{color:"#8aa897",marginTop:".5rem"}}>Estamos aquí para ayudarte con cualquier duda</p>
            </div>
            </div>

            <div className="container page-body" style={{maxWidth:"800px"}}>
            <div className="section-light">
                <h2 style={{fontFamily:"var(--font-display)",fontSize:"1.5rem",color:"var(--green-deep)",marginBottom:"1.5rem"}}>Envíanos un mensaje</h2>
                <div className="form-row">
                <div className="form-group"><label className="form-label">Nombre</label><input className="form-input" id="cFirstName" placeholder="Juan" /></div>
                <div className="form-group"><label className="form-label">Apellido</label><input className="form-input" id="cLastName" placeholder="García" /></div>
                </div>
                <div className="form-group">
                <label className="form-label">Asunto</label>
                <select className="form-input" id="cSubject">
                    <option>Duda sobre inscripción</option>
                    <option>Problema técnico</option>
                    <option>Sugerencia</option>
                    <option>Información general</option>
                </select>
                </div>
                <div className="form-group">
                <label className="form-label">Mensaje</label>
                <textarea className="form-input" id="cMessage" rows="5" placeholder="Tu mensaje..."></textarea>
                </div>
                <button className="btn btn-dark btn-full">
                    Enviar mensaje
                </button>
            </div>

            <div className="contact-grid">
                <div className="contact-block">
                <div className="contact-block-title">Dirección</div>
                <div className="contact-block-text">Calle BalearTrek, 99<br />07000 Palma de Mallorca</div>
                </div>
                <div className="contact-block">
                <div className="contact-block-title">Teléfono</div>
                <div className="contact-block-text">+34 971 123 456</div>
                </div>
                <div className="contact-block">
                <div className="contact-block-title">Email</div>
                <div className="contact-block-text">info@baleartrek.com</div>
                </div>
            </div>
            </div>     
        </>
    )
}