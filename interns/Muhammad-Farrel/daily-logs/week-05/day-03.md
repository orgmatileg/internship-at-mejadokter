# Databases - [18-03-2025]

## Today's Focus

- fokus memperdalam ilmu databse dari video yang telah diberikan

## What I Learned
- [aggregate_function]
    semisalnya kita ingin mencari harga tertinggi yang ada di tabel. SELECT MIN(harga) FROM belajar;
    pilihannya ada count, max, min, avg, dan sum.
- [group_by]
    saat kita menggunakan aggregate function, kadang kita ingin data di kelompokkan. jadi untuk menggunakan ini perlu digunakan aggregate function dahulu. SELECT MIN(harga) FROM belajar group by nama;
- [having_clause]
    having clause bisa kita gunakan untuk melakukan filter terhadap data yang telah kita group by. SELECT max(harga) as 'biaya', nama FROM belajar GROUP BY nama HAVING biaya<35000;
- [constraint]
    menjaga validasi saat program berjalan
    - unique constraint
        constraint yang menjaga data kita tetap unique. dalam pembuatannya kita bisa menambahkan unique key(namakolom) saat create tabel, bisa juga untuk dihapus dengan drop saat alter(ALTER TABLE customers
        DROP CONSTRAINT email;), dan menambah dengan add constraint (ALTER TABLE customers
        ADD CONSTRAINT email UNIQUE(email);)
- [index]
    secara default, mysql akan menyimpan data di dalam disk seperti tabel biasa, saat datanya banyak akan membuat mysql jadi lambat karena sistem mencari data dari pertama hingga terakhir. saat kita membuat index, mysql akan menyimpan data dalam bentuk b-tree
    kita bisa membuat lebih dari satu index di tabel, saat kita membuat index, kita bisa membuat index untuk beberpa kolom sekaligus. index mungkin akan mempercepat pencarian data tapi memperlambat manipulasi data
    saat kita sudah memiliki primary dan unique maka kita tidak butuh index. untuk membuatnya INDEX namakolom (nama). bisa juga di alter dengan syntaks yang sama dengan constraint tapi diganti index.
- [full_text_search]
    masalah dengan like operator adalah mencari data dari baris pertama hingga akhir yang membuatnya sangat lama, menambahkan index dan lainnya juga tak membantu. oleh karena itu mysql menyediakan fitur full text search
    untuk membuatnya kita bisa gunakan FULLTEXT nama_search (namakolom); atau kita juga bisa gunakan alter table dengan add fulltext nama (namakolom); dan drop fulltext (namakolom);
    untuk menampilkannya dengan menggunakan SELECT * FROM belajar WHERE MATCH(nama) AGAINST('jepang' IN NATURAL LANGUAGE MODE); ada juga yang in boolean mode dan in query expansion juga in natural languange mode

- [Table_Relationship]
    relasi antar table, foreign key atau kolom referensi yang dimana kita mengambil data dari tabel lain ke tabel yang satu. 
    
    CREATE TABLE wishlist(
    id	int NOT NULL AUTO_INCREMENT,
    id_product int NOT NULL,
    nama	varchar(100) NOT NULL,
    deskripsi	TEXT,
    PRIMARY KEY(id),
    CONSTRAINT fk_wishlist_study
    	FOREIGN KEY(id_product) REFERENCES belajar(id)
    ) ENGINE=INNODB;

    INSERT INTO wishlist(id_product, nama, deskripsi) VALUES('1', 'matematika', 'buku pelajaran matematika');

    ALTER TABLE wishlist
    add CONSTRAINT fk_wishlist_study
	    FOREIGN KEY(id_product) REFERENCES belajar(id);

    ALTER TABLE wishlist
    DROP CONSTRAINT fk_wishlist_study;

    ketika kita memiliki data di table wishlist yag foreign key, saat kita ingin menghapus data dari tabel asalnya maka akan error, ini dinamakan restrict(ditolak) 

    behavior foreign key yaitu restrict, cascade, no action, set null. untuk menggunakan tambahkan on delete cascade/ on update cascade setelah membuat foreign key.

- [join]
    mysql mendukung untuk query select kangsung ke beberapatabel sekaligus, semakin banyak join semakin lambat juga proses query nya.
    SELECT * FROM wishlist
    JOIN belajar on (wishlist.id_product = belajar.id);

    SELECT w.id_product, w.nama, w.deskripsi, b.id, b.nama FROM wishlist AS w
    JOIN belajar AS b on (w.id_product = b.id);

    SELECT w.id_product, w.nama, w.deskripsi, b.id, b.nama, g.nama, g.mapel FROM wishlist AS w
    JOIN belajar AS b on (w.id_product = b.id)
    JOIN guru AS g on (w.idguru = g.id);

- [one_to_one_relationship]
    relasi antar tabel yang hanya boleh berelasi ke maksimal 1 data ke tabel lainnya. untuk membuatnya kita bisa membuat foreign key lalu set kolom tersebut menjadi unique

- [one_to_many]
    relasi antar tabel yang mengirim satu data ke banyak tabel lain.

-[many_to_many]
    many to many adalah table relationship yang paling kompleks, dan kadang membingungkan untuk pemula. many to many adalah relasi dimana relasi antara 2 table bisa punya banyak relasi di kedua tabelnya. 
    untuk relasi ini kita membuat sebuah tabel penengah, misalnya tabel produk dan tabel order, lalu kita bisa membuat tabel pesanan untuk menampung data dari kedua tabel agar many to many ini berjalan dengan baik

- [Konsep yang dipahami]
    cara mengelola data dengan syntaks mysql

- [Challenges yang dihadapi]
    beberapa syntaks yang gagal saat di coba
    
## Resources Used 📚
- [video_database](https://youtu.be/xYBclb-sYQ4?si=fUA5CiMF1xBhYtyU)
