'use client';

import { useEffect } from 'react';

export default function AdminPage() {
  useEffect(() => {
    const isLogin = localStorage.getItem('admin');

    if (!isLogin) {
      window.location.href = '/login';
    }
  }, []);

  return (
    <div>
      <h1>Dashboard Admin</h1>

      <button
        onClick={() => {
          localStorage.removeItem('admin');
          window.location.href = '/login';
        }}
      >
        Logout
      </button>

      {/* Semua kode laporan, statistik, search, dll taruh di sini */}
    </div>
  );
}