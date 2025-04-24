# database perpustakaan - [24-04-2025]

## jawaban soal study kasus

- Buat database dengan nama perpustakaan
  jawab :

  - CREATE DATABASE perpustakaan;

- Buat tabel:
  anggota: id, nama, alamat

  buku: id, judul, penulis, stok

  peminjaman: id, id_anggota, id_buku, tanggal_pinjam, tanggal_kembali
  jawab :

  - anggota :
    CREATE TABLE anggota (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(50) not null,
    alamat VARCHAR(50) not null
    )ENGINE=INNODB;
  - buku :
    CREATE TABLE buku (
    id INT AUTO_INCREMENT PRIMARY KEY,
    judul varchar(50) not null,
    penulis Varchar(50) not null,
    stok INT NOT NULL DEFAULT 0
    )
  - peminjaman :
    CREATE TABLE peminjaman (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_anggota INT NOT NULL,
    id_buku INT NOT NULL,
    tanggal_pinjam TIMESTAMP not null,
    tanggal_kembali date not null,
    FOREIGN KEY(id_anggota) REFERENCES anggota(id),
    FOREIGN KEY(id_buku) REFERENCES buku(id)
    )ENGINE=INNODB;

- Buat relasi foreign key antara peminjaman dengan anggota dan buku.
  jawab :

  - FOREIGN KEY(id_anggota) REFERENCES anggota(id),
  - FOREIGN KEY(id_buku) REFERENCES buku(id)

- Tampilkan nama anggota, judul buku, dan tanggal pinjam menggunakan JOIN.
  jawab :

  - SELECT anggota.nama, buku.judul, tanggal_pinjam FROM peminjaman JOIN anggota on anggota.id = peminjaman.id_anggota JOIN buku ON buku.id = peminjaman.id_buku;

- Tampilkan semua data buku yang stoknya kurang dari 5.
  jawab :

  - SELECT \* FROM buku WHERE stok<10;

- Ubah stok buku id = 1 menjadi 10.
  jawab :

  - UPDATE buku SET stok=10 WHERE id = 1;

- Hapus data peminjaman dengan id = 3.
  jawab :

  - DELETE FROM peminjaman WHERE id=3;

- Hitung jumlah total buku yang tersedia (stok) dengan fungsi agregat.
  jawab :

  - SELECT SUM(stok) FROM buku;

- insert data :
  -INSERT INTO anggota(nama, alamat) VALUES('Farrel', 'grandharmony'), ('eji', 'sukmaindah'), ('agna', 'citraland');

  INSERT INTO buku(judul, penulis, stok) VALUES('hujan', 'tereliye', '5'), ('funiculi funicula', 'toshida', '10'), ('janji', 'tereliye', '2');

  INSERT INTO peminjaman(id_anggota, id_buku, tanggal_kembali) VALUES(1, 2, '2025-05-01'), (3, 1, '2025-05-10'), (2, 3, '2025-04-30');

- [videos](https://drive.google.com/drive/folders/185Rv6z5QObxyclDO9mFDKu-fp_CiA-am?usp=drive_link)
