'use client';
import { useEffect, useState } from 'react';

export default function AdminPage() {
  const [reports, setReports] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [selectedReport, setSelectedReport] = useState<any>(null);
  const [filterStatus, setFilterStatus] = useState('semua');

  // DELETE
  const deleteReport = async (id: number) => {
  const yakin = confirm('Yakin ingin menghapus laporan?');

  if (!yakin) return;

  try {
    const res = await fetch(`http://127.0.0.1:3000/reports/${id}`, {
      method: 'DELETE',
    });

    if (!res.ok) {
      alert('Gagal hapus');
      return;
    }

    setReports((prev) => prev.filter((r) => r.id !== id));

    alert('Laporan berhasil dihapus');
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
  const filteredReports = reports.filter((r) => {
  const cocokSearch =
    r.laporan?.toLowerCase().includes(search.toLowerCase()) ||
    r.nama?.toLowerCase().includes(search.toLowerCase());

  const cocokStatus =
    filterStatus === 'semua' ||
    r.status === filterStatus;

  return cocokSearch && cocokStatus;
});

  return(
    <div style={page}>
    <div style={navbar}>
        <h2>AduinAja! Admin</h2>

        <div style={{ display: 'flex', gap: 10 }}>
          <button
            onClick={() => window.location.href = 'http://localhost:3002'}
            style={navButton}
          >
            ← Home
          </button>

          <button
            onClick={() => window.location.reload()}
            style={navButton}
          >
            🔄Refresh
          </button>

          <button
            onClick={() => {
              if (confirm('Yakin ingin logout?')) {
                localStorage.removeItem('admin');
                window.location.href = 'http://localhost:3001/login';
              }
            }}
            style={{
              ...navButton,
              backgroundColor: '#ef4444',
            }}
          >   
            Logout
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div style={container}>
        <h1
        style={{
          fontSize: 36,
          color: '#1e3a8a',
          marginBottom: 10,
        }}
      >
        Dashboard Laporan
      </h1>

      <p
        style={{
          color: '#666',
          marginBottom: 25,
        }}
      >
        Kelola dan pantau seluruh laporan masyarakat.
      </p>

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
        {/* filter status */}
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          style={{
            padding: 10,
            borderRadius: 8,
            border: '1px solid #ccc',
            marginBottom: 20,
            marginLeft: 10,
          }}
        >
          <option value="semua">Semua</option>
          <option value="pending">Pending</option>
          <option value="proses">Proses</option>
          <option value="selesai">Selesai</option>
        </select>

      {/* JUMLAH LAPORAN */}
        <p style={{ marginTop: 10, marginBottom: 15 }}>
          Menampilkan {filteredReports.length} laporan
        </p>

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

                <button
                onClick={() => setSelectedReport(r)}
                style={{
                  marginLeft: 10,
                  padding: '8px 14px',
                  backgroundColor: '#10b981',
                  color: 'white',
                  border: 'none',
                  borderRadius: 8,
                  cursor: 'pointer',
                }}
              >
                Lihat Detail
              </button>
              </div>
            </div>
          ))
        )}
      </div>
    {selectedReport && (
        <div style={modalOverlay}>
          <div style={modalContent}>
            <h2>Detail Laporan</h2>

            <p><b>Nama:</b> {selectedReport.nama}</p>
            <p><b>Laporan:</b> {selectedReport.laporan}</p>
            <p><b>Lokasi:</b> {selectedReport.lokasi}</p>
            <p><b>Kategori:</b> {selectedReport.kategori}</p>
            <p><b>Status:</b> {selectedReport.status}</p>

            {selectedReport.bukti && (
              <img
                src={`http://127.0.0.1:3000/uploads/${selectedReport.bukti}`}
                style={{
                  width: '100%',
                  borderRadius: 10,
                  marginTop: 10,
                }}
              />
            )}

            <button
              onClick={() => setSelectedReport(null)}
              style={btnClose}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// STYLE

const page = {
  minHeight: '100vh',
  background:
    'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #2563eb 100%)',
  padding: 30,
};

const navbar = {
  background: 'linear-gradient(to right, #1e3a8a, #2563eb)',
  color: 'white',
  padding: 15,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const navButton = {
  padding: '8px 12px',
  backgroundColor: '#ffffff22',
  color: 'white',
  border: 'none',
  borderRadius: 8,
  cursor: 'pointer',
};

const container = {
  maxWidth: 1100,
  margin: '30px auto',
  padding: 30,
  background: 'rgba(255,255,255,0.95)',
  backdropFilter: 'blur(15px)',
  borderRadius: 24,
  boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
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
 const modalOverlay = {
  position: 'fixed' as const,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalContent = {
  backgroundColor: 'white',
  padding: 25,
  borderRadius: 12,
  width: '90%',
  maxWidth: 600,
  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
};

const btnClose = {
  marginTop: 15,
  padding: '10px 16px',
  backgroundColor: '#ef4444',
  color: 'white',
  border: 'none',
  borderRadius: 8,
  cursor: 'pointer',
};
