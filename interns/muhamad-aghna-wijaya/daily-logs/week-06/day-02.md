# Daily Learning Log 18-03-2025

## Today's Focus

- Where Operator.
- Order By Clause.
- Limit Clause.
- Select Distinct Data.
- Numeric Function.

## What I Learned

### 1. Where Operator.
- Sebelumnya di materi where clause kita sudah menggunakan operator = (sama dengan).
- Sebenarnya sangat banyak sekali operator yang bisa kita gunakan ketika menggunakan where clause.
- Sekarang kita akan bahas satu per satu.

   1. **AND dan OR Operator**
    - Kadang kita ingin mencari data dengan beberapa gabungan kondisi, kita bisa menggunakan operator AND dan OR.
    - AND dan OR digunakan untuk menggabungkan beberapa dua operator.
    
   2. **like operator**
    - LIKE operator adalah operator yang bisa kita gunakan untuk mencari sebagian data dalam String.
    - Ini cocok sekali ketika kita hanya ingin mencari sebagian kata dalam String.
    - Namun perlu diingat, operasi LIKE itu sangat lambat, oleh karena itu, tidak disarankan jika datanya sudah terlalu besar di tabel.
    - Operasi LIKE tidak case sensitive, jadi huruf besar dan kecil tidak akan berpengaruh.
        - LIKE ‘b%’ ;String dengan awalan b
        - LIKE ‘%a’;String dengan akhiran b
        - lIKE ‘%eko%’;String berisi eko
        - NOT LIK;Tidak LIKE

    3. **NULL Operator**
    - Untuk mencari data yang berisi NULL, kita tidak bisa menggunakan operator perbandingan = NULL.
    - Ada operator khusus untuk mencari data NULL, yaitu menggunakan NULL operator.
    - IS NULL, artinya mencari yang NULL.
    - IS NOT NULL, artinya mencari yang tidak NULL.
    
  4. **Between Operator**
    - Kadang kita ingin mencari data yang >= dan <= secara sekaligus.
    - Misal kita ingin mencari products yang harganya antara 10000 sampai 20000.
    - Untuk melakukan ini, kita bisa menggunakan WHERE price >= 10000 AND price <= 20000.
    - Namun ada operator BETWEEN yang bisa kita gunakan agar lebih sederhana.
    - Untuk kebalikannya, kita bisa gunakan NOT BETWEEN.
 5. **IN Operator**
    - Operator IN adalah operator untuk melakukan pencarian sebuah kolom dengan beberapa nilai.
    - Misal kita ingin mencari products dengan category Makanan atau Minuman, maka kita bisa menggunakan operator IN.

    

### 2. Order Clause.
- Untuk mengurutkan data ketika kita menggunakan perintah SQL SELECT, kita bisa menambahkan ORDER BY clause.
- ORDER BY clause digunakan untuk mengurutkan data berdasarkan kolom yang dipilih, dan jenis urutan (ASC atau  DESC).
- Kita juga bisa mengurutkan tidak hanya terhadap satu kolom, tapi beberapa kolom.

### 3. Limit Clause.
- Mengambil seluruh data di tabel bukanlah pilihan bijak, apalagi jika datanya sudah banyak sekali.
- Kita bisa membatasi jumlah data yang diambil dalam SQL SELECT dengan LIMIT clause.
- Selain membatasi jumlah data, kita juga bisa meng-skip sejumlah data yang tidak ingin kita lihat.
- LIMIT biasanya digunakan saat melakukan paging di aplikasi kita.

### 4. Select Distinct Data.
- Saat melakukan query dengan SELECT, kadang kita mendapatkan data yang duplikat.
- Misal kita ingin melihat semua kategori di tabel products, maka otomatis hasil query SELECT akan duplikat, karena banyak sekali produk dengan kategori yang sama.
- Jika kita ingin menghilangkan data-data duplikat tersebut , kita bisa menggunakan SELECT dengan tambahan DISTINCT sebelum nama kolom nya.

### 5. Numeric Function.
- MySQL memiliki banyak sekali fitur untuk manipulasi data angka.
- Hal ini memudahkan kita untuk memanipulasi data angka.
- Secara garis besar, fitur ini dibagi menjadi dua, Arithmetic Operator dan Mathematical Function.


## Resources Used 📚

- [Belajar database](https://youtu.be/xYBclb-sYQ4?si=jVKlx96naapzUJWd)
