'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const BULLETS = [
  'Strategische Positionierung gegenüber dem Wettbewerb',
  'Conversion-optimierte Nutzerführung & Copy',
  'Messbare Ergebnisse statt subjektiver Meinungen',
  'Technisches Fundament für nachhaltiges Wachstum',
];

const TILES = [
  { value: '+184%', label: 'Mehr Anfragen' },
  { value: '-62%', label: 'Absprungrate' },
  { value: '2,8s', label: 'Ladezeit' },
  { value: '100/100', label: 'Performance Score' },
];

export default function Positionierung() {
  return (
    <section
      className="dot-grid section-py"
      style={{ background: '#FAFAFA' }}
    >
      <div className="container-x">
        <div className="positionierung-grid">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
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
              UNSERE POSITIONIERUNG
            </span>
            <h2
              style={{
                fontSize: 'clamp(32px, 3.5vw, 48px)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginTop: 16,
                marginBottom: 0,
              }}
            >
              <span style={{ color: '#0A0A0A', display: 'block' }}>
                Wir bauen keine Websites.
              </span>
              <span style={{ color: '#C5C5C5', display: 'block' }}>
                Wir bauen digitale Verkaufssysteme.
              </span>
            </h2>
            <p
              style={{
                fontSize: 16,
                color: '#6B7280',
                marginTop: 20,
                lineHeight: 1.7,
                maxWidth: 540,
              }}
            >
              Eine Website ist kein Designprojekt. Sie ist ein Mitarbeiter, der
              24/7 für Sie arbeitet – qualifiziert, überzeugt, und schließt
              Anfragen ab. Wir entwickeln Systeme, die genau das leisten.
            </p>

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                marginTop: 24,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              {BULLETS.map((b) => (
                <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <CheckCircle2 size={18} color="#1A6BFF" style={{ flexShrink: 0, marginTop: 1 }} />
                  <span style={{ fontSize: 15, color: '#374151' }}>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              background: '#0F172A',
              borderRadius: 24,
              padding: 32,
              boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
            }}
          >
            <div
              style={{
                fontSize: 11,
                letterSpacing: '0.15em',
                color: '#4B5563',
                fontWeight: 600,
                textTransform: 'uppercase',
              }}
            >
              STUDIO100 SYSTEM
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 12,
                marginTop: 20,
              }}
            >
              {TILES.map((tile) => (
                <div
                  key={tile.label}
                  style={{
                    background: '#1E293B',
                    borderRadius: 14,
                    padding: 20,
                  }}
                >
                  <div
                    style={{
                      fontSize: 28,
                      fontWeight: 800,
                      color: '#FFFFFF',
                      lineHeight: 1,
                    }}
                  >
                    {tile.value}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: '#64748B',
                      marginTop: 8,
                    }}
                  >
                    {tile.label}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                fontSize: 12,
                color: '#4B5563',
                marginTop: 20,
                paddingTop: 20,
                borderTop: '1px solid #1E293B',
                lineHeight: 1.5,
              }}
            >
              Durchschnittliche Ergebnisse unserer Kundenprojekte nach 90 Tagen.
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .positionierung-grid {
          display: grid;
          grid-template-columns: 60% 40%;
          gap: 80px;
          align-items: center;
        }
        @media (max-width: 1024px) {
          .positionierung-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
}
