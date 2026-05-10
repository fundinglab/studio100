'use client';

import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroContent() {
  return (
    <section
      className="dot-grid"
      style={{
        background: '#FAFAFA',
        paddingTop: 100,
        paddingBottom: 80,
      }}
    >
      <div className="container-x">
        <div style={{ maxWidth: 680 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                background: '#EFF6FF',
                border: '1px solid #BFDBFE',
                color: '#1A6BFF',
                fontSize: 13,
                fontWeight: 500,
                padding: '6px 14px',
                borderRadius: 9999,
              }}
            >
              <Zap size={12} fill="#1A6BFF" stroke="#1A6BFF" />
              Conversion Websites für Bau & Handwerk
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginTop: 24,
              marginBottom: 0,
            }}
          >
            <span style={{ color: '#0A0A0A', display: 'block' }}>
              Ihre Website sollte
            </span>
            <span style={{ color: '#0A0A0A', display: 'block' }}>
              nicht nur gut aussehen.
            </span>
            <span style={{ color: '#C5C5C5', display: 'block' }}>
              Sondern Kunden bringen.
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              fontSize: 17,
              color: '#6B7280',
              maxWidth: 480,
              marginTop: 20,
              lineHeight: 1.6,
            }}
          >
            Wir entwickeln hochwertige Websites für Bau- & Handwerksunternehmen,
            die Vertrauen aufbauen, überzeugen – und messbar mehr Anfragen
            generieren.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 12,
              marginTop: 32,
            }}
          >
            <a href="#analyse" className="btn-primary">
              Kostenlose Website-Analyse starten →
            </a>
            <a href="#kontakt" className="btn-secondary">
              Projekt anfragen
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              marginTop: 56,
              borderTop: '1px solid #EAEAEA',
              paddingTop: 32,
            }}
          >
            <div className="hero-stats-grid">
              <Stat value="100+" label="Projekte umgesetzt" />
              <Divider />
              <Stat value="3×" label="Höhere Conversion Rate" />
              <Divider />
              <Stat value="98%" label="Kundenzufriedenheit" />
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .hero-stats-grid {
          display: flex;
          gap: 48px;
          align-items: center;
        }
        @media (max-width: 640px) {
          .hero-stats-grid {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }
          .hero-stats-grid :global(.hero-divider) {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div style={{ fontSize: 36, fontWeight: 800, color: '#0A0A0A', lineHeight: 1 }}>
        {value}
      </div>
      <div style={{ fontSize: 13, color: '#6B7280', marginTop: 4 }}>{label}</div>
    </div>
  );
}

function Divider() {
  return (
    <div
      className="hero-divider"
      style={{ width: 1, height: 40, background: '#EAEAEA' }}
    />
  );
}
