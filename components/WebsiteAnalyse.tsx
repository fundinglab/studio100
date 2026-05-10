'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, CheckCircle2 } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function WebsiteAnalyse() {
  const [url, setUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);

  return (
    <section
      id="analyse"
      className="section-py"
      style={{ background: '#FAFAFA', textAlign: 'center' }}
    >
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
            KOSTENLOSE WEBSITE-ANALYSE
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
              Was verschenkt Ihre
            </span>
            <span style={{ color: '#C5C5C5', display: 'block' }}>
              Website gerade?
            </span>
          </h2>
          <p
            style={{
              fontSize: 16,
              color: '#6B7280',
              marginTop: 16,
              maxWidth: 560,
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: 1.6,
            }}
          >
            Geben Sie Ihre URL ein – Sie erhalten direkt hier eine kompakte,
            ehrliche Conversion-Analyse Ihrer Website. Kostenlos. Unverbindlich.
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
            borderRadius: 20,
            padding: 32,
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            maxWidth: 520,
            margin: '40px auto 0',
            textAlign: 'left',
          }}
        >
          <div
            style={{
              fontSize: 11,
              letterSpacing: '0.1em',
              color: '#9CA3AF',
              fontWeight: 600,
              textTransform: 'uppercase',
            }}
          >
            IHRE WEBSITE
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (url.trim()) setSubmitted(true);
            }}
          >
            <div style={{ position: 'relative', marginTop: 8 }}>
              <Globe
                size={16}
                color="#9CA3AF"
                style={{
                  position: 'absolute',
                  left: 14,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none',
                }}
              />
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder="https://ihre-website.ch"
                style={{
                  width: '100%',
                  height: 48,
                  border: focused ? '1.5px solid #1A6BFF' : '1.5px solid #EAEAEA',
                  borderRadius: 10,
                  padding: '0 16px 0 40px',
                  fontSize: 15,
                  background: '#FFFFFF',
                  color: '#0A0A0A',
                  boxShadow: focused ? '0 0 0 3px rgba(26,107,255,0.1)' : 'none',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{
                marginTop: 12,
                width: '100%',
                padding: 16,
                fontSize: 15,
              }}
            >
              {submitted ? '✓ Anfrage gesendet' : 'Website kostenlos analysieren →'}
            </button>
          </form>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 20,
              marginTop: 16,
            }}
          >
            {['100% kostenlos', 'Keine Anmeldung', 'Sofortiges Ergebnis'].map((t) => (
              <div
                key={t}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: 12,
                  color: '#6B7280',
                }}
              >
                <CheckCircle2 size={14} color="#10B981" />
                {t}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
