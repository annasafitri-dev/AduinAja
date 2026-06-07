'use client';
import { useState, useEffect } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  useEffect(() => {
  console.log(localStorage.getItem('admin'));
  }, []); 
  // redirect kalau sudah login
  useEffect(() => {
    const isLogin = localStorage.getItem('admin');
    if (isLogin) {
      window.location.href = 'http://localhost:3001/admin';
    }
  }, []);

  const handleLogin = (e: any) => {
    e.preventDefault();

    if (email === 'admin' && password === '123456') {
      localStorage.setItem('admin', 'true');
      window.location.href = 'http://localhost:3001/admin';
    } else {
      alert('Email / password salah');
    }
  };

  return (
    <div style={container}>
      <form onSubmit={handleLogin} style={card}>
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <div style={{ fontSize: 50 }}></div>

        <h2
          style={{
            color: '#1e3a8a',
            marginBottom: 10,
          }}
        >
          Login Admin
        </h2>

        <p
          style={{
            color: '#666',
            fontSize: 14,
          }}
        >
          Masuk untuk mengelola laporan masyarakat.
        </p>
      </div>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={input}
        />

        <button type="submit" style={button}>
          Login
        </button>
      </form>
    </div>
  );
}

// STYLE
const container = {
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background:
    'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #2563eb 100%)',
  padding: 30,
};

const card = {
  background: 'rgba(255,255,255,0.95)',
  backdropFilter: 'blur(15px)',
  padding: 40,
  borderRadius: 24,
  width: '100%',
  maxWidth: 420,
  boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
};


const input = {
  width: '100%',
  padding: 10,
  marginTop: 10,
  borderRadius: 6,
  border: '1px solid #ccc',
};

const button = {
  width: '100%',
  marginTop: 20,
  padding: 14,
  background:
    'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
  color: 'white',
  border: 'none',
  borderRadius: 10,
  fontWeight: 'bold',
  cursor: 'pointer',
};