'use client';
import { useState } from 'react';

export default function Lapor() {
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

        <h1 style={title}>Buat Laporan</h1>
        <p style={subtitle}>
          Sampaikan laporan Anda dengan lengkap agar dapat segera ditindaklanjuti.
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
  'linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #60a5fa 100%)',
};

const content = {
  width: '100%',
  maxWidth: 600,
  background: 'white',
  padding: 30,
  borderRadius: 12,
  boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
};

const title = {
  fontSize: 28,
  marginBottom: 5,
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
  padding: '14px 20px',
  background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
  color: 'white',
  border: 'none',
  borderRadius: 12,
  fontSize: 16,
  fontWeight: 'bold',
  cursor: 'pointer',
  boxShadow: '0 8px 20px rgba(37,99,235,0.3)',
  transition: 'all 0.3s ease',
};