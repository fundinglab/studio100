'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const FEATURES = [
  'Strategische Positionierung & Marktanalyse',
  'Premium Webdesign mit Custom-Komponenten',
  'Performance- & SEO-Optimierung (100/100)',
  'DSGVO-konforme Implementierung',
  'Conversion Copywriting für alle Seiten',
  'Technische Entwicklung & CMS-Integration',
  'Tracking-Setup & Conversion-Messung',
  'Performance-Garantie nach Launch',
];

export default function Angebot() {
  return (
    <section id="angebot" className="section-py" style={{ background: '#FAFAFA' }}>
      <div className="container-x">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ textAlign: 'center' }}
        >
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.12em',
              color: '#1A6BFF',
              textTransform: 'uppercase',
            }}
          >
            UNSER ANGEBOT
          </span>
          <h2
            style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginTop: 16,
              marginBottom: 0,
            }}
          >
            <span style={{ color: '#0A0A0A', display: 'block' }}>
              Ein Produkt.
            </span>
            <span style={{ color: '#C5C5C5', display: 'block' }}>
              Maximal fokussiert.
            </span>
          </h2>
          <p
            style={{
              fontSize: 16,
              color: '#6B7280',
              marginTop: 16,
              maxWidth: 540,
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: 1.6,
            }}
          >
            Wir konzentrieren uns auf eine einzige Sache, die wir besser machen
            als alle anderen.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            background: '#FFFFFF',
            border: '1px solid #EAEAEA',
            borderRadius: 24,
            padding: 48,
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            maxWidth: 640,
            margin: '48px auto 0',
          }}
          className="angebot-card"
        >
          <div className="angebot-header">
            <div>
              <span
                style={{
                  display: 'inline-block',
                  background: '#0A0A0A',
                  color: '#FFFFFF',
                  fontSize: 12,
                  padding: '4px 12px',
                  borderRadius: 9999,
                  fontWeight: 500,
                }}
              >
                Hauptangebot
              </span>
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: '#0A0A0A',
                  marginTop: 12,
                  marginBottom: 0,
                  letterSpacing: '-0.01em',
                }}
              >
                Conversion Website System
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: '#6B7280',
                  marginTop: 8,
                  marginBottom: 0,
                  lineHeight: 1.6,
                  maxWidth: 380,
                }}
              >
                Das vollständige System für Bau- & Handwerksunternehmen, die
                online messbar mehr qualifizierte Anfragen generieren wollen.
              </p>
            </div>
            <div className="angebot-price">
              <div style={{ fontSize: 11, color: '#9CA3AF', textAlign: 'right', letterSpacing: '0.05em' }}>
                AB
              </div>
              <div
                style={{
                  fontSize: 44,
                  fontWeight: 800,
                  color: '#0A0A0A',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                  textAlign: 'right',
                }}
              >
                5.000€
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: '#9CA3AF',
                  marginTop: 4,
                  textAlign: 'right',
                }}
              >
                einmalig · zzgl. MwSt.
              </div>
            </div>
          </div>

          <div style={{ height: 1, background: '#F0F0F0', margin: '32px 0' }} />

          <div className="angebot-features">
            {FEATURES.map((f) => (
              <div
                key={f}
                style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}
              >
                <CheckCircle2
                  size={16}
                  color="#1A6BFF"
                  style={{ flexShrink: 0, marginTop: 3 }}
                />
                <span style={{ fontSize: 14, color: '#374151' }}>{f}</span>
              </div>
            ))}
          </div>

          <a
            href="#kontakt"
            className="btn-primary"
            style={{
              marginTop: 36,
              width: '100%',
              padding: 18,
              fontSize: 16,
            }}
          >
            Projekt anfragen →
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        .angebot-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 24px;
        }
        .angebot-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px 32px;
        }
        @media (max-width: 640px) {
          .angebot-card {
            padding: 24px !important;
          }
          .angebot-header {
            flex-direction: column;
            gap: 20px;
          }
          .angebot-price > * {
            text-align: left !important;
          }
          .angebot-features {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
