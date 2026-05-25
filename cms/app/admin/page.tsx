'use client';
import { useEffect, useState } from 'react';

export default function AdminPage() {
  const [reports, setReports] = useState<any[]>([]);
  const [search, setSearch] = useState('');

  // DELETE
  const deleteReport = async (id: number) => {
    try {
      const res = await fetch(`http://127.0.0.1:3000/reports/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) return alert('Gagal hapus');

      setReports((prev) => prev.filter((r) => r.id !== id));
    } catch {
      alert('Error hapus');
    }
  };

  // UPDATE STATUS
  const updateStatus = async (id: number, currentStatus: string) => {
    let nextStatus = 'pending';

    if (currentStatus === 'pending') nextStatus = 'proses';
    else if (currentStatus === 'proses') nextStatus = 'selesai';
    else nextStatus = 'pending';

    try {
      const res = await fetch(`http://127.0.0.1:3000/reports/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: nextStatus }),
      });

      if (!res.ok) return alert('Gagal update');

      const updated = await res.json();

      setReports((prev) =>
        prev.map((r) => (r.id === id ? updated : r))
      );
    } catch {
      alert('Error update');
    }
  };

  // GET DATA
  useEffect(() => {
    fetch('http://127.0.0.1:3000/reports')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setReports(data);
        else if (Array.isArray(data.data)) setReports(data.data);
        else setReports([]);
      })
      .catch(() => setReports([]));
  }, []);

  // STAT
  const total = reports.length;
  const pending = reports.filter((r) => r.status === 'pending').length;
  const proses = reports.filter((r) => r.status === 'proses').length;
  const selesai = reports.filter((r) => r.status === 'selesai').length;

  // SEARCH
  const filteredReports = reports.filter((r) =>
    r.laporan?.toLowerCase().includes(search.toLowerCase()) ||
    r.nama?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* NAVBAR */}
      <div style={navbar}>
        <h2>AduinAja! Admin</h2>
      </div>

      {/* CONTENT */}
      <div style={container}>
        <h1 style={{ marginBottom: 20 }}>Dashboard Laporan</h1>

        {/* STAT */}
        <div style={statsContainer}>
          <div style={{ ...statCard, background: '#3b82f6' }}>
            <h3>Total</h3>
            <p>{total}</p>
          </div>

          <div style={{ ...statCard, background: '#f59e0b' }}>
            <h3>Pending</h3>
            <p>{pending}</p>
          </div>

          <div style={{ ...statCard, background: '#2563eb' }}>
            <h3>Proses</h3>
            <p>{proses}</p>
          </div>

          <div style={{ ...statCard, background: '#16a34a' }}>
            <h3>Selesai</h3>
            <p>{selesai}</p>
          </div>
        </div>

        {/* SEARCH */}
        <input
          placeholder="Cari laporan..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={searchInput}
        />

        {/* LIST */}
        {filteredReports.length === 0 ? (
          <p>Tidak ada laporan</p>
        ) : (
          filteredReports.map((r) => (
            <div
              key={r.id}
              style={card}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = 'scale(1.02)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = 'scale(1)')
              }
            >
              <h3>{r.kategori}</h3>
              <p style={{ color: '#666', fontSize: 13 }}>{r.lokasi}</p>

              <p><b>Nama:</b> {r.nama}</p>
              <p><b>Laporan:</b> {r.laporan}</p>

              {r.bukti && (
                <img
                  src={`http://127.0.0.1:3000/uploads/${r.bukti}`}
                  style={image}
                />
              )}

              <p>
                <b>Status:</b>{' '}
                <span style={statusStyle(r.status)}>
                  {r.status}
                </span>
              </p>

              <div style={{ marginTop: 10 }}>
                <button
                  onClick={() => updateStatus(r.id, r.status)}
                  style={btnPrimary}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.opacity = '0.8')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.opacity = '1')
                  }
                >
                  Ubah Status
                </button>

                <button
                  onClick={() => deleteReport(r.id)}
                  style={btnDanger}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.opacity = '0.8')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.opacity = '1')
                  }
                >
                  Hapus
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// STYLE
const navbar = {
  background: 'linear-gradient(to right, #1e3a8a, #2563eb)',
  color: 'white',
  padding: 15,
};

const container = {
  maxWidth: 900,
  margin: '30px auto',
  padding: 20,
  background: '#f9fafb',
  borderRadius: 12,
};

const statsContainer = {
  display: 'flex',
  gap: 20,
  marginBottom: 20,
};

const statCard = {
  flex: 1,
  padding: 15,
  borderRadius: 12,
  textAlign: 'center' as const,
  color: 'white',
  fontWeight: 'bold',
};

const searchInput = {
  marginBottom: 20,
  padding: 10,
  width: '100%',
  borderRadius: 8,
  border: '1px solid #ccc',
};

const card = {
  border: '1px solid #e5e7eb',
  borderRadius: 16,
  marginBottom: 20,
  padding: 20,
  backgroundColor: 'white',
  boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
  transition: '0.3s',
};

const image = {
  width: '100%',
  maxHeight: 220,
  objectFit: 'cover' as const,
  marginTop: 10,
  borderRadius: 12,
};

const btnPrimary = {
  marginRight: 10,
  padding: '8px 14px',
  backgroundColor: '#2563eb',
  color: 'white',
  border: 'none',
  borderRadius: 8,
  cursor: 'pointer',
  transition: '0.2s',
};

const btnDanger = {
  padding: '8px 14px',
  backgroundColor: '#ef4444',
  color: 'white',
  border: 'none',
  borderRadius: 8,
  cursor: 'pointer',
  transition: '0.2s',
};

const statusStyle = (status: string) => ({
  padding: '5px 12px',
  borderRadius: 20,
  fontSize: 12,
  fontWeight: 'bold',
  backgroundColor:
    status === 'pending'
      ? '#fef3c7'
      : status === 'proses'
      ? '#dbeafe'
      : '#dcfce7',
  color:
    status === 'pending'
      ? '#b45309'
      : status === 'proses'
      ? '#1d4ed8'
      : '#166534',
});