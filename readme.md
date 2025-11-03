# 🧩 RESTful API Best Practices — Express.js  
> Web Service Engineering — Praktikum 6  

[![Node.js](https://img.shields.io/badge/Node.js-v18+-green?logo=node.js)](https://nodejs.org)  
[![Express.js](https://img.shields.io/badge/Express.js-Framework-blue?logo=express)](https://expressjs.com)  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)  
[![Status](https://img.shields.io/badge/Status-Finished-success)]()  
[![Made by](https://img.shields.io/badge/Made%20by-Muhammad%20Raihan%20Azmi-blueviolet)]()  

---

## 🎯 1. Tujuan Praktikum

- Memahami penerapan prinsip RESTful pada Express.js  
- Menggunakan HTTP Method & Status Code yang tepat  
- Mengimplementasikan 7 RESTful Principles dalam API  
- Menangani validasi input & error secara konsisten  
- Menyusun dokumentasi API yang mudah diuji  

---

## ⚙️ 2. Tools & Teknologi

Proyek ini dibangun menggunakan **ekosistem Node.js modern** dengan kombinasi **framework minimalis**, **middleware kustom**, dan **alat pengembang profesional** untuk menjaga kualitas, kecepatan, serta kestabilan RESTful API.

---

### 🧩 Inti & Framework
<p align="left">
  <img src="https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js" alt="Node.js Badge"/>
  <img src="https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express" alt="Express.js Badge"/>
</p>

> 🔹 **Node.js** – Runtime JavaScript untuk server-side dengan performa tinggi.  
> 🔹 **Express.js** – Framework minimalis untuk membangun RESTful API yang modular dan efisien.

---

### 🧰 Peralatan Pengembangan & Logging
<p align="left">
  <img src="https://img.shields.io/badge/Nodemon-Hot_Reload-31A44D?style=for-the-badge&logo=nodemon" alt="Nodemon Badge"/>
  <img src="https://img.shields.io/badge/Morgan-HTTP_Logger-F48024?style=for-the-badge" alt="Morgan Badge"/>
  <img src="https://img.shields.io/badge/VS_Code-Editor-007ACC?style=for-the-badge&logo=visualstudiocode" alt="VS Code Badge"/>
</p>

> 🛠️ **Nodemon** – Menyegarkan server otomatis setiap ada perubahan kode.  
> 📜 **Morgan** – Mencatat setiap permintaan HTTP secara detail ke terminal.  
> 💻 **VS Code** – Editor kode andalan dengan dukungan linting, auto-complete, dan integrasi Git.

---

### 🧪 Pengujian API & Middleware Kustom
<p align="left">
  <img src="https://img.shields.io/badge/Postman-API_Testing-FF6C37?style=for-the-badge&logo=postman" alt="Postman Badge"/>
</p>

> 🧠 **Postman / Thunder Client** – Digunakan untuk menguji endpoint API, memeriksa validasi, serta simulasi respons server.

#### ⚡ Middleware Inti
- 🧾 **`validateProduct.js`** — Melakukan validasi field seperti `name` dan `price` sebelum data disimpan.  
- 🧯 **`errorHandler.js`** — Menangani error secara global dan mengembalikan struktur respons yang seragam.

---

> 💡 *Dengan kombinasi alat-alat ini, proyek RESTful API menjadi lebih efisien, mudah diuji, dan siap dikembangkan lebih lanjut dalam skala produksi.*

---

## 🧱 3. Arsitektur Singkat

1. **Client** → Postman / Thunder Client mengirim request HTTP  
2. **API Server (Express)** → menerima request & mengembalikan JSON  
3. **Router (`products.routes.js`)** → mengatur endpoint CRUD  
4. **Controller** → mengelola logika bisnis  
5. **Middleware Validasi** → memastikan input `name` & `price` valid  
6. **Error Handler** → menangani error 500  
7. **Data Layer (`products.data.js`)** → menyimpan data sementara  
8. **Logger (Morgan)** → mencatat semua aktivitas request  

---

## 📂 4. Struktur Folder

```bash
src/
├── app.js
├── data/
│   └── products.data.js
├── routes/
│   └── products.routes.js
├── middlewares/
│   ├── validateProduct.js
│   └── errorHandler.js
└── utils/
    └── apiResponse.js
```
---

## 5.tabel endpoint restful api

| Method | Endpoint              | Deskripsi                  | Status          |
|--------|-----------------------|----------------------------|-----------------|
| GET    | /api/products         | Ambil semua produk         | 200             |
| GET    | /api/products/:id     | Ambil produk by ID         | 200 / 404       |
| POST   | /api/products         |  Tambah produk baru        | 201 / 400       |
| PUT    | /api/products/:id     | Update full produk         | 200 / 400 / 404 |
| PATCH  | /api/products/:id     | Update sebagian produk     | 200 / 404       |
| DELETE | /api/products/:id     | Hapus produk               | 200 / 404       |
| GET    | /api/health           | Cek status API             | 200             |

---
## 🧩 6. Middleware

Middleware digunakan untuk menjaga **konsistensi, keamanan, dan keandalan** proses request–response pada API.  
Terdapat dua middleware utama pada proyek ini:

---

### 🔹 Validasi Produk (`validateProduct.js`)

Berfungsi untuk **memeriksa kelengkapan data produk** sebelum disimpan atau diperbarui.

**Fungsi utama:**
- Mengecek apakah field `name` dan `price` ada.  
- Menolak request jika data tidak lengkap atau tidak valid.  
- Mengembalikan status **400 — Bad Request** dengan pesan error yang jelas.

**Contoh respons ketika data tidak valid:**
```bash
{
  "success": false,
  "message": "Product name and price are required."
}
```

🔹 Penanganan Error (errorHandler.js)

Bertanggung jawab untuk menangani error yang tidak terduga (misalnya kesalahan server atau logic).

Fungsi utama:

- Menangkap error dari seluruh route.
- Menampilkan log error di terminal.
- Mengirim respons standar ke client agar format konsisten.

Contoh respons standar error server:
```bash
{
  "success": false,
  "message": "Server error"
}
```
-------
## 7. Hasil Uji API

Hasil pengujian menggunakan Postman / Thunder Client menunjukkan bahwa seluruh endpoint berfungsi dengan benar dan memberikan status code yang sesuai.

| Aksi               | Status Code           | Keterangan                 |
|--------------------|-----------------------|----------------------------|
| POST               | 201                   | created                    |
| PUT                | 200                   | Ok                         |
| PATCH              | 200                   | Ok                         |
| DELETE             | 200                   | ok                         |
| Validasi gagal     | 400                   | Bad Request                |
| Simulasi error     | 500                   | Internal Server Error      | 

-------
## 8.Penjelasan Singkat

Penerapan 7 RESTful Principles
API ini telah mengimplementasikan prinsip REST secara penuh:
1. Stateless – Setiap request tidak bergantung pada state sebelumnya.
2. Client-Server – Pemisahan tanggung jawab antara client dan server.
3. Cacheable – Respons dapat di-cache sesuai kebutuhan.
4. Uniform Interface – Endpoint konsisten dan mudah dipahami.
5. Layered System – Pemisahan lapisan (router, controller, middleware).
6. Cde on Demand (opsional) – Tidak digunakan dalam proyek ini.
7. Resource-Based – Endpoint berbasis kata benda (/products).

## Kesulitan yang Ditemui

Selama praktikum, beberapa tantangan yang dihadapi antara lain
• Route crash/test sempat salah posisi → menyebabkan 404 Not Found.
• Validasi input pada POST dan PUT memerlukan penyesuaian logic.
• Penanganan error 500 perlu middleware khusus.
• Menjaga struktur folder & middleware tetap konsisten.
• Menyatukan format respons agar seragam di seluruh endpoint.

## 9. Kesimpulan

RESTful API bukan hanya sekadar membuat endpoint CRUD, tetapi juga tentang bagaimana membangun desain API yang modular, aman, konsisten, dan mudah dipahami oleh client.
Dengan prinsip REST yang diterapkan secara menyeluruh, API menjadi lebih reliable, scalable, dan terstandarisasi.

## 10. Checklist Praktikum

✅ Endpoint CRUD lengkap\
✅ PATCH berfungsi\
✅ Middleware validasi aktif\
✅ Error handler berjalan\
✅ Status code konsisten\
✅ Dokumentasi selesai
