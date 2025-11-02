// app/page.tsx
export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-left">
            <h1>Clareo — pilotage financier moderne</h1>
            <p className="lead">
              Donnez à vos décisions financières la clarté qu’elles méritent :
              dashboards temps réel, KPIs clés et reporting pro — sans Excel.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#contact">Demander une démo</a>
              <a className="btn btn-secondary" href="#services">Découvrir les services</a>
            </div>
            <ul className="bullets">
              <li>Connexion à la compta (Pennylane / QuickBooks / Sage)</li>
              <li>Trésorerie, marge, EBITDA, cash burn en temps réel</li>
              <li>Exports PDF & liens partageables</li>
            </ul>
          </div>
          <div className="hero-right">
            <div className="mockup">
              <div className="mockup-top">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
              <div className="mockup-body">
                <div className="card kpi">
                  <div>Trésorerie</div>
                  <strong>€ 238 450</strong>
                </div>
                <div className="card chart" />
                <div className="grid">
                  <div className="card mini">CA mensuel<br/><strong>€ 84 200</strong></div>
                  <div className="card mini">Marge brute<br/><strong>54,8%</strong></div>
                  <div className="card mini">EBITDA<br/><strong>€ 18 900</strong></div>
                  <div className="card mini">Burn rate<br/><strong>€ −12 300</strong></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALEUR */}
      <section className="value">
        <div className="container">
          <h2>Pourquoi les dirigeants choisissent Clareo</h2>
          <div className="cards">
            <div className="card feature">
              <h3>Simplicité</h3>
              <p>Une interface claire, pensée pour les dirigeants non-financiers.</p>
            </div>
            <div className="card feature">
              <h3>Temps réel</h3>
              <p>Vos données se synchronisent automatiquement avec votre comptabilité.</p>
            </div>
            <div className="card feature">
              <h3>Décisions</h3>
              <p>KPIs actionnables, alertes de trésorerie et objectifs suivis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services">
        <div className="container">
          <h2>Nos services</h2>
          <div className="cards">
            <div className="card service">
              <h3>Reporting financier</h3>
              <p>Tableaux de bord personnalisés : trésorerie, marge, EBITDA, budget vs réel.</p>
            </div>
            <div className="card service">
              <h3>Prévisionnel</h3>
              <p>Scénarios de cash, plan de charges, objectifs et suivi automatique.</p>
            </div>
            <div className="card service">
              <h3>Multi-entités</h3>
              <p>Consolidation de groupe, comparaisons et exports investisseurs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF / CHIFFRES */}
      <section className="proof">
        <div className="container stats">
          <div className="stat">
            <strong>–6 h</strong>
            <span>de reporting par mois</span>
          </div>
          <div className="stat">
            <strong>+30%</strong>
            <span>de visibilité cash</span>
          </div>
          <div className="stat">
            <strong>95%</strong>
            <span>de satisfaction</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Parlons de vos besoins</h2>
          <p className="lead">Laissez-nous vos coordonnées — un expert vous répond sous 24 h.</p>
          <form className="form" onSubmit={(e)=>{e.preventDefault(); alert('Merci ! Nous vous recontactons sous 24h.');}}>
            <div className="grid2">
              <input required placeholder="Votre nom" />
              <input type="email" required placeholder="Votre email" />
            </div>
            <input placeholder="Entreprise (optionnel)" />
            <textarea rows={5} placeholder="Votre message" />
            <button type="submit" className="btn btn-primary">Envoyer</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-row">
          <span>© {new Date().getFullYear()} Clareo</span>
          <nav className="footer-nav">
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
            <a href="#">Mentions légales</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}