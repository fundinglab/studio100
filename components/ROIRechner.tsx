'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const formatEur = (n: number) =>
  new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(n);

const formatNum = (n: number) =>
  new Intl.NumberFormat('de-DE').format(Math.round(n));

export default function ROIRechner() {
  const [visitors, setVisitors] = useState(1500);
  const [cr, setCr] = useState(1.2);
  const [orderValue, setOrderValue] = useState(2500);

  const { currentRevenue, potentialRevenue, lostRevenue, lostPerYear } = useMemo(() => {
    const current = Math.round(visitors * (cr / 100) * orderValue);
    const potential = current * 3;
    const lost = potential - current;
    return {
      currentRevenue: current,
      potentialRevenue: potential,
      lostRevenue: lost,
      lostPerYear: lost * 12,
    };
  }, [visitors, cr, orderValue]);

  return (
    <section
      id="roi"
      className="section-py"
      style={{
        background:
          'radial-gradient(ellipse 60% 50% at 0% 0%, rgba(30, 58, 138, 0.13) 0%, transparent 70%), #0A0A0A',
        color: '#FFFFFF',
      }}
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
            ROI-RECHNER
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
            <span style={{ color: '#FFFFFF', display: 'block' }}>
              Wie viel Umsatz verlieren Sie
            </span>
            <span style={{ color: '#4B5563', display: 'block' }}>
              jeden Monat?
            </span>
          </h2>
          <p
            style={{
              fontSize: 16,
              color: '#9CA3AF',
              marginTop: 16,
              maxWidth: 540,
              lineHeight: 1.6,
            }}
          >
            Bewegen Sie die Regler. Sehen Sie sofort, welches Potenzial in einer
            optimierten Website steckt.
          </p>
        </motion.div>

        <div className="roi-grid" style={{ marginTop: 48 }}>
          {/* Left card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeIn}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="roi-card"
            style={{
              background: '#111111',
              border: '1px solid #1F1F1F',
              borderRadius: 20,
              padding: 36,
            }}
          >
            <div
              style={{
                fontSize: 11,
                letterSpacing: '0.1em',
                color: '#6B7280',
                fontWeight: 600,
                textTransform: 'uppercase',
              }}
            >
              IHRE ZAHLEN
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28, marginTop: 24 }}>
              <SliderBlock
                label="Monatliche Besucher"
                value={visitors}
                displayValue={formatNum(visitors)}
                min={100}
                max={10000}
                step={50}
                onChange={setVisitors}
              />
              <SliderBlock
                label="Conversion Rate"
                value={cr}
                displayValue={`${cr.toFixed(1)} %`}
                min={0.1}
                max={5}
                step={0.1}
                onChange={setCr}
              />
              <SliderBlock
                label="Ø Auftragswert"
                value={orderValue}
                displayValue={formatEur(orderValue)}
                min={500}
                max={20000}
                step={50}
                onChange={setOrderValue}
              />
            </div>
          </motion.div>

          {/* Right card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="roi-card"
            style={{
              background: '#111111',
              border: '1px solid #1F1F1F',
              borderRadius: 20,
              padding: 36,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                fontSize: 11,
                letterSpacing: '0.1em',
                color: '#6B7280',
                fontWeight: 600,
                textTransform: 'uppercase',
              }}
            >
              IHR ERGEBNIS PRO MONAT
            </div>

            <div style={{ marginTop: 24 }}>
              <div style={{ fontSize: 12, color: '#6B7280' }}>€ Aktueller Umsatz</div>
              <div style={{ fontSize: 36, fontWeight: 800, color: '#FFFFFF', marginTop: 6, lineHeight: 1 }}>
                {formatEur(currentRevenue)}
              </div>
            </div>

            <div style={{ marginTop: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#1A6BFF', fontSize: 12 }}>
                <TrendingUp size={14} />
                Potenzieller Umsatz (3× Conversion)
              </div>
              <div style={{ fontSize: 48, fontWeight: 800, color: '#1A6BFF', marginTop: 6, lineHeight: 1 }}>
                {formatEur(potentialRevenue)}
              </div>
            </div>

            {/* Progress bar */}
            <div style={{ marginTop: 20 }}>
              <div
                style={{
                  height: 6,
                  borderRadius: 3,
                  background: '#1F2937',
                  overflow: 'hidden',
                  display: 'flex',
                }}
              >
                <div
                  style={{
                    width: '33.33%',
                    background: '#1A6BFF',
                    borderRadius: 3,
                  }}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: 8,
                  fontSize: 11,
                  color: '#4B5563',
                }}
              >
                <span>Heute</span>
                <span>Potenzial</span>
              </div>
            </div>

            <div style={{ marginTop: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#EF4444', fontSize: 12 }}>
                <TrendingDown size={14} />
                Verlorener Umsatz pro Monat
              </div>
              <div
                style={{
                  fontSize: 40,
                  fontWeight: 800,
                  color: '#EF4444',
                  marginTop: 6,
                  lineHeight: 1,
                }}
              >
                –{formatEur(lostRevenue).replace(/^-/, '')}
              </div>
              <div style={{ fontSize: 12, color: '#9CA3AF', marginTop: 8 }}>
                Das entspricht {formatEur(lostPerYear)} pro Jahr.
              </div>
            </div>

            <a
              href="#analyse"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 28,
                background: '#FFFFFF',
                color: '#0A0A0A',
                width: '100%',
                borderRadius: 9999,
                padding: 16,
                fontWeight: 600,
                fontSize: 15,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Jetzt kostenlose Analyse anfordern →
            </a>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .roi-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        @media (max-width: 1024px) {
          .roi-grid {
            grid-template-columns: 1fr;
          }
          .roi-grid > :global(:nth-child(2)) {
            order: -1;
          }
        }
        @media (max-width: 640px) {
          :global(.roi-card) {
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}

function SliderBlock({
  label,
  value,
  displayValue,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  displayValue: string;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: 12,
        }}
      >
        <span style={{ fontSize: 14, color: '#9CA3AF' }}>{label}</span>
        <span style={{ fontSize: 14, fontWeight: 600, color: '#FFFFFF' }}>
          {displayValue}
        </span>
      </div>
      <input
        type="range"
        className="range-slider"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{
          background: `linear-gradient(to right, #1A6BFF 0%, #1A6BFF ${pct}%, #2A2A2A ${pct}%, #2A2A2A 100%)`,
        }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 8,
          fontSize: 11,
          color: '#4B5563',
        }}
      >
        <span>{formatNum(min)}</span>
        <span>{formatNum(max)}</span>
      </div>
    </div>
  );
}
