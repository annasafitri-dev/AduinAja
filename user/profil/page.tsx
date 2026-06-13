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
