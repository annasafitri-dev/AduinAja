"use client";

import { useState } from "react";

export default function ProfilPage() {
  const [nama, setNama] = useState("Anna Safitri");
  const [email, setEmail] = useState("annasafitri@gmail.com");
  const [telepon, setTelepon] = useState("081234567890");

  const handleSimpan = () => {
    alert("Profil berhasil diperbarui!");
  };
  
export default function ProfilPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #2563eb)",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(10px)",
          borderRadius: "24px",
          padding: "50px",
        }}
      >
        <h1
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "48px",
            marginBottom: "40px",
          }}
        >
          Profil Pengguna
        </h1>

        <div
          style={{
            background: "#f8fafc",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          }}
        >
          <h2
            style={{
              color: "#2563eb",
              marginBottom: "20px",
            }}
          >
            Informasi Profil
          </h2>

          <p>
            <b>Nama Pengguna :</b> Anna Safitri
          </p>

          <p>
            <b>Email :</b> annasafitri@gmail.com
          </p>

          <p>
            <b>Nomor Telepon :</b> 081234567890
          </p>

            <button
            style={{
              marginTop: "20px",
              background: "#2563eb",
              color: "white",
              padding: "12px 25px",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Edit Profil
          </button>
        </div>
      </div>
    </div>
  );
}
