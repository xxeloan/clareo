import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <main>
      <Reveal />

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <h1
            data-reveal
            style={{ "--reveal-delay": "40ms" } as React.CSSProperties}
          >
            Clareo — votre copilote financier
          </h1>

          <p
            data-reveal
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            Une plateforme unique pour agréger vos comptes, piloter votre budget,
            et investir en toute simplicité. Données bancaires sécurisées,
            tableaux de bord clairs, et recommandations actionnables.
          </p>

          <div
            className="cta"
            data-reveal
            style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
          >
            <a className="btn btn-primary" href="#contact">
              Demander une démo
            </a>
            <a className="btn btn-secondary" href="#features">
              Voir les fonctionnalités
            </a>
          </div>

          <div className="trust">
            <span
              data-reveal
              style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
            >
              🔐 Données chiffrées
            </span>
            <span
              data-reveal
              style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            >
              ⚡ Temps réel
            </span>
            <span
              data-reveal
              style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
            >
              📜 Conforme RGPD
            </span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="features">
        <div className="container">
          <div className="grid">
            <div
              className="card"
              data-reveal
              style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
            >
              <h3>Agrégation multi-banques</h3>
              <p>
                Connectez vos comptes (courant, épargne, crypto) et visualisez
                tout en un seul endroit.
              </p>
            </div>

            <div
              className="card"
              data-reveal
              style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            >
              <h3>Budget &amp; cashflow</h3>
              <p>
                Catégorisation automatique, objectifs mensuels, alertes et
                projections.
              </p>
            </div>

            <div
              className="card"
              data-reveal
              style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
            >
              <h3>Investissements</h3>
              <p>
                Suivi des portefeuilles, performance et répartition, indicateurs
                clés.
              </p>
            </div>
          </div>
        </div>
      </section>
      </section>

{/* METRICS / KPIs */}
<section className="metrics">
  <div className="container grid kpis">
    <div className="kpi" data-reveal style={{ "--reveal-delay": "0ms" } as React.CSSProperties}>
      <h4>+120k€</h4>
      <p>Budget agrégé suivi / mois</p>
    </div>
    <div className="kpi" data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
      <h4>98.9%</h4>
      <p>Synchronisations bancaires réussies</p>
    </div>
    <div className="kpi" data-reveal style={{ "--reveal-delay": "160ms" } as React.CSSProperties}>
      <h4>~12 min</h4>
      <p>Gagnées / semaine en automatisation</p>
    </div>
  </div>
</section>

{/* CTA FINAL */}
<section className="bottom-cta">
  <div className="container" data-reveal style={{ "--reveal-delay": "0ms" } as React.CSSProperties}>
    <h2>Prêt à piloter vos finances simplement ?</h2>
    <p>Connectez vos comptes, suivez votre budget et vos investissements au même endroit.</p>
    <div className="cta">
      <a className="btn btn-primary" href="#contact">Demander une démo</a>
      <a className="btn btn-secondary" href="#features">Revoir les fonctionnalités</a>
    </div>
  </div>
</section>

{/* FOOTER */}
<footer className="site-footer">
  <div className="container footer-inner">
    <div className="brand" data-reveal style={{ "--reveal-delay": "0ms" } as React.CSSProperties}>
      <strong>Clareo</strong>
      <span>© {new Date().getFullYear()}</span>
    </div>
    <nav className="footer-nav" data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
      <a href="#features">Fonctionnalités</a>
      <a href="#contact">Contact</a>
      <a href="#">Confidentialité</a>
    </nav>
  </div>
</footer>

</main>
    </main>
  );
}