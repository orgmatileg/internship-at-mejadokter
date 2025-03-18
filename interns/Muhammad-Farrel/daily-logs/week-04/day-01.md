# laporan pembuatan erd e-commerce

---

### daftar yang sudah dibuat :  
- entity : 
    - entity customer : id, nama, alamat, nomor hp
    - entity penjual : id, nama, alamat, nomor hp, rating
    - entity barang : id, nama, harga, id_penjual(fk), stok, rating, id_kategory
    - entity kategory : id, nama
    - entity keranjang : id, id_barang, jumlah, total
    - entity transaksi : id, id_keranjang, payment, jasa_kurir, id_customer, tanggal
    - entity pesanan : id, id_transaksi, status

- relasi antar entity

**note**  
mohon koreksi apabila terdapat kesalahan
