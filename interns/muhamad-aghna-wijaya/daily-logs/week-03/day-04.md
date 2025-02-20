# Daily Learning Log 20/02/2025

## Today's Focus

- Attribut key.
- Menormalkan basis data dari 1-3.
- Denormalisasi Data.
- Apklikasi sistem data.

## What I Learned

### 1. Attribut key

- "Unik" berarti sesuatu yang berbeda, khas, atau tidak ada duanya.
- Key adalah nilai yang bisa digunakan sebagai identitas baris pada tabel yang sifatnya unik.
- Biasanya Attribute Key dibilang juga dengan nama Primary Key.
- Attribute Key milik entitas lain yang disimpan sebagai atribut di entitas lain, disebut Foreign Key.

  1.  **Simple Attribute dan Composite Attribute.**

      - Simple attribute adalah atribut yang tidak bisa diuraikan lagi, sedangkan composite attribute adalah atribut yang masih bisa diuraikan.
      - Pada kasus tabel kita, semua kolom sudah simple attribute, karena tidak bisa diuraikan lagi.
      - Seandainya misal kita ada kolom alamat yang berisikan kombinasi dari jalan kota provinsi negara dan kodepos, maka bisa dibilang kolom alamat tersebut adalah composite attribute.

  2.  **Single-Value dan Multi-Value Attribute.**

      - Single-value attribute adalah atribut yang memiliki satu nilai, sedangkan multi-value attribute adalah atribut yang memiliki nilai lebih dari satu.
      - Pada kasus tabel kita, kita sudah membuat semua kolom menjadi single-value attribute.
      - Seandainya kita gabungkan semua produk di satu kolom, maka bisa jadi itu adalah multi-value
        attribute.

  3.  **Mandatory Attribute.**

      - Mandatory attribute adalah atribut yang wajib diisi atau tidak boleh kosong (NULL).
      - Pada kasus kita, produk 2.3 dan 4 adalah kolom yang tidak mandatory, karena bisa kosong.

  4.  **Derived Attribute.**
      - Derived attribute (atribut turunan) adalah atribut yang nilainya diperoleh dari hasil pengolahan atribut lain.
      - Pada kasus kita, contohnya banyak sekali derived attribute, seperti produk total, total belanja,total berat dan lain-lain.
      - atau merupakan hasil penjumlahan.

### 2. Superkey.

- Superkey merupakan satu atau atau lebih atribut yang dapat membedakan setiap baris data secara unik.
- Misal pada tabel produk, yang bisa menjadi superkey adalah.
- (kode produk, nama produk, berat produk, harga produk, kode penjual).
- (nama produk, kode penjual) jika bisa menjamin penjual tidak menjual barang yang sama.
- (kode produk, kode penjual).
- (kode produk).
- Note!! semua kombinasi yang bisa membuat Kolom tabel itu unik, itu adalah superkey.

  1. **Candidate key.**

  - Candidate key merupakan kumpulan atribut minimal yang dapat membedakan setiap baris data dalam sebuah tabel secara unik.
  - Contoh candidate key pada tabel produk adalah:
  - (kode produk).
  - (nama produk) jika bisa dijamin nama produk tidak boleh dibuat lebih dari sekali.

  2. **Primary key.**

  - Setelah menentukan candidate key, salah satu kombinasi candidate key akan ditentukan sebagai primary key, key utama sebagai representasi baris secara unik.
  - Primary key biasanya dipilih pada candidate key yang paling cocok dan paling bisa dijamin keunikannya, contohnya pada kasus tabel produk.
  - (kode produk).

### 3. Menormalkan basis data.

##### 1. Normal basis data 1.

- Tiap kolom tidak boleh menyimpan data lebih dari satu.
- Tidak ada kolom yang duplikat/ganda.
- Tidak ada baris yang duplikat/ganda.
- Tidak ada atribut turunan.

  1. **Revisi Contoh Kasus: Bentuk Normal ke 1**

  - kita merapih kan basis data yang tidak berantakan.
  - Kolom Produk Nama, Produk Harga, Produk Jumlah, Produk Berat, dan Produk Total duplikat sebanyak 4 kall.
  - Produk Total Total Harga, Total Berat. Total Belanja adalah atribut turunan, jadi akan kita hapus [Klik file.](https://docs.google.com/spreadsheets/d/1epg/WZiTkCmAWJRy)

##### 2. Normal basis data 2.

- harus sudah dalam bentuk normal basis data ke 1.
- buat tabek=l terpisah untuk nilai2 yang krluar berulang kali pada beberapa baris.
- tambah kan primary key pada tiap tabel yang kita pisah kan.
- hubung kan menggunakan foreign key.

  1. **Revisi Contoh Kasus: Bentuk Normal ke 2.**

  - Kolom-kolom Produk terdapat yang berulang
  - Kolom-kolom Order, Penjual dan Pembeli terdapat yang berulang
  - [klik file.](https//docs.code.com/preadsheets/d/1epalWZiTkCmAW/Ryh2K3SP/O9160VVR6uDOSSBI)
  - Note!! pemisahan yang di maksud memebuat tabel nya sendiri seperti ada nya tabel order,tabel produk, dan juga tabel akhir atau total.

**Ketergantungan fungsionalitas**

- sebelum kita bahas tentang bentuk normal ke 3, kita harus tahu tentang ketergantungan fungsionalitas.
- dalam tabel, jika terdapat atribut b memiliki ketergantungan fungsionalitas dengan A, maka kita bisa di bila A-->B.
- biasanya a adlah atribut key, dan b adalah atrinut yang bukan key.
- dalam bentuk normal ke 3, kit harus teliti tabel yang sudah dalam bentuk normal ke 2, apakah attribut2 yang buka key tersebeut tergantung dengan attribute key nya?

##### 3. Normal basis data 3.

- Pindahkan kolom2 yang tidak tergantung ke key menjadi tabel lain.
- Hal ini di karena kan jika terjadi perubahan pada kolom tersebut , ditajut kan perlu melakukan perubahan di banyak baris.

  1. **Revisi Contoh Kasus: Bentuk Normal ke 3**

  - Ada banyak kolom yang tidak tergantung dengan key.
  - Contoh penjual,pembeli, alamat pengirim.
  - Kolom2 tersebut jika berubah, maka harus di ubah di semua baris order lain nya, dan itu membuat data tidak konsisiten.
  - [Klik file.](https://docs.google.com/spreadsheets/d/1epalWZiTkCmAWJRv)
  - Jadi jika ada perubahan nama, kita harus merubah nya satu demi satu, karena itu kita tambah kan kode untun nama yang tidak tergantung dengan key, jadi kita memebuat tabel baru untuk menambah kan kode penjual, pembeli dan jasa pengiriman.

### 4. Denormalisasi Data.

- tujuan nya mempercepat proses pencarian atau pembacaan basis data yang kita buat.
- Normalisasi data digunakan untuk membuat model basis data yang baik.
- Normalisasi data sebenarnya hanyalah petunjuk saja, dalam keadaan tertentu, kadang kita bisa.
- Melanggar aturan dari normalisasi data.
- Pelanggaran normalisasi data tersebut kita sebut denormalisasi data.
- Alasan kita melakukan denormalisasi data, adalah untuk mendaatkan performa yang lebih baik.
- Dan denormalisasi data sering sekali dilakukan di dunia nyata.
- Ada banyak sekali cara melakukan denormalisasi data, namun inti dari denormalisasi data adalah
  meningkatkan performa kecepatan mendapat data.

1. **Derived Attribute**

- Sebelumnya pada saat melakukan normalisasi data, kita menghapus atribut turunan.
- Jika bernyata hal ini memperlambat proses mencari data, yang artinya kita harus mengolah data total belanja, total berat dan total harga, maka kita bisa melakukan denormalisasi data dengan menambahkan derived attribute.

  1. **Atribut Tambahan.**

     - Seperti yang dibahas di normalisasi data, atribut yang tidak memiliki ketergantungan fungsionalitas, seharusnya dipisahkan dalam tabel sendiri.
     - Namun, kadang menambahkan atribut tambahan bisa mempercepat proses pencarian.
     - Contoh, jika kita ingin mencari semua Order untuk Pembeli Joko, maka kita harus mencari dulu ke tabel Alamat, baru dari sana kita bisa lihat kode alamat yang terdapat di Order.
     - Begitu juga ketika kita ingin mencari semua Order ke Penjual Galeri Olahraga, maka kita harus mencari dulu ke tabel Produk, lalu harus mencari relasi ke tabel Detail Order, dan baru mencari lagi relasi ke tabel Order.
     - Penambahan kode pembeli dan kode penjual di tabel Order bisa mempercepat proses pencarian [Klik file.](https://docs.google.com/spreadsheets/d/1epalWZiTkCmAWJRy.)

  2. **Summary Table.**

     - Summary table (tabel rekapitulasi) adalah tabel yang biasanya dibuat hasil dari pengolahan data dari tabel master/detail/asli.
     - Pada kasus sebelumnya, kita tidak membuat tabel rekapitulasi, namun misal saja kita akan menambahkan fitur, dimana penjual bisa melihat laporan penjualan bulanan.
     - Dengan normalisasi data, hal itu bisa kita dapatkan laporannya dengan cara mengolah data seluruh order dan detail order dalam per bulan.
     - Hal ini akan memberatkan jika kita sering sekali membutuhkan laporan bulanan, maka ada baiknya kita membuat summary table untuk laporan penjualan per bulan.
     - [Klik file](httos.docs.google.com/spreadsheets/d/1epolWZ/TkCmAWJRY)

  3. **Atribut untuk Pencarian.**

     - Pada beberapa kasus, kadang kita butuh melakukan pencarian dengan berbagai jenis kriteria.
     - Misal, pada Produk, kadang kita ingin mencari data produk menggunakan nama, namun tanpa peduli huruf besar kecilnya (Icase insensitive).
     - Pada kasus seperti ini, kita bisa menambah atribut tambahan untuk pencarian, misal Nama Produk Lower, dimana isinya adalah nama produk dalam bentuk huruf kecil Denganbegitu, ketika melakukan pencarian dengan nama produk, kita bisa menggunakan atribut untuk pencarian tersebut [Klik file.](https://docs.google.com/spreadsheets/d/1epg/WZiTkCmAWJRv)

  4. **Immutable dan Mutable Table**
     - Saat kita membuat tibel, rata-rata adalahi mutable table (tabel yang bisa diubah, contohnya adalah semua tabel yang sudah kita buat).
     - Namun pada kasus tertentu, kadang ada tabel yang sifatnya immutable table (tabel yang tidak boleh diubah) artinya hanya boleh memasukkan data, tidak boleh diubah lagi.
     - Pada kasus Order, sebenarnya idealnya adalah datanya immutable table, kenapa? Karena penjualan yang sudah terjadi, tidak boleh berubah lagi ketika di masa depan misal terjadi perubahan data, minal ketika harga produk berubah, nama produk berubah, dan lain-lain.
     - Seandainya minal pada kasus kita, kita ingin menjadikan Order adalah data yang immutable. artinya semua data yang berasal dari tabel master/detail/aslinya, maka harus kita duplikasi ke tabel immutabile nya.
     - [Klik file.](https/docs.gocate.com/hcreadsheets/d/1epolWZiTkCmAWJRY)

### 5. Aplikasi Sistem Basis Data.

- Setelah kita tahu cara membuat model basis data dan cara implementasi tabel dalam basis data. sekarang pertanyaannya bagaimana cara membuatnya?
- Cara paling sederhana adalah dengan membuat basis data menggunakan aplikasi spreadsheet seperti Microsoft Excel. Apple Number, Google Docs, dan sejenisnya.
- Namun aplikasi aplikasi tersebut hanya cocok untuk menyimpan data dalam ukuran tidak terlalu besar, dan hanya digunakan oleh pengguna (user).
- Untuk menyimpan basis data dalam ukuran besar, dan bisa digunakan oleh pengguna non user (web atau aplikasi), kita perlu aplikasi sistem basisdata berbasis server.

1.  **Structure Query Language.**
    - SQL (Structure Query Language) adalah salah satu bahasa instruksi basis data yang paling populer digunakan oleh aplikasi DBMS.
    - SQL. berisikan perintah-perintah untuk membuat struktur basis data atau data definition language (DOL) Dan juga perintah-perintah untuk mengelola basis data atau data manipulation language DIMU.
    - Untuk belajar SQL kita perlu memilih aplikasi DBMS yang ingin kita pelajari, biasanya disesuaikan dengan tempat kita bekerja, karena tiap perusahaan biasanya sudah memilih aplikasi DBMS yang mereka gunakan.

## Resources Used 📚

- [Belajar basis data untuk pemula](https://youtu.be/S4igMZFCvh8?si=Qds5Y0-nIs9h83A1)
