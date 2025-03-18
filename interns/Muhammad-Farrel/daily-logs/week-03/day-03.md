# Basis data day-03

---

### yang sudah dipelajari :  
1. **implementasi model data relational**  
    - implementasi one to one :  
        - jika pada tiap entity menggunakan attribute key yang sama, maka attribute key bisa dijadikan acuan untuk saling berelasi
        - jika pada tiap entity menggunakan attribute yang berbeda, maka perlu membuat foreign key di salah satu entity yang lemah, foreign key itu harus unique.
    - implementasi one to many/many to one :
        - jika pada kasus relasi tidak ada attribute deskriptif, maka perlu tabel baru sebagai implementasi relationship
        - jika tidak ada maka tidak perlu tabel baru, cukup dengan foreign key yang bersifat many
    - implementasi many to many :
        - diimplementasikan dalam bentuk tabel relasi yang berisi semua attribute relasi


2. **Model Data Lainnya**  
    - weak entity(entity lemah)= entity yang tidak bisa berdiri sendiri, harus berelasi dengan entity utama
        *contoh = entity dompet harus berelasi dengan entity pemilik*
    - sub entity(entity turunan)= entity yang memiliki kesamaan attribute, tetapi terdapat perbedaan diantaranya
        *contoh = entity barang laptop dan barang pakaian, sama sama memiliki attribute harga tapi ada perbedaannya*
    - unary relationship = relasi yang terjadi pada entity dengan entity dirinya sendiri
        *contoh = fitur referen(member get member) dari pembeli ke pembeli lagi*
    - multi entity relationship = relasi yang terjadi diantara 2 entity
        *contoh = pembeli membeli barang dengan metode pembayaran menggunakan bank*
    - Redundant relationship(relasi ganda) = jika 2 entitas memiliki relasi lebih dari satu entitas tersebut
        *contoh = pembeli bisa membeli barang tetapi juga bisa menyukai barangnya*


3. **Model Diagram Lainnya**  
    - diagram relationship :
        - zero or one
        - exactly one
        - zero or many
        - one or many
    - implementasi model diagram


4. **normalisasi data**  
    1. pengertian
        - proses dalam membuat basis data dengan tujuan menghilangkan data redundancy/ganda dan data yang tidak konsisten
        - aturannya adalah membagi tabel besar menjadi tabel yang lebih kecil dan dihubungkan dengan relasi 
    2. contoh kasus
        - normalisasi data mengacu pada hasil dan kebutuhan akhir suatu program, misalnya laporan order dari sebuah toko online akan dimuat dalam tabel tabel kecil atau excel
        |nama|penjual|barang|harga|
        |----|-------|------|-----|
        |ali |Farrel |laptop|3,7jt|

    
5. **jenis jenis attribute**
    - attribute key  (primary key)
    - simple attribute  (atribut yang tidak bisa diuraikan lagi)
    - composite attribute  (atribut yang masih bisa diuraikan lagi)
    - single value attribute  (attribute yang memiliki 1 nilai)
    - multi value attribute  (atribut yang nilainya bisa lebih dari 1)
    - mandatory attribute  (attribute yang tidak boleh kosong/null)
    - Derived attribute  (attribute turunan, yaitu attribute yang nilainya diperoleh oleh gabungan attribute attribute lainnya)


6. **Attribute key**
    - *superkey*
        merupakan satu atau lebih atribute yang dapat membedakan setiap baris data secara unik, contoh = nama produk dan kode penjual.
    - *candidate key*
        merupakan kumpulan attribute minimal yang dapat membedakan setiap baris data dalam sebuah tabel secara unik, contoh = kode produk.
    - *primary key*
        salah satu kombinasi candidate key akan ditentukan sebagai primary key, key utama untuk representasi baris secara unik.

7. **bentuk normal basis data**
    *bentuk normal ke 1* :    
        - tiap kolom tidak boleh menyimpan data lebih dari 1
        - tidak ada kolom yang duplikat
        - tidak ada baris ganda
        - tidak ada atribut turunan
        - contoh = tabel yang tidak memiliki total_harga karena merupakan atribut turunan
    *bentuk normal ke 2* :  
        - harus sudah dalam bentuk normal basis data ke 1
        - buat tabel terpisah untuk nilai nilai yang keluar berulang kali pada beberapa baris
        - tambahkan primary key
        - hubungkan dengan foreign key
        - contohnya suatu produk tidak boleh memiliki kode_produk yang sama dengan produk lain.
    *bentuk normal ke 3* :  
        - **_ketergantungan fungsionalitas_** :  
                *dalam tabel jika attribute B memiliki ketergantungan ke attribute A, maka bisa dibilang A-->B. biasanya A adalah attribute key dan B adalah attribute biasa*
        - memindahkan kolom kolom yang tidak tergantung ke key menjadi tabel lainnya
        - contohnya kita bisa memindahkan tabel penjual, pembeli, dll menjadi tabel lain, karena tabel ini tidak memiliki ketergantungan pada key
    
8. **Denormalisasi data**
    - digunakan untuk membuat model basis data yang baik
    - denormalisasi data hanyalah petunjuk saja dalam keaadaan tertentu, kadang kita bisa melanggar aturan normalisasi data
    - pelanggaran normalisasi data disebut denormalisasi data
    - alasan denormalisasi data adalah untuk mendapatkan performa kecepatan
    
    1. *Derived attribute*
        - di normalisasi data kita menghaous beberapa attribute turunan, jika hal ini memperlambat proses maka kita harus mengelola data. kita bisa melakukan derived attribute
    2. *attribute tambahan*
        - attribute yang tidak memiliki ketergantungan sebaiknya dipisahkan
        - terkadang kita juga bisa menambah attribute tambahan untuk mempercepat mencari data
    3. *summary table(tabel rekapitulasi)*
        - summary tabel biasanya dibuat dari hasil pengolahan data dari tabel master
        - contohnya ketika penjual ingin melihat laporan penjualan bulanan
    4. *atribut untuk pencarian*
        - kita bisa menambahkan kolom untuk mempermudah pencarian
    5. *immutable dan mutable table*
        - immutable table yaitu tabel yang tidak boleh diubah 
        - mutable table yaitu tabel yang bisa diubah


9. **aplikasi basis data**
    - aplikasi spreadsheet seperti excel, dll.


10. **sistem basis data berbasis server**
    - aplikasi DBMS (database management system) :
        - mySQL
        - postgreSQL
        - oracle


#### note  
mohon koreksi apabila ada kesalahan  
21/02/25~