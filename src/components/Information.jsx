export default function Information(){
    return(
        <>
            <div className="detail-hero">
            <div className="container">
                <h1 style={{fontFamily:"var(--font-display)",fontSize:"clamp(2rem,5vw,3rem)",color:"#fff",margin:".5rem 0"}}>Información</h1>
                <p style={{color:"#8aa897",maxWidth:"480px",marginTop:".5rem"}}>Reglas, puntuación y preguntas frecuentes</p>
            </div>
            </div>

            <div className="container page-body" style={{maxWidth:"900px"}}>

            <div className="section-light">
                <h2 style={{fontFamily:"var(--font-display)",fontSize:"1.8rem",color:"var(--green-deep)",marginBottom:"1.5rem"}}>Reglas de inscripción</h2>
                <div className="rule-grid">
                <div className="rule-card border-gold">
                    <div className="rule-title">Apertura</div>
                    <p className="rule-text">Las inscripciones se abren <strong>1 mes antes</strong> de la fecha del encuentro.</p>
                </div>
                <div className="rule-card border-danger">
                    <div className="rule-title">Cierre</div>
                    <p className="rule-text">Las inscripciones se cierran <strong>1 semana antes</strong> de la fecha del encuentro.</p>
                </div>
                <div className="rule-card border-green">
                    <div className="rule-title">Cancelación</div>
                    <p className="rule-text">Puedes cancelar tu inscripción hasta <strong>1 semana antes</strong> de la fecha.</p>
                </div>
                <div className="rule-card border-stone">
                    <div className="rule-title">Doble inscripción</div>
                    <p className="rule-text">No se permite la doble inscripción en el mismo encuentro.</p>
                </div>
                </div>
            </div>

            <div className="section-light">
                <h2 style={{fontFamily:"var(--font-display)",fontSize:"1.8rem",color:"var(--green-deep)",marginBottom:"1.5rem"}}> Sistema de puntuación (0–5)</h2>
                <div className="score-row"><span className="score-stars">5 </span><span className="score-desc">Excelente — Experiencia inolvidable, recomendada al 100%</span></div>
                <div className="score-row"><span className="score-stars">4 </span><span className="score-desc">Muy buena — Experiencia satisfactoria con ligeras mejoras posibles</span></div>
                <div className="score-row"><span className="score-stars">3 </span><span className="score-desc">Buena — Recomendable, aunque con aspectos a mejorar</span></div>
                <div className="score-row"><span className="score-stars">2 </span><span className="score-desc">Regular — Experiencia por debajo de las expectativas</span></div>
                <div className="score-row"><span className="score-stars">1 </span><span className="score-desc">Mala — Experiencia decepcionante</span></div>
                <div className="score-row"><span className="score-stars">0 </span><span className="score-desc">Muy mala — No recomendable en ningún caso</span></div>
            </div>

            <div className="section-light">
                <h2 style={{fontFamily:"var(--font-display)",fontSize:"1.8rem",color:"var(--green-deep)",marginBottom:"1.2rem"}}> Normas de publicación de comentarios</h2>
                <ul style={{color:"var(--stone)",fontSize:".9rem",lineHeight:"2",paddingLeft:"1.2rem"}}>
                <li>Los comentarios deben ser respetuosos y constructivos.</li>
                <li>No se aceptan insultos, contenido inapropiado ni comentarios irrelevantes.</li>
                <li>Todos los comentarios pasan por validación antes de publicarse.</li>
                <li>Solo los participantes de un encuentro pueden valorar esa excursión.</li>
                <li>Una única valoración por encuentro y usuario.</li>
                </ul>
            </div>

            <div className="section-light">
                <h2 style={{fontFamily:"var(--font-display)",fontSize:"1.8rem",color:"var(--green-deep)",marginBottom:"1.5rem"}}>Preguntas frecuentes</h2>
                <div id="faqList">
                <div className="faq-item">
                <div className="faq-question" onclick="toggleFaq(0)">
                    <span>¿Cómo puedo inscribirme en un encuentro?</span>
                    <span className="faq-icon" id="faqIcon0">+</span>
                </div>
                <div className="faq-answer" id="faqA0">Primero debes tener una cuenta activa. Una vez autenticado, accede a la ficha del encuentro y haz clic en 'Inscribirme'. La inscripción es inmediata si hay plazas disponibles.</div>
                </div>
            
                <div className="faq-item">
                <div className="faq-question" onclick="toggleFaq(1)">
                    <span>¿Puedo cancelar mi inscripción?</span>
                    <span className="faq-icon" id="faqIcon1">+</span>
                </div>
                <div className="faq-answer" id="faqA1">Sí, puedes cancelar hasta 1 semana antes de la fecha del encuentro. Accede a tu perfil y gestiona tus inscripciones.</div>
                </div>
            
                <div className="faq-item">
                <div className="faq-question" onclick="toggleFaq(2)">
                    <span>¿Qué normas hay para publicar comentarios?</span>
                    <span className="faq-icon" id="faqIcon2">+</span>
                </div>
                <div className="faq-answer" id="faqA2">Los comentarios deben ser respetuosos y constructivos. No se aceptan insultos ni contenido inapropiado. Todos pasan por validación antes de publicarse.</div>
                </div>
            
                <div className="faq-item">
                <div className="faq-question" onclick="toggleFaq(3)">
                    <span>¿Cómo se calcula la puntuación de una excursión?</span>
                    <span className="faq-icon" id="faqIcon3">+</span>
                </div>
                <div className="faq-answer" id="faqA3">Es la media aritmética de todas las valoraciones (0–5) de los comentarios validados. Solo pueden valorar los usuarios que han participado en un encuentro de esa excursión.</div>
                </div>
            
                <div className="faq-item">
                <div className="faq-question" onclick="toggleFaq(4)">
                    <span>¿Puedo inscribirme dos veces en el mismo encuentro?</span>
                    <span className="faq-icon" id="faqIcon4">+</span>
                </div>
                <div className="faq-answer" id="faqA4">No, el sistema controla la doble inscripción. Cada usuario solo puede estar inscrito una vez en cada encuentro.</div>
                </div>
            
                <div className="faq-item">
                <div className="faq-question">
                    <span>¿Cómo puedo recuperar mi contraseña?</span>
                    <span className="faq-icon" id="faqIcon5">+</span>
                </div>
                <div className="faq-answer" id="faqA5">Haz clic en '¿Olvidé mi contraseña?' en la pantalla de inicio de sesión. Recibirás un correo con las instrucciones para restablecerla.</div>
                </div>
            
                <div className="faq-item">
                <div className="faq-question">
                    <span>¿Qué equipamiento necesito para las excursiones?</span>
                    <span className="faq-icon" id="faqIcon6">+</span>
                </div>
                <div className="faq-answer" id="faqA6">Cada excursión indica el nivel de dificultad y el equipamiento recomendado. En general: calzado de montaña, ropa cómoda, protección solar y suficiente agua y comida.</div>
                </div>
            </div>
            </div>

            </div>
        </>

    )
}