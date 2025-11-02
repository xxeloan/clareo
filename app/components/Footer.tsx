// app/components/Footer.tsx
import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" data-reveal style={{ ['--reveal-delay' as any]: '0ms' }}>
      <div className="container footer-inner">
        {/* Colonne gauche : marque + baseline */}
        <div className="footer-brand">
          <div className="logo">Clareo</div>
          <p className="baseline">
            Le copilote financier pour agréger vos comptes, piloter votre budget
            et vos investissements — simplement.
          </p>
        </div>

        {/* Colonne droite : liens + CTA */}
        <nav className="footer-nav">
          <ul className="footer-links">
            <li><a href="/mentions-legales">Mentions légales</a></li>
            <li><a href="/politique-confidentialite">Politique de confidentialité</a></li>
            <li>
              <a className="btn btn-primary" href="mailto:contact@clareo.fun?subject=Contact%20Clareo">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Barre bas de page */}
      <div className="footer-legal">
        <div className="container footer-legal-inner">
          <span>© {year} Clareo. Tous droits réservés.</span>
          <span className="muted">Conforme RGPD • Données chiffrées</span>
        </div>
      </div>
    </footer>
  );
}