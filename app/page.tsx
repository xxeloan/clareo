// app/page.tsx
import type { CSSProperties } from "react";
import Reveal from "./components/Reveal";
import Image from "next/image"; // utile dès que tu remplaces les placeholders par de vraies captures

export default function Home() {
  return (
    <main>
      {/* Active l'observer d'animation (IntersectionObserver) */}
      <Reveal />

      {/* =========================
          HERO
         ========================= */}
      <section className="hero">
        <div className="container">
          <h1 data-reveal style={{ ["--reveal-delay" as any]: "0ms" } as CSSProperties}>
            Clareo — votre copilote financier
          </h1>

          <p data-reveal style={{ ["--reveal-delay" as any]: "80ms" } as CSSProperties}>
            Une plateforme unique pour agréger vos comptes, piloter votre budget,
            et investir en toute simplicité. Données bancaires sécurisées, tableaux de bord clairs,
            et recommandations actionnables.
          </p>

          <div className="cta" data-reveal style={{ ["--reveal-delay" as any]: "160ms" } as CSSProperties}>
            <a className="btn btn-primary" href="#contact">Demander une démo</a>
            <a className="btn btn-secondary" href="#features">Voir les fonctionnalités</a>
          </div>

          <div className="trust" data-reveal style={{ ["--reveal-delay" as any]: "240ms" } as CSSProperties}>
            <span>🔒 Données chiffrées</span>
            <span>⚡ Temps réel</span>
            <span>📜 Conforme RGPD</span>
          </div>
        </div>
      </section>

      {/* =========================
          FEATURES
         ========================= */}
      <section id="features" className="features">
        <div className="container">
          <div className="grid">
            <div className="card" data-reveal style={{ ["--reveal-delay" as any]: "0ms" } as CSSProperties}>
              <h3>Agrégation multi-banques</h3>
              <p>
                Connectez vos comptes (courant, épargne, crypto) et visualisez tout en un seul endroit.
              </p>
            </div>

            <div className="card" data-reveal style={{ ["--reveal-delay" as any]: "80ms" } as CSSProperties}>
              <h3>Budget &amp; cashflow</h3>
              <p>
                Catégorisation automatique, objectifs mensuels, alertes et projections.
              </p>
            </div>

            <div className="card" data-reveal style={{ ["--reveal-delay" as any]: "160ms" } as CSSProperties}>
              <h3>Investissements</h3>
              <p>
                Suivi des portefeuilles, performance et répartition, indicateurs clés.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* =========================
    METRICS + BADGES (no logos)
   ========================= */}
<section className="metrics" id="metrics">
  <div className="container">
    <div className="metrics-strip">
      <div className="metric" data-reveal style={{ ["--reveal-delay" as any]: "0ms" } as React.CSSProperties}>
        <div className="m-value">12 000+</div>
        <div className="m-label">comptes connectés</div>
      </div>
      <div className="metric" data-reveal style={{ ["--reveal-delay" as any]: "80ms" } as React.CSSProperties}>
        <div className="m-value">94%</div>
        <div className="m-label">catégorisation auto.</div>
      </div>
      <div className="metric" data-reveal style={{ ["--reveal-delay" as any]: "160ms" } as React.CSSProperties}>
        <div className="m-value">+18%</div>
        <div className="m-label">cashflow anticipé</div>
      </div>
      <div className="metric" data-reveal style={{ ["--reveal-delay" as any]: "240ms" } as React.CSSProperties}>
        <div className="m-value">4.9★</div>
        <div className="m-label">satisfaction</div>
      </div>
    </div>

    <div className="badges" data-reveal style={{ ["--reveal-delay" as any]: "320ms" } as React.CSSProperties}>
      <span className="badge">🔐 Chiffrement AES-256</span>
      <span className="badge">📜 Conforme RGPD</span>
      <span className="badge">🔌 Connexions bancaires PSD2</span>
      <span className="badge">🛡️ Bonnes pratiques ISO 27001</span>
    </div>
  </div>
</section>

      {/* =========================
          TÉMOIGNAGES
         ========================= */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2 className="section-title" data-reveal style={{ ["--reveal-delay" as any]: "0ms" } as CSSProperties}>
            Ils parlent de Clareo
          </h2>

          <div className="grid">
            <article className="tcard" data-reveal style={{ ["--reveal-delay" as any]: "0ms" } as CSSProperties}>
              <div className="header">
                <div className="avatar">AG</div>
                <div className="who">
                  <strong>Amélie G.</strong>
                  <span>Dir. financière · PME</span>
                </div>
              </div>
              <p className="quote">
                « En un coup d’œil, je vois la trésorerie consolidée et les alertes de cashflow.
                On a arrêté nos tableaux Excel. »
              </p>
              <div className="stars" aria-label="5/5">★★★★★</div>
            </article>

            <article className="tcard" data-reveal style={{ ["--reveal-delay" as any]: "80ms" } as CSSProperties}>
              <div className="header">
                <div className="avatar">MB</div>
                <div className="who">
                  <strong>Mehdi B.</strong>
                  <span>Founder · Startup</span>
                </div>
              </div>
              <p className="quote">
                « L’agrégation multi-banque + les objectifs mensuels m’aident à piloter
                mon runway et mes dépenses marketing. »
              </p>
              <div className="stars" aria-label="5/5">★★★★★</div>
            </article>

            <article className="tcard" data-reveal style={{ ["--reveal-delay" as any]: "160ms" } as CSSProperties}>
              <div className="header">
                <div className="avatar">JL</div>
                <div className="who">
                  <strong>Julie L.</strong>
                  <span>Indépendante</span>
                </div>
              </div>
              <p className="quote">
                « Catégorisation auto nickel. Je reçois des recommandations concrètes pour optimiser. »
              </p>
              <div className="stars" aria-label="5/5">★★★★★</div>
            </article>
          </div>
        </div>
      </section>

      {/* =========================
          CAPTURES D’ÉCRAN (placeholders)
         ========================= */}
      <section id="screens" className="screens">
        <div className="container">
          <h2 className="section-title" data-reveal style={{ ["--reveal-delay" as any]: "0ms" } as CSSProperties}>
            Un aperçu du tableau de bord
          </h2>

          <div className="shot-grid">
            {/* Placeholders élégants – remplace par tes vraies images dans /public/screenshots/ */}
            <div className="shot" data-reveal style={{ ["--reveal-delay" as any]: "0ms" } as CSSProperties}>
              <div className="shot-placeholder">Dashboard — Synthèse</div>
            </div>
            <div className="shot" data-reveal style={{ ["--reveal-delay" as any]: "80ms" } as CSSProperties}>
              <div className="shot-placeholder">Budgets &amp; objectifs</div>
            </div>
            <div className="shot" data-reveal style={{ ["--reveal-delay" as any]: "160ms" } as CSSProperties}>
              <div className="shot-placeholder">Investissements &amp; perf</div>
            </div>

            {/*
              Quand tu auras tes captures, mets-les dans /public/screenshots/
              et remplace un bloc placeholder par :

              <div className="shot" data-reveal style={{ ["--reveal-delay" as any]: "0ms" } as CSSProperties}>
                <Image
                  src="/screenshots/dashboard-1.png"
                  alt="Aperçu tableau de bord"
                  width={1280}
                  height={800}
                  className="img"
                  priority
                />
              </div>
            */}
          </div>

          <div className="cta-bottom" data-reveal style={{ ["--reveal-delay" as any]: "240ms" } as CSSProperties}>
            <a href="#contact" className="btn btn-primary">Demander une démo</a>
            <a href="#features" className="btn btn-secondary">Voir les fonctionnalités</a>
          </div>
        </div>
      </section>
    </main>
  );
}