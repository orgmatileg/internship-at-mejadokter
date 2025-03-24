# Daily Learning Log 21-03-2025

## Today's Focus

- Join.
- One to One Relationship.
- One to Many Relationship.
- Many to Many Relationship.
- Subqueries. 
- Transaction.

## What I Learned

### 1. JOIN.
- MySQL mendukung query SELECT langsung ke beberapa tabel secara sekaligus.
- Namun untuk melakukan itu, kita perlu melakukan JOIN di SQL SELECT yang kita buat.
- Untuk melakukan JOIN, kita perlu menentukan tabel mana yang merupakan referensi ke tabel lain.
- Join cocok sekali dengan foreign key, walaupun di MySQL tidak ada aturan kalau JOIN harus ada foreign key.
- Join di MySQL bisa dilakukan untuk lebih dari beberapa tabel.
- Tapi ingat, semakin banyak JOIN, maka proses query akan semakin berat dan lambat, jadi harap bijak ketika melakukan JOIN.
- Idealnya kita melakukan JOIN jangan lebih dari 5 tabel, karena itu bisa berdampak ke performa query yang lambat.

### 2. One to One Relationship.
- One to One relationship adalah relasi antar tabel yang paling sederhana.
- Artinya tiap data di sebuah tabel hanya boleh berelasi ke maksimal 1 data di tabel lainnya.
- Tidak boleh ada relasi lebih dari 1 data.
- Contoh misal, kita membuat aplikasi toko online yang terdapat fitur wallet, dan 1 customer, cuma boleh punya 1 wallet.

### 3. One to Many Relationship.
- One to many relationship adalah relasi antar tabel dimana satu data bisa digunakan lebih dari satu kali di tabel relasinya.
- Berbeda dengan one to one yang cuma bisa digunakan maksimal 1 kali di tabel relasinya, one to many tidak ada batasan berapa banyak data digunakan.
- Contoh relasi antar tabel categories dan products, dimana satu category bisa digunakan oleh lebih dari satu product, yang artinya relasinya nya one category to many products.
- Pembuatan relasi one to many sebenarnya sama dengan one to one, yang membedakan adalah, kita tidak perlu menggunakan UNIQUE KEY, karena datanya memang bisa berkali-kali ditambahkan di tabel relasi nya.

### 4. Many to Many.
- Many to Many adalah table relationship yang paling kompleks, dan kadang membingungkan untuk pemula.
- Many to Many adalah relasi dimana ada relasi antara 2 tabel dimana table pertama bisa punya banyak relasi di table kedua, dan table kedua pun punya banyak relasi di table pertama.
- Ini memang sedikit membingungkan, bagaimana caranya bisa relasi kebanyakan secara bolak balik, sedangkan di table kita cuma punya 1 kolom?
- Contoh relasi many to many adalah relasi antara produk dan penjualan, dimana setiap prodk bisa dijual berkali kali, dan setiap penjualan bisa untuk lebih dari satu produk.


### 5. Subquery.
- MySQL mendukung pencarian data menggunakan WHERE dari hasil SELECT query
- Fitur ini dinamakan Subquery.
- Contoh, kita ingin mencari products yang harganya diatas harga rata-rata, artinya kita akan melakukan SELECT dengan WHERE price > harga rata, dimana harga rata-rata perlu kita hitung menggunakan query SELECT lainnya menggunakan aggregate function AVG.

### 6. Data base Transaction.
- Database transaction adalah fitur di DBMS dimana kita bisa memungkinan beberapa perintah dianggap menjadi sebuah kesatuan perintah yang kita sebut transaction.
- Jika terdapat satu saja proses gagal di transaction, maka secara otomatis perintah-perintah sebelumnya akan dibatalkan.
- Jika sebuah transaction sukses, maka semua perintah akan dipastikan sukses.


## Resources Used 📚

- [Belajar database](https://youtu.be/xYBclb-sYQ4?si=jVKlx96naapzUJWd)
