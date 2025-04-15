# Daily Learning Log 22-03-2025

## Today's Focus

- Locking.
- User Management.
- Backup Database.
- Restore Database.

## What I Learned

### 1. Locking.
- Locking adalah proses mengunci data di DBMS.
- Proses mengunci data sangat penting dilakukan, salah satunya agar data benar-benar terjamin konsistensinya.
- Karena pada kenyataannya, aplikasi yang akan kita buat pasti digunakan oleh banyak pengguna, dan banyak pengguna tersebut bisa saja akan mengakses data yang sama, jika tidak ada proses locking, bisa dipastikan akan terjadi RACE CONDITION, yaitu proses balapan ketika mengubah data yang sama.
- Contoh saja, ketika kita belanja di toko online, kita akan balapan membeli barang yang sama, jika data tidak terjaga, bisa jadi kita salah mengupdate stock karena pada saat yang bersamaan banyak yang melakukan perubahan stock barang.

### 2. Root user.
- Secara default, mysql membuat root user sebagai super administrator.
- Namun best practice nya, saat kita menjalankan MySQL dengan aplikasi yang kita buat, sangat disarankan tidak menggunakan user root.
- Lebih baik kita buat user khusus untuk tiap aplikasi, bahkan kita bisa batasi hak akses user tersebut, seperti hanya bisa melakukan SELECT, dan tidak boleh melakukan INSERT, UPDATE atau DELETE.

### 3. Backup Database.
- Saat membuat aplikasi menggunakan database, ada baiknya kita selalu melakukan backup data secara reguler
- Untungnya MySQL mendukung proses backup database
- Untuk melakukan backup database, kita tidak menggunakan perintah SQL, melainkan MySQL menyediakan sebuah aplikasi khusus untuk melakukan backup database, namanya adalah mysqldump
- [MYSQLDUMP](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html )

### 4. Restore Database.
- Selain melakukan backup database, di MySQL juga kita bisa melakukan proses restore data dari file hasil backup.
- Untuk melakukan restore database, kita bisa menggunakan aplikasi mysql client atau menggunakan perintah SOURCE di MySQL.

## Resources Used 📚

- [Belajar database](https://youtu.be/xYBclb-sYQ4?si=jVKlx96naapzUJWd)
