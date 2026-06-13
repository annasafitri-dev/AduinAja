export default function FAQPage() {
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
            textAlign: "center",
            fontSize: "48px",
            marginBottom: "40px",
          }}
        >
          FAQ
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
            Bagaimana cara membuat laporan?
          </h2>

          <p>
            Pengguna dapat membuat laporan melalui halaman laporan dengan
            mengisi data yang diperlukan dan mengunggah bukti berupa gambar.
          </p>
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
            Bagaimana cara melihat status laporan?
          </h2>

          <p>
            Status laporan dapat dilihat pada halaman Riwayat Laporan yang
            menampilkan perkembangan laporan yang telah dikirim.
          </p>
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
            Bagaimana cara mengedit profil?
          </h2>

          <p>
            Pengguna dapat membuka halaman Profil Saya dan menggunakan tombol
            Edit Profil untuk memperbarui informasi akun.
          </p>
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
            Bagaimana cara menghubungi admin?
          </h2>

          <p>
            Pengguna dapat menghubungi admin melalui email
            info@aduinaja.com atau nomor telepon +62 812-3456-7890.
          </p>
        </div>
      </div>
    </div>  
  );
}