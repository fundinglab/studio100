'use client';

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Garantie() {
  return (
    <section style={{ background: '#FAFAFA', padding: '80px 0' }}>
      <div className="container-x">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="garantie-card"
          style={{
            maxWidth: 760,
            margin: '0 auto',
            background:
              'linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%)',
            borderRadius: 24,
            padding: 56,
            boxShadow: '0 20px 80px rgba(0,0,0,0.12)',
            display: 'flex',
            alignItems: 'center',
            gap: 32,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              flexShrink: 0,
              background: 'rgba(255,255,255,0.08)',
              borderRadius: 16,
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ShieldCheck size={28} color="#1A6BFF" />
          </div>

          <div style={{ flex: 1 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.12em',
                color: '#1A6BFF',
                textTransform: 'uppercase',
              }}
            >
              PERFORMANCE-GARANTIE
            </span>
            <h3
              style={{
                color: '#FFFFFF',
                fontSize: 'clamp(20px, 2.5vw, 28px)',
                fontWeight: 700,
                lineHeight: 1.3,
                marginTop: 12,
                marginBottom: 0,
                letterSpacing: '-0.01em',
              }}
            >
              Sollte Ihre Website nach Launch nicht messbar besser performen,
              optimieren wir kostenfrei weiter – bis Ergebnisse sichtbar sind.
            </h3>
            <p
              style={{
                fontSize: 15,
                color: '#94A3B8',
                lineHeight: 1.6,
                marginTop: 12,
                marginBottom: 0,
              }}
            >
              Wir arbeiten ergebnisorientiert. Das bedeutet: Wir hören nicht
              beim Launch auf, sondern erst, wenn Ihre Website tatsächlich
              Resultate liefert.
            </p>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .garantie-card {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 24px !important;
            padding: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
