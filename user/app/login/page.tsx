'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  // redirect kalau sudah login
  useEffect(() => {
    const isLogin = localStorage.getItem('admin');
    if (isLogin) {
      window.location.href = 'http://localhost:3002/admin';
    }
  }, []);

  const handleLogin = (e: any) => {
    e.preventDefault();

    if (email === 'admin' && password === '123456') {
      localStorage.setItem('admin', 'true');
      window.location.href = 'http://localhost:3002/admin';
    } else {
      alert('Email / password salah');
    }
  };

  return (
    <div style={container}>
      <form onSubmit={handleLogin} style={card}>
        <h2 style={{ textAlign: 'center' }}>Login Admin</h2>

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
  background: '#e0e7ff',
};

const card = {
  background: 'white',
  padding: 30,
  borderRadius: 10,
  width: 300,
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
  marginTop: 15,
  padding: 10,
  backgroundColor: '#2563eb',
  color: 'white',
  border: 'none',
  borderRadius: 6,
  cursor: 'pointer',
};