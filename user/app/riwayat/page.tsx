export default function RiwayatPage() {
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
          maxWidth: "900px",
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
            fontSize: "48px",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Riwayat Laporan
        </h1>

        <div
          style={{
            background: "#f8fafc",
            padding: "20px",
            borderRadius: "15px",
            marginBottom: "20px",
          }}
        >
          <h2 style={{ color: "#2563eb" }}>
            Laporan Jalan Rusak
          </h2>

          <p>Status: Diproses</p>
          <p>Tanggal: 13 Juni 2026</p>
        </div>

        <div
          style={{
            background: "#f8fafc",
            padding: "20px",
            borderRadius: "15px",
            marginBottom: "20px",
          }}
        >
          <h2 style={{ color: "#2563eb" }}>
            Laporan Lampu Jalan Mati
          </h2>

          <p>Status: Selesai</p>
          <p>Tanggal: 10 Juni 2026</p>
        </div>
  );
}