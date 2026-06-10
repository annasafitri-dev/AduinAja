export default function AboutPage() {
  return (
    <div
        style={{
            maxWidth: "900px",
            margin: "50px auto",
            padding: "40px",
            background: "white",
            borderRadius: "20px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            lineHeight: "1.8",
            fontSize: "18px",
            color: "#475569",
            fontFamily: "Arial, sans-serif",
        }}
        >
      <h1
        style={{
            color: "#1e3a8a",
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "36px",
            fontWeight: "bold",
            }}
            >
            Tentang Kami
        </h1>

        <p>
            <b>AduinAja!</b> merupakan platform pengaduan masyarakat berbasis digital.
        </p>
        <p>
             Memudahkan masyarakat dalam menyampaikan laporan secara cepat dan aman.
        </p>
        
        <div
        style={{
            background: "#f8fafc",
            padding: "20px",
            borderRadius: "15px",
            marginTop: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
        >
        <h2
            style={{
            color: "#2563eb",
            fontSize: "28px",
            fontWeight: "bold",
            marginBottom: "15px",
            }}
        >
            Misi
        </h2>

        <ul style={{ color: "#475569" }}>
            <li>Memberikan layanan pengaduan yang mudah.</li>
            <li>Meningkatkan partisipasi masyarakat.</li>
            <li>Mendukung tata kelola yang transparan.</li>
        </ul>
        </div>

        <div
        style={{
            background: "#eff6ff",
            padding: "20px",
            borderRadius: "15px",
            marginTop: "20px",
            borderLeft: "5px solid #2563eb",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
        >
        <h2
        style={{
            color: "#2563eb",
            fontSize: "28px",
            fontWeight: "bold",
            marginBottom: "15px",
        }}
        >
            Motto
        </h2>

        <p
            style={{
            color: "#1e3a8a",
            fontStyle: "italic",
            textAlign: "center",
            fontSize: "18px",
            margin: 0,
            }}
        >
            "Suara Masyarakat, Solusi Bersama."
        </p>
        </div>

        <div
            style={{
                background: "#eff6ff",
                padding: "20px",
                borderRadius: "12px",
                marginTop: "20px",
            }}
            >
            <p
                style={{
                fontStyle: "italic",
                color: "#1e3a8a",
                }}
            >
                Bersama masyarakat, kami menghadirkan layanan pengaduan yang transparan,
                cepat, dan terpercaya.
            </p>
        </div>

        <h2 style={{ color: "#2563eb", marginTop: "30px" }}>
        Nilai Kami</h2>

        <ul>
            <li>Transparansi</li>
            <li>Kecepatan Pelayanan</li>
            <li>Keamanan Data</li>
            <li>Kemudahan Akses</li>
        </ul>

        
        <h2
        style={{
            color: "#2563eb",
            fontSize: "28px",
            fontWeight: "bold",
            marginBottom: "15px",
        }}
        >
            Keunggulan AduinAja!
        </h2>

        <ul>
            <li>Pelaporan mudah dan cepat.</li>
            <li>Dapat diakses kapan saja.</li>
            <li>Data laporan tersimpan dengan aman.</li>
            <li>Mendukung pelayanan publik yang lebih baik.</li>
        </ul>

        <h2 style={{ color: "#2563eb", marginTop: "30px" }}>
        Hubungi Kami
        </h2>

            <p>Email : info@aduinaja.com</p>
            <p>Telepon : +62 812-3456-7890</p>

        <hr style={{ margin: "30px 0" }} />

        <div
        style={{
            marginTop: "40px",
            padding: "30px",
            background: "linear-gradient(to right, #1e3a8a, #2563eb)",
            borderRadius: "20px",
            color: "white",
            textAlign: "center",
        }}
        >
        <h2>Pelayanan Publik yang Lebih Baik</h2>

        <p>
            AduinAja hadir untuk membantu masyarakat menyampaikan aspirasi dan
            pengaduan secara cepat, aman, dan terpercaya.
        </p>
        </div>
        <p
            style={{
                textAlign: "center",
                color: "#64748b",
            }}
            >
            © 2026 AduinAja! - Sistem Pengaduan Masyarakat
        </p>

    </div>
  );
}