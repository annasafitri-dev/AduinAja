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

        <hr
          style={{
            margin: '10px 0',
            border: '2px solid #e5e7eb',
          }}
        />

        <p style={subtitle}>
          Platform pengaduan masyarakat untuk menyampaikan laporan secara cepat, aman, dan terstruktur.
        </p>

        <div style={buttonContainer}>
          <Link href="/lapor">
            <button style={buttonPrimary}>Buat Laporan</button>
          </Link>

          <Link href="http://localhost:3001/login">
            <button style={buttonSecondary}>Login Admin</button>
          </Link>
        </div>
      </div>

      <footer
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          padding: '40px',
          background: '#1e3a8a',
          color: 'white',
          marginTop: '50px',
          width: '100%',
        }}
      >
        <div>
          <h3>
            <a
              href="/about"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              Tentang Kami
            </a>
          </h3>
        </div>

        <div>
          <h3>
            <a
              href="/contact"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              Kontak
            </a>
          </h3>
        </div>

        <div>
          <h3>Ikuti Kami</h3>
          <p>📺 KemkomdigiTV</p>
          <p>📱 Kemkomdigi</p>
          <p>📷 @kemkomdigi</p>
        </div>
      </footer>
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
  flexDirection: 'column' as const,
  alignItems: 'center',
  background:
    'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #2563eb 100%)',
};

const content = {
  textAlign: 'center' as const,
  maxWidth: 850,
  width: '100%',
  marginTop: 80,
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
  padding: '16px 32px',
  background: 'transparent',
  color: 'white',
  border: '2px solid rgba(255,255,255,0.5)',
  borderRadius: 12,
  fontSize: 16,
  fontWeight: 'bold',
  cursor: 'pointer',
};

const flow = {
  display: 'flex',
  justifyContent: 'center',
  gap: 20,
  flexWrap: 'wrap' as const,
  marginTop: 40,
  fontSize: 15,
  color: '#cbd5e1',
};