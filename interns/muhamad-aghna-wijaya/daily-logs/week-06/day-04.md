# Daily Learning Log 20-03-2025

## Today's Focus

- Grouping.
- Constraint.
- Index.
- Full-Text Search.
- table Relationship.

## What I Learned

### 1. Group BY.
- Kadang saat melakukan aggregate, kita ingin datanya di grouping berdasarkan kriteria tertentu.
- Misal kita ingin melihat rata-rata harga product, tapi ingin per category.
- Atau kita ingin melihat total semua product, tapi per category.
- Hal ini bisa dilakukan di MySQL dengan menggunakan GROUP BY clause.
- GROUP BY clause ini hanya bisa digunakan jika kita menggunakan aggregate function.
- [LINK](https://dev.mysql.com/doc/refman/8.0/en/group-by-modifiers.html)

### 2. Constraint.
- Di MySQL, kita bisa menambahkan constraint untuk menjaga data di tabel tetap baik.
- Constraint sangat bagus ditambahkan untuk menjaga terjadi validasi yang salah di program kita, sehingga data yang masuk ke database tetap akan terjaga.

### 3. Index.
- Secara default, MySQL akan menyimpan data di dalam disk seperti tabel biasanya.
- Hal ini menyebabkan, ketika kita mencari data, maka MySQL akan melakukan pencarian dari baris pertama sampai terakhir, yang artinya semakin banyak datanya, maka akan semakin lambat proses pencarian datanya.
- Saat kita membuat index, MySQL akan menyimpan data dalam struktur data [B-Tree] (https://en.wikipedia.org/wiki/B-tree)
- Tidak hanya akan mempermudah kita saat melakukan pencarian, index juga akan mempermudah kita ketika melakukan pengurutan menggunakan ORDER BY.
- [LINK](https://dev.mysql.com/doc/refman/8.0/en/optimization-indexes.html )

### 4. Full-Text Search.
- Full-Text Search memungkinkan kita bisa mencari sebagian kata di kolom dengan tipe data String.
- Ini sangat cocok ketika pada kasus kita memang membutuhkan pencarian yang tidak hanya sekedar operasi = (equals, sama dengan).
- [LINK](https://dev.mysql.com/doc/refman/8.0/en/fulltext-search.html )

    1. **Mode Full-Text Search**
MySQL menyediakan beberapa mode untuk melakukan pencarian di Full-Text Search, kita bisamemilihnya sesuai kebutuhan kita :
    - Natural Language, yaitu mencari seperti bahasa natural (per kata) : https://dev.mysql.com/doc/refman/8.0/en/fulltext-natural-language.html 
    - Boolean, yaitu mencari dengan kemampuan mengandung kata (+) atau tidak mengandung kata (-) dan lain-lain [BOOLEAN](https://dev.mysql.com/doc/refman/8.0/en/fulltext-boolean.html)
    - Query Expansion, yaitu mencari seperti natural language, namun melakukan dua kali pencarian, pencarian pertama menggunakan natural language, pencarian kedua melakukan pencarian dari kedekatan hasil pertama, misal kita mencari kata “bakso”, lalu ternyata di dalam “bakso” ada kata “mie”, maka kemungkinan query kedua akan mencari kata “mie” juga [QUERY](https://dev.mysql.com/doc/refman/8.0/en/fulltext-query-expansion.html )

### 5.Table Relationship.
- Dalam Relational DBMS, salah satu fitur andalan nya adalah table relationship. Yaitu relasi antar tabel.
- Kita bisa melakukan relasi dari satu tabel ke tabel lain.
- Dalam kehidupan nyata pun pasti kita akan sering membuat relasi antar tabel.
- Misal, saat kita membuat aplikasi penjualan, di laporan penjualan pasti ada data barang. Jika di tabel artinya tabel penjualan akan berelasi dengan tabel barang.
- Misal dalam aplikasi kampus, tabel mahasiswa akan berelasi dengan tabel mata kuliah, dan tabel dosen.
- Dan lain-lain.

## Resources Used 📚

- [Belajar database](https://youtu.be/xYBclb-sYQ4?si=jVKlx96naapzUJWd)
