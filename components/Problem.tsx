'use client';

import { motion } from 'framer-motion';
import { MessageSquare, LayoutGrid, ShieldOff, type LucideIcon } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CARDS: {
  Icon: LucideIcon;
  title: string;
  text: string;
  stat: string;
  label: string;
}[] = [
  {
    Icon: MessageSquare,
    title: 'Unklare Botschaft',
    text:
      'Besucher verstehen in den ersten 5 Sekunden nicht, was Sie anbieten und springen ab.',
    stat: '76%',
    label: 'verlassen Websites mit unklarer Aussage',
  },
  {
    Icon: LayoutGrid,
    title: 'Schwache Struktur',
    text:
      'Ohne klare Nutzerführung wissen potenzielle Kunden nicht, was als nächster Schritt zu tun ist.',
    stat: '4×',
    label: 'weniger Anfragen bei chaotischer Struktur',
  },
  {
    Icon: ShieldOff,
    title: 'Fehlendes Vertrauen',
    text:
      'Keine Referenzen, keine Beweise, keine Garantien – Interessenten entscheiden sich für die Konkurrenz.',
    stat: '83%',
    label: 'recherchieren Vertrauenssignale vor Kontakt',
  },
];

export default function Problem() {
  return (
    <section id="problem" className="section-py" style={{ background: '#FFFFFF' }}>
      <div className="container-x">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Overline color="#1A6BFF">DAS EIGENTLICHE PROBLEM</Overline>

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
              Die meisten Websites verlieren Kunden —
            </span>
            <span style={{ color: '#0A0A0A', display: 'block' }}>
              nicht wegen schlechtem Design.
            </span>
          </h2>

          <p
            style={{
              fontSize: 16,
              color: '#6B7280',
              maxWidth: 540,
              marginTop: 16,
              lineHeight: 1.6,
            }}
          >
            Sie verlieren Kunden, weil drei entscheidende Hebel ignoriert werden.
            Jeder dieser Punkte kostet Sie messbar Anfragen – Monat für Monat.
          </p>
        </motion.div>

        <div className="problem-grid" style={{ marginTop: 48 }}>
          {CARDS.map(({ Icon, title, text, stat, label }, i) => (
            <motion.div
              key={title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeIn}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="problem-card"
              style={{
                background: '#FFFFFF',
                border: '1px solid #EAEAEA',
                borderRadius: 20,
                padding: 32,
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  background: '#F3F4F6',
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon size={20} color="#6B7280" />
              </div>

              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#0A0A0A',
                  marginTop: 20,
                  marginBottom: 0,
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: '#6B7280',
                  marginTop: 10,
                  marginBottom: 0,
                  lineHeight: 1.6,
                }}
              >
                {text}
              </p>

              <div
                style={{
                  height: 1,
                  background: '#EAEAEA',
                  margin: '24px 0',
                }}
              />

              <div
                style={{
                  fontSize: 32,
                  fontWeight: 800,
                  color: '#0A0A0A',
                  lineHeight: 1,
                }}
              >
                {stat}
              </div>
              <div style={{ fontSize: 12, color: '#9CA3AF', marginTop: 6 }}>
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .problem-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 1024px) {
          .problem-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 640px) {
          .problem-grid {
            grid-template-columns: 1fr;
          }
          :global(.problem-card) {
            padding: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}

function Overline({
  children,
  color = '#1A6BFF',
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <span
      style={{
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: '0.12em',
        color,
        textTransform: 'uppercase',
      }}
    >
      {children}
    </span>
  );
}
