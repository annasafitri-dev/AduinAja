'use client';
import { useState } from 'react';

export default function Lapor() {

  const getCurrentLocation = () => {
  navigator.geolocation.getCurrentPosition(async (pos) => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;

    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );

      const data = await res.json();

      setLokasi(data.display_name);
    } catch {
      setLokasi(`${lat}, ${lng}`);
    }
  });
};

  const [nama, setNama] = useState('');
  const [laporan, setLaporan] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [kategori, setKategori] = useState('');
  const [bukti, setBukti] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('nama', nama);
      formData.append('laporan', laporan);
      formData.append('lokasi', lokasi);
      formData.append('kategori', kategori);
      if (bukti) formData.append('bukti', bukti);

      const res = await fetch('http://127.0.0.1:3000/reports', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error();

      alert('Laporan berhasil dikirim');
      setNama('');
      setLaporan('');
      setLokasi('');
      setKategori('');
      setBukti(null);
    } catch {
      alert('Gagal kirim laporan');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={container}>
      <div style={content}>

        <h1 style={title}>Form Pengaduan Masyarakat</h1>
        <p style={subtitle}>
          Lengkapi informasi laporan dengan benar agar dapat diproses oleh admin.
        </p>
        <form onSubmit={handleSubmit} style={form}>

          <input
            placeholder="Nama pelapor(opsional)"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            style={input}
          />

          <textarea
            placeholder="Tulis laporan..."
            value={laporan}
            onChange={(e) => setLaporan(e.target.value)}
            style={{ ...input, height: 120 }}
          />
          <p
          style={{
            textAlign: 'right',
            color: '#666',
            fontSize: 12,
          }}
          >
          {laporan.length}/500 karakter
          </p>

          <input
            placeholder="Lokasi kejadian"
            value={lokasi}
            onChange={(e) => setLokasi(e.target.value)}
            style={input}
          />

          <div
            style={{
              display: 'flex',
              gap: 10,
              marginTop: 10,
            }}
          >
            <button
              type="button"
              onClick={getCurrentLocation}
              style={{
                padding: '10px 15px',
                borderRadius: 8,
                border: 'none',
                background: '#2563eb',
                color: 'white',
                cursor: 'pointer',
              }}
              >
              Lokasi Saat Ini
            </button>

            <button
              type="button"
              onClick={() =>
                window.open(
                  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    lokasi
                  )}`,
                  '_blank'
                )
              }
              style={{
                padding: '10px 15px',
                borderRadius: 8,
                border: 'none',
                background: '#16a34a',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              Buka Google Maps
            </button>
          </div>

          {bukti && (
          <p style={{ marginTop: 8, color: '#2563eb' }}>
            File: {bukti.name}
          </p>
          )}

          <select
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
            style={input}
          >
            <option value="">Pilih kategori</option>
            <option value="lingkungan">Lingkungan</option>
            <option value="keamanan">Keamanan</option>
            <option value="infrastruktur">Infrastruktur</option>
          </select>

          <div style={uploadBox}>
          <input
            type="file"
            onChange={(e) => setBukti(e.target.files?.[0] || null)}
          />
        </div>

        {bukti && (
        <img
          src={URL.createObjectURL(bukti)}
          alt="preview"
          style={{
            width: '100%',
            marginTop: 10,
            borderRadius: 10,
            maxHeight: 250,
            objectFit: 'cover',
          }}
        />
      )}

          <button
          type="submit"
          disabled={loading}
          style={button}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow =
              '0 12px 25px rgba(37,99,235,0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow =
              '0 8px 20px rgba(37,99,235,0.3)';
          }}
        >
          {loading ? ' Mengirim...' : 'Kirim Laporan!'}
        </button>

        </form>

      </div>
    </div>
  );
}

const container = {
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background:
    'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #2563eb 100%)',
  padding: 30,
};

const content = {
  width: '100%',
  maxWidth: 800,
  background: 'rgba(255,255,255,0.95)',
  backdropFilter: 'blur(15px)',
  padding: 45,
  borderRadius: 24,
  boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
};

const title = {
  fontSize: 36,
  fontWeight: 700,
  color: '#1e3a8a',
  marginBottom: 10,
};

const subtitle = {
  marginBottom: 20,
  color: '#666',
};

const form = {
  display: 'flex',
  flexDirection: 'column' as const,
};

const label = {
  marginTop: 15,
  marginBottom: 5,
  fontWeight: 'bold',
  color: '#374151',
};

const input = {
  marginTop: 10,
  padding: 12,
  borderRadius: 8,
  border: '1px solid #ccc',
  fontSize: 14,
};

const uploadBox = {
  marginTop: 10,
  padding: 15,
  border: '2px dashed #93c5fd',
  borderRadius: 10,
  backgroundColor: '#eff6ff',
};

const button = {
  marginTop: 25,
  padding: 16,
  background:
    'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
  color: 'white',
  border: 'none',
  borderRadius: 12,
  fontSize: 16,
  fontWeight: 'bold',
  cursor: 'pointer',
  boxShadow: '0 10px 25px rgba(37,99,235,0.35)',
};