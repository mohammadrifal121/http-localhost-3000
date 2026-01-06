# SMAN 1 BOLANO Absen Digital

## Deskripsi Proyek
Aplikasi Absen Digital SMAN 1 BOLANO adalah aplikasi interaktif yang dirancang untuk memudahkan proses absensi siswa. Aplikasi ini memungkinkan guru untuk mencatat kehadiran siswa secara digital dengan tampilan yang menarik dan mudah digunakan.

## Fitur Utama
- **Halaman Absen**: Menampilkan identitas sekolah, informasi guru, dan tabel absensi siswa.
- **Tombol Hadir Semua**: Memungkinkan guru untuk menandai kehadiran semua siswa dengan mudah.
- **Tabel Siswa**: Menampilkan daftar siswa dengan NISN, nama, dan status kehadiran (Hadir, Izin, Sakit, Absen).
- **Tambah Siswa**: Fitur untuk menambahkan siswa baru langsung dari halaman absen.
- **Rekapan Kehadiran**: Halaman kedua yang menampilkan rekapan harian dan bulanan kehadiran siswa.
- **Ekspor ke Excel**: Memungkinkan pengguna untuk mengekspor data absensi ke format Excel.

## Struktur Proyek
```
sman1-bolano-absen
├── src
│   ├── index.html
│   ├── styles
│   │   ├── main.css
│   │   ├── attendance.css
│   │   └── report.css
│   ├── scripts
│   │   ├── app.js
│   │   ├── attendance.js
│   │   ├── report.js
│   │   └── utils.js
│   └── assets
│       └── logo.svg
├── data
│   └── students.json
├── package.json
└── README.md
```

## Cara Menggunakan
1. **Instalasi**: Clone repositori ini dan jalankan `npm install` untuk menginstal dependensi yang diperlukan.
2. **Menjalankan Aplikasi**: Gunakan `npm start` untuk menjalankan aplikasi di server lokal.
3. **Mengakses Aplikasi**: Buka browser dan akses `http://localhost:3000` untuk menggunakan aplikasi.

## Kontribusi
Kontribusi sangat diterima! Silakan buat pull request untuk menambahkan fitur atau memperbaiki bug.

## Lisensi
Proyek ini dilisensikan di bawah MIT License. Silakan lihat file LICENSE untuk informasi lebih lanjut.
