# Databases - [06-03-2025]

## Today's Focus

- fokus memperdalam ilmu databse dari video yang telah diberikan

## What I Learned

- [Tipe_data]
    - Number : 
        - integer
            tipe data yang digunakan untuk menyimpan number(integer menyimpan bilangan bulat), integer ada 2 yaitu signed dan unsigned yang dibedakan oleh ukuran. integer unsigned tidak bisa bernilai negatif. tipe tipe integer ada tinyint, smallint, mediumint, int, bigint.

        - Floating point
            ada 2 tipe yaitu float dan double, terdapat signed dan unsigned juga. floating point digunakan untuk menyimpan bilangan pecahan, contoh : 3,14

        - Decimal
            tipe data khusus yang bisa ditentukan jumlah precision dan scalenya. terdapat min dan max.

        - number attribute
            tipe data tambahan untuk number, ada 2 tipe yaitu TYPE(N) dan ZEROFILL

    - string :
        - tipe data string merupakan tipe data untuk menyimpan text
        - char dan varchar 
            kita bisa menentukan jumlah panjang maksimal karakter yang bisa ditampung oleh char dan varchar. contoh : CHAR(10), VARCHAR(10). 
            perbedaan pada char dan varchar adalah cara penyimpanannya, misal kita memasukan char(4) dengan nilai kosong maka di penyimpanan akan muncul '    ' dan storage requirednya 4 bytes, sementara varchar(4) akan muncul '' dan storage requirednya 1 bytes.

        - text
            text tidak bisa ditentukan jumlah panjang maksimal karakternya. ada 4 tipe text yaitu TINYTEXT, TEXT, MEDIUMTEXT, LONGTEXT.
        
        - enum 
            tipe data string yang bisa ditentukan pilihan pilihannya, contoh ENUM("pria", 'wanita') maka hanya bisa menerima data pria atau wanita

    - Date dan time
        - yaitu tipe data yang digunakan untuk menyimpan waktu dan tanggal pada sebuah sistem, tipe tipe date and time yaitu :
            - DATE : YYYY-MM-DD = 2020-10-10
            - DATETIME : YYYY-MM-DD HH:MM:SS = 2020-10-10 10:10:10
            - TIMESTAMP : YYYY-MM-DD HH:MM:SS = 2020-10-10 10:10:10
            - TIME : HH:MM:SS = 10:10:10
            - YEAR : YYYY = 2020
    
    - Boolean
        - boolean hanya ada 2 data, yaitu TRUE dan FALSE

    - tipe data lainnya 
        - BLOB
        - SPATIAL
        - JSON
        - SET

- [TABLE]
    data biasanya dimuat dalam bentuk tabel di mysql, ditiap table yang kita buat wajib kita buat kolom kolomnya, kita juga bisa membuat, menghapus, mengedit table
    - Storage Engines
        mysql menggunakan storage engine untuk mengelola table table kita, yang paling populer adalah storage engine innoDB
    - membuat, mengubah, menghapus tabel(saya menggunakan localhost dan xampp karena belum menginstal mysql)
    - mempelajari syntaks mysql seperti show, create, alter table, modify, add, drop
    - insert data ke table yang sudah dibuat di database.


- [Konsep yang dipahami]
    konsep database dengan mysql, seperti pembuatan tabel, pengeditan tabel, penghapusan kolom. saya juga paham sintaks mysql di localhost xampp

- [Challenges yang dihadapi]
    bingung memilih mysql atau xampp yang harus digunakan
## Resources Used 📚

-
