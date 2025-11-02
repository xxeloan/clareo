// app/page.tsx
export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <h1>Clareo — votre copilote financier</h1>
          <p>
            Une plateforme unique pour agréger vos comptes, piloter votre budget, et
            investir en toute simplicité. Données bancaires sécurisées, tableaux de bord
            clairs, et recommandations actionnables.
          </p>

          <div className="cta">
            <a className="btn btn-primary" href="#contact">Demander une démo</a>
            <a className="btn btn-secondary" href="#features">Voir les fonctionnalités</a>
          </div>

          <div className="trust">
            <span>🔐 Données chiffrées</span>
            <span>⚡ Temps réel</span>
            <span>🇪🇺 Conforme RGPD</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="features">
        <div className="container">
          <div className="grid">
            <div className="card">
              <h3>Agrégation multi-banques</h3>
              <p>Connectez vos comptes (courant, épargne, crypto) et visualisez tout en un seul endroit.</p>
            </div>
            <div className="card">
              <h3>Budget & cashflow</h3>
              <p>Catégorisation automatique, objectifs mensuels, alertes et projections.</p>
            </div>
              <div className="card">
              <h3>Investissements</h3>
              <p>Suivi des portefeuilles, performance et répartition, indicateurs clés.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES / MOCKUP */}
      <section className="services">
        <div className="container">
          <div className="grid-2">
            <div>
              <h2>Tableau de bord clair & actionnable</h2>
              <ul className="list">
                <li>Vue consolidée de vos finances</li>
                <li>Recommandations personnalisées</li>
                <li>Export comptable en 1 clic</li>
              </ul>
            </div>
            <div className="panel mockup">
              Aperçu produit (mockup)
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Parlons de vos besoins</h2>
          <p>Laissez votre email, on vous recontacte en 24h.</p>
          <form className="inline-form" action="https://formspree.io/f/mayvlbby" method="POST">
            <input type="email" name="email" placeholder="Votre e-mail" required />
            <button className="btn btn-primary" type="submit">Je veux une démo</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-grid">
          <div>© {new Date().getFullYear()} Clareo</div>
          <nav className="footer-nav">
            <a href="#">Sécurité</a>
            <a href="#">Confidentialité</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}