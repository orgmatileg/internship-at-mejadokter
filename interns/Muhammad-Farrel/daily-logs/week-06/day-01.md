# Databases - [24-03-2025]

## Today's Focus

- fokus memperdalam ilmu databse dari video yang telah diberikan

## What I Learned
- [jenis_jenis_join]
    - inner join
        mekanisme join dimana terdapat relasi antara tabel pertama dan kedua, inner join adalah default dari join. jadi jika melakukan join biasa sebenernya itu adalah inner join.
        SELECT * FROM kategori INNER JOIN belajar on (belajar.kategori = kategori.id);
    - left join
        mekanisme join yang akan menampilkan semua data di tabel pertama, sementara tabel kedua yang tidak memiliki relasi akan bernilai null.
        SELECT * FROM kategori LEFT JOIN belajar on (belajar.kategori = kategori.id);
    - right join
        kebalikan dari left join, semua data dari tabel kedua akan ditampilkan, sementara di tabel pertma yang tidak memiliki relasi akan bernilai null.
        SELECT * FROM kategori RIGHT JOIN belajar on (belajar.kategori = kategori.id);
    - cross join
        jarang digunakan, melakukan join dengan cara mengkalikan data di tabel pertama dengan data tabel kedua.
        1
        SELECT * FROM kategori CROSS JOIN belajar;

- [subquery]
    mysql mendukung pencarian data menggunkan where dari hasil select query, fitur ini dinamakan subquery, seperti where, from.

- [set_operator]
    mysql mendukung operator set, dimana ini adalah hasil operasi kedua tabel. 
    - union 
        akan menampilkan seluruh data, tapi ketika ada data yang sama maka akan di merge satau disatukan.
        SELECT DISTINCT email FROM customers UNION SELECT DISTINCT email FROM guestbook;
    - union all
        data yang sama tidak akan di merge atau disatukan, semua data akan ditampilkan. 
        SELECT DISTINCT email FROM customers UNION ALL SELECT DISTINCT email FROM guestbook;
    - intersect
        operasi yan menggabungkan 2 query, namun yang diambil hanya data yang terdapat pada hasil query pertama dan query kedua
    - minus
        operasi dimana query pertama akan dihilangkan oleh query kedua. jika ada data yang sama dari kedua query. tapi di mysql ga ada minus jadi bisa digunakan syntaks berikut.
        SELECT DISTINCT customers.email, guestbook.email FROM customers LEFT JOIN guestbook ON (customers.email = guestbook.email) WHERE guestbook.email IS null;
- [transaction]
    database transaction adalah beberapa perintah dinggp menjadi sebuah kesatuan perintah yang kita sebut transaction. jika ada proses yang gagal, semua proses sebelumnya dibatalkan. untuk menggunakannya bisa dengan start transaction;
    
    START TRANSACTION ;
    INSERT INTO guestbook(email, title, content) VALUES('na@gmail.com', 'contoh', 'contoh aja ya');
    SELECT * FROM guestbook;
    COMMIT;

    perintah ddl(data definiton languange) tidak bisa menggunakan transaction.

- [locking]
    locking adalah proses mengunci data di DBMS.
    - locking record
        saat kita melakukan transaction, lalu kita melakukan proses perubahan data, data yang kita ubah tersebut akan secara otomatis di lock. jadi saat ada orang lain yang mau menggunakan di data yang sama maka akan diminta untuk menunggu.
    - locking manual
        kita juga sering melakukan select sebelum proses update. untuk locking kita bisa tambahkan perintah FOR UPDATE 'SELECT * FROM belajar WHERE id = '1' FOR UPDATE;'
    - deadlock
        terlalu banyak melakukan proses locking, deadlock adalah situasi saat 2 proses saling mengunci sehingga proses menunggu tidak pernah selesai.
    - locking table
        ada 2 jenis yaitu read dan write.
        read = hanya bisa melakukan read saja, proses lain hanya bisa read (lock tables belajar read;)
        write = kita bisa read dan write, proses lain hanya bisa read.
    - locking instance
        perintah locking yang akan membuat perintah DDL(data definition languange) akan diminta menunggu sampai proses selesai

- [user_management]
    - root user
        membuat user menjadi super administrator, jadi semua bisa di akses oleh dia.
    - hak akses
        - membuat user = CREATE USER 'eji@localhost';
        - menghapus user = DROP USER 'eji@localhost';
        - menambah akses = GRANT SELECT ON riviw_mysql.* TO 'eji@localhost';
        - menghapus akses = revoke SELECT ON riviw_mysql.* TO 'eji@localhost';
        - menambahkan password = SET PASSWORD FOR 'eji@localhost' = 'rahasia';
        
- [backup_database]
    untuk backup kita tidak menggunakan perintah mysql, mysql menyediakan aplikasi khusus namanya mysql dumb, untuk di localhost bisa dengan ekspor database.
- [restore_database]
    di localhost untuk merestore databse yang sudah di backup, bisa dengan import.

- [Konsep yang dipahami]
    cara mengelola database dengan syntaks mysql tetapi melalui localhost xampp

- [Challenges yang dihadapi]
    masih gagal mencoba user management
## Resources Used 📚
- [video_database](https://youtu.be/xYBclb-sYQ4?si=fUA5CiMF1xBhYtyU)
