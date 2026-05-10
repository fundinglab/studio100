'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Problem', href: '#problem' },
  { label: 'ROI-Rechner', href: '#roi' },
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Case Studies', href: '#referenzen' },
  { label: 'Angebot', href: '#angebot' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          height: 72,
          width: '100%',
          background: scrolled ? 'rgba(255,255,255,0.8)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid #EAEAEA' : '1px solid transparent',
          transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
        }}
      >
        <div
          className="container-x"
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: '#0A0A0A',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              S
            </div>
            <span style={{ fontWeight: 700, fontSize: 18, color: '#0A0A0A' }}>
              Studio100
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="navbar-desktop" style={{ display: 'flex', gap: 32 }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: '#6B7280',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#0A0A0A')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right CTA / Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <a
              href="#analyse"
              className="btn-primary navbar-cta"
              style={{ padding: '12px 22px', fontSize: 14 }}
            >
              Analyse starten
            </a>
            <button
              aria-label="Menu"
              onClick={() => setMobileOpen(true)}
              className="navbar-hamburger"
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 8,
                color: '#0A0A0A',
                display: 'none',
              }}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: '#0A0A0A',
            zIndex: 200,
            display: 'flex',
            flexDirection: 'column',
            padding: 24,
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 56,
            }}
          >
            <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: 18 }}>
              Studio100
            </span>
            <button
              aria-label="Close"
              onClick={() => setMobileOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#FFFFFF',
                cursor: 'pointer',
              }}
            >
              <X size={24} />
            </button>
          </div>
          <nav
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
              marginTop: 48,
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{ color: '#FFFFFF', fontSize: 24, fontWeight: 600 }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#analyse"
              onClick={() => setMobileOpen(false)}
              className="btn-primary"
              style={{
                marginTop: 24,
                background: '#FFFFFF',
                color: '#0A0A0A',
                width: 'fit-content',
              }}
            >
              Analyse starten
            </a>
          </nav>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          :global(.navbar-desktop) {
            display: none !important;
          }
          :global(.navbar-cta) {
            display: none !important;
          }
          :global(.navbar-hamburger) {
            display: inline-flex !important;
          }
        }
      `}</style>
    </>
  );
}
