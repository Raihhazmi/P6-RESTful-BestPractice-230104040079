# Web Service Engineering -- Praktikum 6

RESTful API Best Practices (Express.js)

Mahasiswa: Muhammad Raihan Azmi\
NIM: 230104040079\
Kelas: TI23B\
Tanggal Praktikum: 03-11-2025

## 1. Tujuan Praktikum

• Memahami penerapan prinsip RESTful pada Express.\
• Menggunakan HTTP Method & Status Code yang tepat.\
• Mengimplementasikan 7 RESTful Principles dalam API.\
• Menangani validasi input & error secara konsisten.\
• Menyiapkan dokumentasi API yang mudah diuji.

## 2. Tools & Teknologi

• Node.js 18+\
• Express.js\
• Nodemon\
• Postman / Thunder Client\
• VS Code\
• Morgan (logging)\
• Middleware: validateProduct.js, errorHandler.js

## 3. Arsitektur Singkat

• Client (Postman / Thunder Client) → mengirim request HTTP.\
• API Server (Express) → menerima request dan merespons JSON.\
• Router (products.routes.js) → berisi endpoint CRUD RESTful.\
• Controller → logika mengambil, menambah, mengubah, menghapus data.\
• Middleware Validasi → menolak request yang kurang name atau price.\
• Middleware Error Handler → menangani error tak terduga (500).\
• Data Layer (products.data.js) → data sementara berbasis array.\
• Logging (morgan) → mencatat setiap aktivitas request server.

## 4. Struktur Folder

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

## 5. Tabel Endpoint RESTful API

| Method | Endpoint              | Deskripsi                  | Status          |
|--------|-----------------------|----------------------------|-----------------|
| GET    | /api/products         | Ambil semua produk         | 200             |
| GET    | /api/products/:id     | Ambil produk by ID         | 200 / 404       |
| POST   | /api/products         |  Tambah produk baru        | 201 / 400       |
| PUT    | /api/products/:id     | Update full produk         | 200 / 400 / 404 |
| PATCH  | /api/products/:id     | Update sebagian produk     | 200 / 404       |
| DELETE | /api/products/:id     | Hapus produk               | 200 / 404       |
| GET    | /api/health           | Cek status API             | 200             |

## 6. Middleware

### Validasi Product (validateProduct.js)

• Mengecek field name dan price\
• Jika invalid → 400 Bad Request

### Error Handler (errorHandler.js)

• Menangkap error tak terduga\
• Mengembalikan respons standar:

    {
      "success": false,
      "message": "Server error"
    }

## 7. Hasil Uji API

• POST → 201 Created\
• PUT → 200 OK\
• PATCH → 200 OK\
• DELETE → 200 OK\
• Validasi gagal → 400 Bad Request\
• Simulasi error → 500 Internal Server Error

## 8. Penjelasan Singkat

### Apakah sudah menerapkan 7 RESTful Principles?

Ya. API telah menerapkan: 1. Stateless\
2. Client-Server\
3. Cacheable\
4. Uniform Interface\
5. Layered System\
6. Code on Demand (opsional, dilewati)\
7. Resource-Based (endpoint menggunakan kata benda)

### Kesulitan yang Ditemui

• Route crash/test sempat salah posisi sehingga 404\
• Validasi input POST/PUT\
• Penanganan error 500\
• Konsistensi struktur folder & middleware\
• Menjaga format respons tetap seragam

## 9. Kesimpulan

RESTful API bukan hanya CRUD, tetapi desain API yang rapi, modular,
aman, dan mudah dipahami oleh client.

## 10. Checklist Praktikum

✅ Endpoint CRUD lengkap\
✅ PATCH berfungsi\
✅ Middleware validasi aktif\
✅ Error handler berjalan\
✅ Status code konsisten\
✅ Dokumentasi selesai
