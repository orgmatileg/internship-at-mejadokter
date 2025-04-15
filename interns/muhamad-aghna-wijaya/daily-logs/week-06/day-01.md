# Daily Learning Log 17-03-2025

## Today's Focus

- Primary key.
- Where Clause.
- Update Data.
- Alias.

## What I Learned

### 1. Primary key.
- Saat kita membuat tabel, idealnya tiap tabel memiliki Primary Key.
- Primary key adalah sebuah kolom yang kita tunjuk sebagai id dari tabel tersebut.
- Primary key adalah identitas untuk tiap baris data di dalam tabel.
- Primary key harus unik, tidak boleh ada data dengan primary key yang sama.
- Kita bisa menunjuk kolom yang akan kita jadikan primary key.

   1. **Primary Key di Multiple Column**
    - Kita bisa membuat primary key dengan kombinasi beberapa kolom.
    - Namun disarankan untuk tetap menggunakan satu kolom ketika membuat primary key.
    - Kecuali ada kasus khusus, seperti membuat tabel yang berelasi MANY TO MANY.

### 2. Where Clause.
- Saat mengambil data menggunakan perintah SQL SELECT, kadang kita ingin melakukan pencarian data.
- Misal, kita ingin mengambil data barang yang harganya 1jt, atau mengambil data barang yang quantity nya 0 (stok nya kosong).
- Hal ini bisa kita lakukan dengan WHERE clause setelah perintah SELECT.

### 3. Update data.
- Untuk mengubah data di tabel, kita bisa menggunakan perintah SQL UPDATE.
- Saat menggunakan SQL UPDATE, kita harus memberi tahu data mana yang akan di update dengan WHERE clause.
- Hati-hati ketika meng-update data di table, jika sampai WHERE clause nya salah, bisa-bisa kita malah meng-update seluruh data di tabel.
- Untuk update, kita harus beritahu, kolom mana yang akan di update.

### 4. Delete data.
- Setelah kita tahu cara menambah, mengubah dan mengambil data di tabel, terakhir yang perlu kita ketahui adalah menghapus data di table.
- Untuk menghapus data di table, kita bisa menggunakan perintah SQL DELETE.
- Perintah SQL DELETE sama seperti UPDATE, kita perlu memberi tahu data mana yang akan di hapus dengan WHERE clause.
- Dan hati-hati, jangan sampai salah menentukan WHERE clause, karena jika salah, bisa-bisa kita akan menghapus seluruh data di table.

### 5. Alias.
- MySQL memiliki fitur untuk melakukan alias untuk kolom dan tabel
- Alias berguna jika kita ingin mengubah nama kolom atau nama tabel ketika melakukan SELECT data
- Mungkin saat ini alias untuk tabel tidak terlalu terlihat gunanya, tapi nanti ketika kita telah mempelajari tentang JOIN, maka fitur alias untuk tabel sangat berguna sekali



## Resources Used 📚

- [Belajar database](https://youtu.be/xYBclb-sYQ4?si=jVKlx96naapzUJWd)
