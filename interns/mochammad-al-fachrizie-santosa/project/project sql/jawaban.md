1. Buat database dengan nama restoran.
Jawaban=
CREATE DATABASE restoran;

2. Buat tabel:  pegawai: id, nama, posisi  menu: id, nama_menu, harga  pesanan: id, id_pegawai, tanggal_pesanan  detail_pesanan: id, id_pesanan, id_menu, jumlah
Jawaban=
-- Tabel pegawai
CREATE TABLE pegawai (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nama VARCHAR(100),
    posisi VARCHAR(50)
);

-- Tabel menu
CREATE TABLE menu (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nama_menu VARCHAR(100),
    harga DECIMAL(10,2)
);

-- Tabel pesanan
CREATE TABLE pesanan (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_pegawai INT,
    tanggal_pesanan DATE,
    FOREIGN KEY (id_pegawai) REFERENCES pegawai(id)
);

-- Tabel detail_pesanan
CREATE TABLE detail_pesanan (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_pesanan INT,
    id_menu INT,
    jumlah INT,
    FOREIGN KEY (id_pesanan) REFERENCES pesanan(id),
    FOREIGN KEY (id_menu) REFERENCES menu(id)
);

3. Buat relasi antar tabel (gunakan foreign key).
Jawaban=
Sudah tersedia pada tabel di atas:
- pesanan.id_pegawai → pegawai.id
- detail_pesanan.id_pesanan → pesanan.id
- detail_pesanan.id_menu → menu.id

4. Tampilkan nama pegawai, nama menu, jumlah, dan tanggal pesanan menggunakan JOIN.
Jawaban=
SELECT 
    pegawai.nama AS nama_pegawai,
    menu.nama_menu,
    detail_pesanan.jumlah,
    pesanan.tanggal_pesanan
FROM detail_pesanan
JOIN pesanan ON detail_pesanan.id_pesanan = pesanan.id
JOIN pegawai ON pesanan.id_pegawai = pegawai.id
JOIN menu ON detail_pesanan.id_menu = menu.id;

5. Tampilkan semua menu dengan harga di atas 30.000.
Jawaban=
SELECT * FROM menu
WHERE harga > 30000;

6. Update harga menu dengan id = 1 menjadi 45.000.   7. Hapus data pesanan dengan id = 4.
Jawaban=
UPDATE menu
SET harga = 45000
WHERE id = 1;

7. Hapus data pesanan dengan id = 4.
Jawaban=
DELETE FROM detail_pesanan WHERE id_pesanan = 4;
DELETE FROM pesanan WHERE id = 4;

8. Hitung total item makanan yang terjual (jumlah) menggunakan agregat.
Jawaban= 
SELECT SUM(jumlah) AS total_item_terjual
FROM detail_pesanan;