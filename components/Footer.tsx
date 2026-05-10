'use client';

import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';

const NAVIGATION = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Case Studies', href: '#referenzen' },
  { label: 'Angebot', href: '#angebot' },
  { label: 'Problem', href: '#problem' },
  { label: 'ROI-Rechner', href: '#roi' },
];

const LEGAL = [
  { label: 'Datenschutz', href: '#' },
  { label: 'Impressum', href: '#' },
  { label: 'AGB', href: '#' },
];

const headerStyle: React.CSSProperties = {
  fontSize: 11,
  letterSpacing: '0.1em',
  color: '#4B5563',
  fontWeight: 600,
  textTransform: 'uppercase',
  marginBottom: 16,
  display: 'block',
};

const linkStyle: React.CSSProperties = {
  fontSize: 13,
  color: '#6B7280',
  display: 'block',
  marginBottom: 10,
  transition: 'color 0.2s',
};

export default function Footer() {
  return (
    <footer
      style={{
        background: '#0A0A0A',
        borderTop: '1px solid #1A1A1A',
        padding: '60px 0 40px',
        color: '#FFFFFF',
      }}
    >
      <div className="container-x">
        <div className="footer-grid">
          {/* Col 1: Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: '#FFFFFF',
                  color: '#0A0A0A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: 16,
                }}
              >
                S
              </div>
              <span style={{ fontWeight: 700, fontSize: 18, color: '#FFFFFF' }}>
                Studio100
              </span>
            </div>
            <p
              style={{
                fontSize: 13,
                color: '#6B7280',
                maxWidth: 260,
                marginTop: 12,
                marginBottom: 0,
                lineHeight: 1.6,
              }}
            >
              Studio100 — Wir bauen digitale Verkaufssysteme für Bau- und
              Handwerksunternehmen, die messbar mehr Kunden gewinnen wollen.
            </p>
          </div>

          {/* Col 2: Kontakt */}
          <div>
            <span style={headerStyle}>KONTAKT</span>
            <a href="mailto:schlaepfer.demian@gmail.com" className="footer-link" style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: 8 }}>
              <Mail size={14} />
              schlaepfer.demian@gmail.com
            </a>
            <a href="#" className="footer-link" style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: 8 }}>
              <Phone size={14} />
              +49 — auf Anfrage
            </a>
            <span style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: 8 }}>
              <MapPin size={14} />
              Schweiz / DACH
            </span>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <span style={headerStyle}>NAVIGATION</span>
            {NAVIGATION.map((l) => (
              <a key={l.href} href={l.href} className="footer-link" style={linkStyle}>
                {l.label}
              </a>
            ))}
          </div>

          {/* Col 4: Legal */}
          <div>
            <span style={headerStyle}>RECHTLICHES</span>
            {LEGAL.map((l) => (
              <a key={l.label} href={l.href} className="footer-link" style={linkStyle}>
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: 48,
            borderTop: '1px solid #1A1A1A',
            paddingTop: 24,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <span style={{ fontSize: 12, color: '#4B5563' }}>
            © 2026 Studio100. Alle Rechte vorbehalten.
          </span>
          <div style={{ display: 'flex', gap: 16 }}>
            {[Linkedin, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="footer-social"
                style={{ color: '#4B5563', transition: 'color 0.2s' }}
                aria-label="Social link"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: 40px;
        }
        :global(.footer-link:hover) {
          color: #ffffff !important;
        }
        :global(.footer-social:hover) {
          color: #ffffff !important;
        }
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}
