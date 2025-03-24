# Daily Learning Log 07-03-2025

## Today's Focus

- Tipe data.

## What I Learned

### 1. Tipe Data date dan time.
- Selain tipe data Number dan String, biasanya kadang kita sering menyimpan data waktu atau tanggal.
- Sebenarnya bisa kita gunakan String untuk menyimpan data waktu atau tanggal, namun itu tidak di rekomendasikan, karena akan menyulitkan kita ketika nanti butuh melakukan manipulasi waktu atau tanggal di MySQL.



### 2. Tipe data Boolean.
-BOOLEAN adalah tipe data kebenaran, yang artinya datanya hanya ada dua jenis, benar atau salah.
-Benar direpresentasikan dengan data TRUE, sedangkan salah direpresentasikan dengan data FALSE.


### 3. Tipe data lainnya.
- Sebenarnya masih banyak jenis tipe data yang lain yang didukung oleh MySQL, namun itu bisa kita pelajari jika memang ada kebutuhan spesifik.
- Seperti misal tipe data BLOB, SPATIAL, JSON, SET dan lain-lain.
- [data lainnya](https://dev.mysql.com/doc/refman/8.0/en/data-types.html)


### 4. Table.
- Data biasanya disimpan di dalam tabel di MySQL.
- Tiap tabel biasanya menyimpan satu jenis data, misal ketika kita membuat aplikasi toko online, kita akan membuat tabel barang, tabel pelanggan, tabel penjual, dan lain-lain.
- Sebelum kita bisa memasukkan data ke tabel, kita wajib terlebih dahulu membuat tabelnya terlebih dahulu.
- Dan tiap tabel yang kita buat, wajib ditentukan kolom-kolom nya, dan tipe data tiap kolom nya.
- Kita juga bisa mengubah tabel yang sudah terlanjur dibuat, seperti menambah kolom baru, mengubah kolom yang sudah ada, atau menghapus kolom.

    1. **Storage Engines**
    - MySQL memiliki berbagai cara melakukan pengolahan data, hal ini disebut Storage Engines.
    - Saat ini, yang biasa dan populer digunakan adalah InnoDB
    - Untuk melihat storage engines apa saja yang terdapat di MySQL, kita bisa menggunakan perintah : SHOW ENGINES; 

### 5. Insert data.
- Sebelum kita meng memasukkan data kedalam tabel, tabel harus dibuat terlebih dahulu.
- Kita bisa menyebutkan kolom mana yang ingin kita isi, jika kita tidak menyebutkan kolom nya, artinya kolom tersebut tidak akan kita isi, dan secara otomatis kolom yang tidak kita isi, nilainya akan NULL, kecuali memiliki DEFAULT VALUE.
- Untuk memasukkan data kedalam tabel, kita bisa menggunakan perintah SQL yang bernama INSERT.

### 6. Select data.
- Untuk mengambil data di tabel, kita bisa menggunakan SQL dengan kata kunci SELECT.
- SELECT bisa digunakan untuk mengambil semua kolom yang ada di tabel, atau sebagian kolom saja.
- Jika kita ingin mengambil semua kolom, kita bisa gunakan karakter * (bintang).
- Jika kita hanya ingin mengambil beberapa kolom saja, kita bisa sebutkan nama-nama kolom yang ingin kita ambil datanya.


## Resources Used 📚

- [Belajar database](https://youtu.be/xYBclb-sYQ4?si=jVKlx96naapzUJWd)
