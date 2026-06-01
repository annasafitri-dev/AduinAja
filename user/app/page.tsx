'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div style={container}>
      <div style={content}>
        
        <div style={badge}>
        Platform Pengaduan Digital
        </div>

        <h1 style={title}>AduinAja!</h1>

        <p style={subtitle}>
          Platform pengaduan masyarakat untuk menyampaikan laporan secara cepat, aman, dan terstruktur.
        </p>

        <div style={buttonContainer}>
          <Link href="/lapor">
            <button style={buttonPrimary}>Buat Laporan</button>
          </Link>

          <Link href="/login">
            <button style={buttonSecondary}>Login Admin</button>
          </Link>
        </div>

      </div>
    </div>
  );
}

const badge = {
  display: 'inline-block',
  padding: '8px 16px',
  background: 'rgba(255,255,255,0.2)',
  borderRadius: 20,
  marginBottom: 20,
  fontSize: 14,
  backdropFilter: 'blur(10px)',
};

const container = {
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background:
    'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #2563eb 100%)',
  padding: 20,
};

const content = {
  textAlign: 'center' as const,
  maxWidth: 850,
  padding: 50,
  color: 'white',
  background: 'rgba(255,255,255,0.08)',
  backdropFilter: 'blur(20px)',
  borderRadius: 24,
  border: '1px solid rgba(255,255,255,0.15)',
  boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
};
const title = {
  fontSize: 68,
  fontWeight: 800,
  marginBottom: 15,
  letterSpacing: '-2px',
};

const subtitle = {
  fontSize: 22,
  marginBottom: 40,
  lineHeight: 1.8,
  color: '#e2e8f0',
  maxWidth: 700,
  margin: '0 auto 40px auto',
};

const buttonContainer = {
  display: 'flex',
  justifyContent: 'center',
  gap: 15,
  marginBottom: 40,
};

const buttonPrimary = {
  padding: '16px 32px',
  background: '#ffffff',
  color: '#1e40af',
  border: 'none',
  borderRadius: 12,
  fontSize: 16,
  fontWeight: 'bold',
  cursor: 'pointer',
  boxShadow: '0 10px 30px rgba(255,255,255,0.25)',
};

const buttonSecondary = {
  padding: '12px 25px',
  backgroundColor: 'transparent',
  color: 'white',
  border: '1px solid white',
  borderRadius: 8,
  fontSize: 16,
  cursor: 'pointer',
};

const flow = {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: 14,
  opacity: 0.9,
};