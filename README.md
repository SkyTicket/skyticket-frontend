<div align="center">
  <img src="./public/assets/icons/logo1.svg" alt="Flight Booking App Banner" width="600px">
</div>

# Front-End - SkyTicket (Aplikasi Pemesanan Tiket Pesawat)

Selamat datang di repositori Front-End dari SkyTicket! Aplikasi pemesanan tiket pesawat berbasis web yang memungkinkan pengguna untuk mencari, membandingkan, dan memesan tiket pesawat dengan mudah dan aman. Aplikasi ini juga ramah pengguna dan mengintegrasikan fitur-fitur penting untuk memastikan pengalaman yang lancar bagi pengguna.

---

## 🚀 Fitur Utama

1. **Home Page**:
   - Mencari penerbangan dengan memilih destinasi, tanggal perjalanan, jumlah penumpang, dan kelas.
   - Integrasi destinasi favorit untuk pemilihan penerbangan yang cepat.

2. **Authentication Page (Login, Register, Reset Password, dan OTP)**:
   - Masuk ke akun pengguna menggunakan email dan password yang didukung oleh validasi.
   - Registrasi aman dengan kolom wajib seperti nama, email, nomor telepon, dan kata sandi.
   - Verifikasi email menggunakan kode OTP (6 digit) untuk memastikan keamanan akun pengguna.
   - Menyediakan opsi untuk pengguna yang lupa kata sandi dengan tautan untuk membuat kata sandi baru.

4. **Ticket List Page**:
   - Jelajahi penerbangan yang tersedia berdasarkan hasil pencarian pengguna.
   - Filter dan urutkan opsi untuk harga, durasi, dan maskapai penerbangan.

5. **Order Ticket Page**:
   - Menyimpan pesanan yang terkonfirmasi di akun pengguna.

6. **Payment Page**:
   - Pembayaran untuk tiket penerbangan dengan berbagai metode.

7. **Order History Page**:
   - Melihat riwayat pemesanan tiket pengguna.
   - Detail pemesanan dapat diunduh.

8. **Notification Page**:
   - Notifikasi terkait pembaruan pemesanan, pembayaran, atau promosi.
   - Filter berdasarkan jenis notifikasi.

9. **Account Page**:
   - Pengelolaan informasi akun pengguna.
   - Opsi untuk mengubah detail akun atau menghapus akun.

10. **Responsive Design**:
   - Berfungsi penuh di platform desktop dan mobile.

---

## 🌐 Routing Aplikasi

Routing dengan akses bebas (*dapat diakses oleh semua pengguna*):
- **Home Page** (`/`): Halaman utama untuk mencari penerbangan.
- **OTP Page** (`/otp`): Halaman untuk verifikasi email dengan kode OTP.
- **Login Page** (`/login`): Halaman untuk login ke akun pengguna.
- **Register Page** (`/register`): Halaman untuk registrasi pengguna baru.
- **Ticket List Page** (`/ticket-list`): Halaman untuk melihat daftar penerbangan yang tersedia.
- **Reset Password Page** (`/reset-password`): Halaman untuk mengatur ulang kata sandi.
- **Reset Password Request Page** (`/reset-password/request`): Halaman untuk meminta pengaturan ulang kata sandi.
- **Not Found Page** (`*`): Halaman fallback untuk rute yang tidak ditemukan.

Routing dengan akses terbatas (*hanya untuk pengguna yang sudah login*):
- **Order Ticket Page** (`/order-ticket`): Halaman untuk memesan tiket penerbangan.
- **Payment Page** (`/payment`): Halaman untuk melakukan pembayaran tiket.
- **Order History Page** (`/history`): Halaman untuk melihat riwayat pemesanan tiket.
- **Account Page** (`/account`): Halaman untuk mengelola akun pengguna.
- **Notification Page** (`/notification`): Halaman untuk melihat notifikasi terkait pemesanan.

---

## 🛠️ Tech Stack

### Front-End:
- **Vite**
- **React.js**
- **Tailwind CSS**

### Peralatan Lainnya:
- **Axios**
- **JWT**
- **Js-cookie**

---

## 📂 Struktur Folder

```
📦 skyticket-frontend
├── 📁 public
│   ├── 📁 assets
│   │   ├── 📁 icons
│   │   ├── 📁 images
│   │   └── 📄 vite.svg
├── 📁 src
│   ├── 📁 api
│   ├── 📁 components
│   │   ├── 📁 Elements
│   │   ├── 📁 Fragments
│   │   └── 📁 Styles
│   ├── 📁 contexts
│   ├── 📁 hooks
│   ├── 📁 pages
│   ├── 📁 services
│   ├── 📄 App.css
│   ├── 📄 App.jsx
│   ├── 📄 index.css
│   └── 📄 main.jsx
├── 📄 .env.example
├── 📄 .gitignore
├── 📄 .prettierrc
├── 📄 eslint.config.js
├── 📄 index.html
├── 📄 package-lock.json
├── 📄 package.json
├── 📄 postcss.config.js
├── 📄 README.md
├── 📄 tailwind.config.js
└── 📄 vite.config.js
```

---

## 🔧 Instalasi

1. Klon repositori dari GitHub:

   ```bash
   git clone https://github.com/SkyTicket/skyticket-frontend
   ```

2. Navigasi ke direktori proyek:

   ```bash
   cd skyticket-frontend
   ```

3. Instal dependensi:

   ```bash
   npm install
   ```

4. Konfigurasi variabel lingkungan:

   - Buat file `.env` di dalam folder `skyticket-frontend` dengan isi berikut:
     ```env
     VITE_BACKEND_URL = your_backend_url
     ```

5. Jalankan aplikasi untuk pengembangan lokal:

   ```bash
   npm run dev
   ```

7. Buka aplikasi di browser Anda:

   ```
   http://localhost:5173
   ```

---

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan ikuti langkah berikut:

1. Fork repositori ini.
2. Buat branch baru (git checkout -b feature/fitur-anda).
3. Commit perubahan Anda (git commit -m 'Tambahkan pesan Anda').
4. Push ke branch (git push origin feature/fitur-anda).
5. Buka pull request.

---

## 👥 Tim Pengembang

Terima kasih kepada semua anggota yang telah membantu mengembangkan aplikasi ini:

- **Aqsa Prima Cahya**: [Aqsaprima](https://github.com/Aqsaprima)
- **Jetro Sulthan Fatih Nurrafi**: [JetroSulthan](https://github.com/JetroSulthan)
- **Muhammad Rafif Ramadhansyah**: [raaapiiip](https://github.com/raaapiiip)
- **Rizal Firmansyah**: [rizallfrm](https://github.com/rizallfrm)

Happy Coding! ✈️
