'use client';

import { motion } from 'framer-motion';
import { Layers, Type, Code2, type LucideIcon } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CARDS: {
  Icon: LucideIcon;
  number: string;
  title: string;
  text: string;
  bullets: string[];
}[] = [
  {
    Icon: Layers,
    number: '01',
    title: 'Strategic Webdesign',
    text:
      'Design ist kein Selbstzweck. Wir gestalten Oberflächen, die führen, überzeugen und konvertieren.',
    bullets: [
      'Conversion-orientiertes UX',
      'Visuelle Hierarchie',
      'Mobile-First Approach',
      'Premium-Ästhetik',
    ],
  },
  {
    Icon: Type,
    number: '02',
    title: 'Conversion Copywriting',
    text:
      'Worte verkaufen. Wir schreiben Texte, die zum Kern Ihres Angebots vordringen und Vertrauen aufbauen.',
    bullets: [
      'Klare Wertversprechen',
      'Verkaufspsychologie',
      'Vertrauensaufbau',
      'Klare Call-to-Actions',
    ],
  },
  {
    Icon: Code2,
    number: '03',
    title: 'Technical Development',
    text:
      'Geschwindigkeit, Sicherheit, SEO. Eine technische Basis, die Ergebnisse über Jahre trägt.',
    bullets: [
      '100/100 Performance',
      'SEO-Fundament',
      'Sichere Architektur',
      'CMS-Integration',
    ],
  },
];

export default function Leistungen() {
  return (
    <section id="leistungen" className="section-py" style={{ background: '#FFFFFF' }}>
      <div className="container-x">
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
            LEISTUNGEN
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
              Drei Disziplinen.
            </span>
            <span style={{ color: '#C5C5C5', display: 'block' }}>
              Ein integriertes System.
            </span>
          </h2>
          <p
            style={{
              fontSize: 16,
              color: '#6B7280',
              marginTop: 16,
              maxWidth: 600,
              lineHeight: 1.6,
            }}
          >
            Eine wirksame Website entsteht nur, wenn Strategie, Sprache und
            Technik zusammenspielen. Wir liefern alle drei – aus einer Hand.
          </p>
        </motion.div>

        <div className="leistungen-grid" style={{ marginTop: 48 }}>
          {CARDS.map(({ Icon, number, title, text, bullets }, i) => (
            <motion.div
              key={number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeIn}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="leistung-card"
              className="leistung-card"
              style={{
                background: '#FAFAFA',
                border: '1px solid #EAEAEA',
                borderRadius: 20,
                padding: 32,
                transition: 'box-shadow 0.25s ease, transform 0.25s ease',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    background: '#0A0A0A',
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon size={20} color="#FFFFFF" />
                </div>
                <span style={{ fontSize: 13, color: '#D1D5DB', fontWeight: 500 }}>
                  {number}
                </span>
              </div>

              <h3
                style={{
                  fontSize: 20,
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

              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '20px 0 0 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                {bullets.map((b) => (
                  <li
                    key={b}
                    style={{ display: 'flex', alignItems: 'center', gap: 8 }}
                  >
                    <span
                      style={{
                        width: 4,
                        height: 4,
                        background: '#D1D5DB',
                        borderRadius: 9999,
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontSize: 13, color: '#6B7280' }}>{b}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#kontakt"
                className="leistung-link"
                style={{
                  display: 'inline-block',
                  marginTop: 24,
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#0A0A0A',
                  transition: 'color 0.2s',
                }}
              >
                Mehr erfahren ↗
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .leistungen-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .leistung-card:hover {
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }
        .leistung-link:hover {
          color: #1a6bff;
        }
        @media (max-width: 1024px) {
          .leistungen-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 640px) {
          .leistungen-grid {
            grid-template-columns: 1fr;
          }
          :global(.leistung-card) {
            padding: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
