# Databases - [18-03-2025]

## Today's Focus

- fokus memperdalam ilmu databse dari video yang telah diberikan

## What I Learned
- [syntaks_mysql]
    - memasukan default nilai dengan syntaks mysql (modify column)
    - memasukan data baru ke tabel yang sudah dibuat (insert into)
    - menampilkan data di tabel yang telah di insert (select from)
    - primary key, kolom utama/khusus yang biasanya dijadikan sebagai kolom id. primary key tidak boleh ada yang sama, jadi ketika kita menginput id primary key yang sudah ada maka akan error
    - primary key multiple column, sebuah tabel yang memiliki lebih dari 1 primary key, biasanya ada d many to many relationship
    - melakukan update data, mengganti dan menambah data ke tabel yang sudah dibuat (update tabel)
    - menghapus data dari tabel yang sudah dibuat (delete from)
    - alias, digunakan ketika ingin mengubah nama kolom dengan nama baru, (select namakolom as namabaru from namatabel)
    - where clause operator, operator untuk memilih data dari tabel (select * from namatabel where namakolom =/>/</>=/<= ketentuan), tipe tipe operatornya yaitu : > < = !. bisa juga ditambahkan and, or
        - like operator, operator yang bisa digunakan untuk mencari sebagian data dalam string, minesnya like operator sangat lambat.
            - LIKE 'b%' = string dengan awalan b
            - LIKE 'a%' = string dengan akhiran b
            - LIKE '%eko%' = string yang berisi eko
            - NOT LIKE = tidak like
        - NULL operator, operator untuk mencari data yang bernilai null (select * from namatabel where namakolom is null;)
        - BETWEEN operator, mencari data yang data < nilai dan data > nilai, kebalikannya adalah NOT BETWEEN.
        - IN operator, operator untuk melakukan pencarian data dengan beberapa nilai (where category in('makanan','minuman'))

    - order by clause
        untuk mengurutkan data ketika kita menggunakan perintah sql select select * from namatabel order by namakolom;
    
    - limit clause
        kita bisa membatasi jumlah data yang ingin ditampilkan ketika kita menggunakan syntaks sql (order by nama LIMIT 2;) bisa juga di ketik LIMIT 2, 2 artinya lewat 2 data dan maksimal 2 data

    - select distinct data
        untuk menghilangkan data duplikat, tidak ditampilkan saat di select, select distinct namakolom;
    
    - numeric function
        - arithmetic operator (+, -, /, *, %)
        - mathematical function (sin, cons, log)

    - auto increment
        terkadang kita membutuhkan angka yang berurut seperti 1,2,3.
        membuat dan memasukan data dengan auto increment dalam tabelnya.

    - string function
        sama seperti number, kali ini digunakan untuk data string

    - time and date
        - timestamp mysql, SELECT id, waktu, YEAR(waktu) from belajar;

    - flow control
        SELECT id, CASE alamat WHEN 'grandharmony' THEN 'cileungsi' ELSE 'dimana?' END AS 'rumah' FROM guru;
        -if mysql = SELECT id,harga, IF(harga<40000, 'murah', 'mahal') AS 'harga' FROM belajar;



- [Konsep yang dipahami]
    cara mengelola database dengan syntaks mysql tetapi melalui localhost xampp

- [Challenges yang dihadapi]
    ada yang ntah salah ketik atau memang tidak ada seperti ifnull karena tidak bisa di coba
## Resources Used 📚
- [video_database](https://youtu.be/xYBclb-sYQ4?si=fUA5CiMF1xBhYtyU)
