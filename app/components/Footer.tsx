// app/components/Footer.tsx
import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" data-reveal style={{ ["--reveal-delay" as any]: "0ms" }}>
      <div className="container footer-inner">
        {/* Bloc gauche */}
        <div className="footer-brand">
          <h3 className="logo">Clareo</h3>
          <p className="baseline">
            Le copilote financier pour agréger vos comptes, piloter votre budget
            et vos investissements — simplement.
          </p>
        </div>

        {/* Bloc droit */}
        <nav className="footer-nav">
          <a href="/mentions-legales" className="footer-link">Mentions légales</a>
          <a href="/politique-confidentialite" className="footer-link">Politique de confidentialité</a>
          <a
            href="mailto:contact@clareo.fun?subject=Contact%20Clareo"
            className="btn btn-primary footer-btn"
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Barre légale bas de page */}
      <div className="footer-legal">
        <div className="container footer-legal-inner">
          <span>© {year} Clareo. Tous droits réservés.</span>
          <span className="muted">Conforme RGPD • Données chiffrées</span>
        </div>
      </div>
    </footer>
  );
}