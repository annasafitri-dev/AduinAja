AduinAja!
AduinAja! adalah aplikasi pelaporan sederhana berbasis web, di mana user bisa mengirim laporan dan admin dapat mengelola laporan tersebut.

Fitur Utama
User
Kirim laporan
Upload bukti (gambar)
Isi nama, pelaku, dan deskripsi laporan

Admin
Melihat semua laporan
Mengubah status laporan:
pending
proses
selesai
Menghapus laporan
Dashboard statistik:
Total laporan
Pending
Proses
Selesai

Tech Stack
Frontend
Next.js
React
CSS (inline styling)
Backend
NestJS
TypeORM
SQLite
Multer (upload file)

Struktur Folder
AduinAja/
├── api/        # Backend (NestJS)
├── cms/        # Admin (Next.js)
├── user/       # User website (Next.js)
⚙️ Cara Menjalankan Project
1. Backend (API)
Masuk ke folder:
cd api
Install dependency:
npm install
Jalankan:
npm run start:dev
API berjalan di:
http://localhost:3000
2. Admin (CMS)
Masuk ke folder:
cd cms
Install:
npm install
Run:
npm run dev
Akses:
http://localhost:3002/admin
3. User Website
Masuk ke folder:
cd user
Install:
npm install
Run:
npm run dev
Flow Status
Status laporan berjalan seperti ini:
pending → proses → selesai → (balik lagi pending)
📸 Upload Gambar
File bukti akan disimpan di:
/api/uploads
Dan diakses via:
http://localhost:3000/{filename}

Catatan
Pastikan backend jalan dulu sebelum frontend
Jika gambar tidak muncul:
cek folder uploads
cek URL gambar di browser

Future Improvement
Login admin (real auth, bukan localStorage)
Preview gambar sebelum uploa
UI lebih modern (Tailwind / component library)
Pagination laporan
Filter berdasarkan  status