// app/page.tsx
export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <h1>Clareo — Finance claire, décisions rapides.</h1>
          <p>
            Plateforme fintech pour piloter vos flux, visualiser vos indicateurs et
            automatiser votre conformité. En temps réel, simple, sécurisé.
          </p>
          <div className="cta">
            <a href="#contact" className="btn btn-primary">Demander une démo</a>
            <a href="#features" className="btn btn-secondary">Voir les fonctionnalités</a>
          </div>
          <div className="trust">
            <span>Chiffrement AES-256</span>
            <span>RGPD ready</span>
            <span>99,9% dispo</span>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section id="features" className="features">
        <div className="container grid">
          <div className="card">
            <h3>Vue cash instantanée</h3>
            <p>Tableau de bord temps réel de trésorerie, encours et prévisions.</p>
          </div>
          <div className="card">
            <h3>Automations</h3>
            <p>Rapprochements, exports comptables, alertes seuils & anomalies.</p>
          </div>
          <div className="card">
            <h3>Conformité intégrée</h3>
            <p>KYC/KYB, journaux, rôles & permissions, audit trail complet.</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <div className="container grid-2">
          <div>
            <h2>Connecté à vos banques & outils</h2>
            <p>API bancaires (open banking), ERP/Compta, CRM et outils no-code.</p>
            <ul className="list">
              <li>Connexions sécurisées, OAuth & webhooks</li>
              <li>Exports XLSX/CSV, API REST</li>
              <li>Règles métiers personnalisables</li>
            </ul>
          </div>
          <div className="panel mockup">Espace graphique / mockup (à venir)</div>
        </div>
      </section>

      {/* CONTACT / DEMO */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Parlons de vos besoins</h2>
          <p>Laisse ton email, on te recontacte dans la journée.</p>
          <form className="inline-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="ton@email.com" required />
            <button type="submit" className="btn btn-primary">Envoyer</button>
          </form>
          <small>Pas de spam. Désinscription en un clic.</small>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <span>© {new Date().getFullYear()} Clareo</span>
          <nav className="footer-nav">
            <a href="#">Sécurité</a>
            <a href="#">Confidentialité</a>
            <a href="#">Statut</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}