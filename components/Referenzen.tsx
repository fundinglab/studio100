'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const TESTIMONIALS = [
  {
    badge: '+184% Anfragen',
    quote:
      'Vor Studio100 hatten wir eine Website, die niemand fand. Heute bekommen wir wöchentlich qualifizierte Anfragen – und das System läuft praktisch von alleine.',
    name: 'Markus Brunner',
    role: 'Geschäftsführer · Brunner Bau GmbH',
    initials: 'MB',
  },
  {
    badge: '3,2× Conversion',
    quote:
      'Endlich eine Agentur, die nicht über Farben diskutiert, sondern über Ergebnisse. Die neue Website hat unsere Conversion-Rate mehr als verdreifacht.',
    name: 'Sandra Hofer',
    role: 'Inhaberin · Hofer Sanitär',
    initials: 'SH',
  },
  {
    badge: '+47.000€/Monat',
    quote:
      'Die Investition hat sich nach 6 Wochen amortisiert. Wir generieren heute über 47.000€ zusätzlichen Monatsumsatz nur über unsere neue Website.',
    name: 'Thomas Reiter',
    role: 'Inhaber · Reiter Dachdeckermeister',
    initials: 'TR',
  },
];

export default function Referenzen() {
  return (
    <section
      id="referenzen"
      className="section-py"
      style={{ background: '#F8FAFC' }}
    >
      <div className="container-x">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="referenzen-header"
        >
          <div>
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.12em',
                color: '#1A6BFF',
                textTransform: 'uppercase',
              }}
            >
              REFERENZEN
            </span>
            <h2
              style={{
                fontSize: 'clamp(28px, 3vw, 40px)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginTop: 12,
                marginBottom: 0,
                color: '#0A0A0A',
              }}
            >
              Was unsere Kunden sagen.
            </h2>
          </div>
          <a
            href="#kontakt"
            className="referenzen-link"
            style={{
              fontSize: 14,
              color: '#0A0A0A',
              fontWeight: 600,
              transition: 'color 0.2s',
              whiteSpace: 'nowrap',
            }}
          >
            Alle Case Studies ansehen ↗
          </a>
        </motion.div>

        <div className="referenzen-grid" style={{ marginTop: 48 }}>
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeIn}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{
                background: '#FFFFFF',
                border: '1px solid #EAEAEA',
                borderRadius: 20,
                padding: 32,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ display: 'flex', gap: 2 }}>
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} size={16} fill="#0A0A0A" stroke="none" />
                ))}
              </div>

              <span
                style={{
                  display: 'inline-block',
                  marginTop: 16,
                  background: '#EFF6FF',
                  color: '#1A6BFF',
                  fontSize: 12,
                  fontWeight: 600,
                  padding: '4px 12px',
                  borderRadius: 9999,
                  alignSelf: 'flex-start',
                }}
              >
                {t.badge}
              </span>

              <p
                style={{
                  fontSize: 15,
                  color: '#374151',
                  lineHeight: 1.7,
                  marginTop: 16,
                  marginBottom: 0,
                  flex: 1,
                }}
              >
                <span style={{ color: '#D1D5DB', fontSize: 18 }}>“</span>
                {t.quote}
              </p>

              <div
                style={{
                  height: 1,
                  background: '#F3F4F6',
                  margin: '24px 0',
                }}
              />

              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 9999,
                    background: '#0A0A0A',
                    color: '#FFFFFF',
                    fontSize: 14,
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#0A0A0A' }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: 12, color: '#9CA3AF', marginTop: 2 }}>
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .referenzen-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 24px;
        }
        .referenzen-link:hover {
          color: #1a6bff;
        }
        .referenzen-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 1024px) {
          .referenzen-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .referenzen-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
