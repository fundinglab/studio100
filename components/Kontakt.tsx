'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronDown } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const BULLETS = [
  'Persönliches Strategie-Gespräch',
  'Ehrliche Einschätzung Ihres Potenzials',
  'Konkretes Angebot mit Performance-Garantie',
];

const BUDGETS = ['< 5k €', '5k - 10k €', '> 10k €'];

const HEAR_OPTIONS = [
  'Bitte auswählen…',
  'Google-Suche',
  'Empfehlung',
  'Social Media',
  'Bestandskunde',
  'Sonstiges',
];

const inputBase: React.CSSProperties = {
  background: '#1A1A1A',
  border: '1px solid #2A2A2A',
  borderRadius: 10,
  padding: '14px 16px',
  color: '#FFFFFF',
  fontSize: 14,
  width: '100%',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};

const labelBase: React.CSSProperties = {
  fontSize: 11,
  letterSpacing: '0.08em',
  color: '#6B7280',
  fontWeight: 600,
  textTransform: 'uppercase',
  display: 'block',
  marginBottom: 8,
};

export default function Kontakt() {
  const [budget, setBudget] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="kontakt"
      className="section-py"
      style={{
        background:
          'radial-gradient(ellipse 70% 60% at 20% 50%, rgba(30,58,138,0.08) 0%, transparent 60%), #0A0A0A',
        color: '#FFFFFF',
      }}
    >
      <div className="container-x">
        <div className="kontakt-grid">
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
              PROJEKT STARTEN
            </span>
            <h2
              style={{
                fontSize: 'clamp(32px, 4vw, 52px)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
                marginTop: 16,
                marginBottom: 0,
              }}
            >
              Lassen Sie uns ein System bauen, das Kunden bringt.
            </h2>
            <p
              style={{
                fontSize: 16,
                color: '#9CA3AF',
                marginTop: 20,
                lineHeight: 1.6,
                maxWidth: 460,
              }}
            >
              Erzählen Sie uns kurz von Ihrem Vorhaben. Wir melden uns innerhalb
              von 24 Stunden mit einer ehrlichen Einschätzung.
            </p>

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '28px 0 0 0',
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
              }}
            >
              {BULLETS.map((b) => (
                <li
                  key={b}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}
                >
                  <CheckCircle2
                    size={18}
                    color="#1A6BFF"
                    style={{ flexShrink: 0, marginTop: 1 }}
                  />
                  <span style={{ fontSize: 15, color: '#D1D5DB' }}>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            style={{
              background: '#111111',
              border: '1px solid #1F1F1F',
              borderRadius: 20,
              padding: 36,
            }}
          >
            <div className="kontakt-form-grid">
              <FieldName label="NAME">
                <input type="text" placeholder="Max Mustermann" style={inputBase} required />
              </FieldName>
              <FieldName label="FIRMA">
                <input type="text" placeholder="Mustermann GmbH" style={inputBase} />
              </FieldName>
            </div>

            <FieldName label="E-MAIL" full>
              <input type="email" placeholder="max@beispiel.de" style={inputBase} required />
            </FieldName>

            <FieldName label="TELEFONNUMMER" full>
              <input type="tel" placeholder="+49 ..." style={inputBase} />
            </FieldName>

            <FieldName label="WEBSITE-LINK" full>
              <input type="url" placeholder="https://ihre-website.de" style={inputBase} />
            </FieldName>

            <FieldName label="PROJEKTBESCHREIBUNG" full>
              <textarea
                placeholder="Erzählen Sie uns kurz von Ihrem Vorhaben..."
                style={{ ...inputBase, minHeight: 100, resize: 'vertical' }}
              />
            </FieldName>

            <div style={{ marginTop: 16 }}>
              <span style={labelBase}>BUDGET</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {BUDGETS.map((b) => {
                  const active = budget === b;
                  return (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setBudget(active ? null : b)}
                      style={{
                        background: active ? '#FFFFFF' : '#1A1A1A',
                        color: active ? '#0A0A0A' : '#6B7280',
                        border: active ? '1px solid #FFFFFF' : '1px solid #2A2A2A',
                        borderRadius: 9999,
                        padding: '10px 20px',
                        fontSize: 13,
                        fontWeight: active ? 600 : 500,
                        cursor: 'pointer',
                        transition: 'background 0.2s, color 0.2s, border-color 0.2s',
                      }}
                    >
                      {b}
                    </button>
                  );
                })}
              </div>
            </div>

            <FieldName label="WIE HABEN SIE VON UNS GEHÖRT?" full>
              <div style={{ position: 'relative' }}>
                <select
                  style={{
                    ...inputBase,
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    paddingRight: 40,
                  }}
                  defaultValue={HEAR_OPTIONS[0]}
                >
                  {HEAR_OPTIONS.map((o) => (
                    <option key={o} value={o} style={{ background: '#1A1A1A' }}>
                      {o}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  color="#6B7280"
                  style={{
                    position: 'absolute',
                    right: 16,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                  }}
                />
              </div>
            </FieldName>

            <button
              type="submit"
              style={{
                marginTop: 20,
                width: '100%',
                background: '#FFFFFF',
                color: '#0A0A0A',
                borderRadius: 9999,
                padding: 18,
                fontWeight: 700,
                fontSize: 16,
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#F0F0F0')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#FFFFFF')}
            >
              {submitted ? '✓ Anfrage gesendet' : 'Projekt starten →'}
            </button>

            <p
              style={{
                fontSize: 12,
                color: '#4B5563',
                marginTop: 12,
                textAlign: 'center',
                marginBottom: 0,
              }}
            >
              Mit dem Absenden stimmst du unseren{' '}
              <a
                href="#"
                style={{
                  color: '#6B7280',
                  textDecoration: 'underline',
                }}
              >
                Datenschutzbestimmungen
              </a>{' '}
              zu.
            </p>
          </motion.form>
        </div>
      </div>

      <style jsx>{`
        .kontakt-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 64px;
          align-items: start;
        }
        .kontakt-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 16px;
        }
        @media (max-width: 1024px) {
          .kontakt-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        @media (max-width: 640px) {
          .kontakt-form-grid {
            grid-template-columns: 1fr;
          }
        }
        :global(input::placeholder),
        :global(textarea::placeholder) {
          color: #4b5563;
        }
        :global(input:focus),
        :global(textarea:focus),
        :global(select:focus) {
          border-color: #1a6bff !important;
          box-shadow: 0 0 0 3px rgba(26, 107, 255, 0.15) !important;
        }
      `}</style>
    </section>
  );
}

function FieldName({
  label,
  children,
  full,
}: {
  label: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <div style={{ marginBottom: full ? 16 : 0 }}>
      <span style={labelBase}>{label}</span>
      {children}
    </div>
  );
}
