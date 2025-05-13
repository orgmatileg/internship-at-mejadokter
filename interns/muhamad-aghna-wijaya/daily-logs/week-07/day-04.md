# Daily Learning Log - [08/05/2025]

## Today's Focus

- [Belajar bahasa pemrograman Javascript]

## What I Learned

### Operator Logika di Non Boolean
- Sebelumnya kita sudah tahu bahwa operator logika AND (&&) dan OR (||)  digunakan untuk dua data boolean
- Namun berbeda di JavaScript, kita bisa menggunakan operator logika AND dan OR untuk tipe data non boolean

### For Loop
- For adalah salah satu kata kunci yang bisa digunakan untuk melakukan perulangan
- Blok kode yang terdapat di dalam for akan selalu diulangi selama kondisi for terpenuhi
### While Loop
- While loop adalah versi perulangan yang lebih sederhana dibanding for loop
- Di while loop, hanya terdapat kondisi perulangan, tanpa ada init statement dan post statement

### Do While Loop
- Do While loop adalah perulangan yang mirip dengan while
- Perbedaannya hanya pada pengecekan kondisi
- Pengecekan kondisi di while loop dilakukan di awal sebelum perulangan dilakukan, sedangkan di do while loop dilakukan setelah perulangan dilakukan
- Oleh karena itu dalam do while loop, minimal pasti sekali perulangan dilakukan walaupun kondisi tidak bernilai true

### Break & Continue
- Pada switch statement, kita sudah mengenal kata kunci break, yaitu untuk menghentikan case dalam switch
- Sama dengan pada perulangan, break juga digunakan untuk menghentikan seluruh perulangan.
- Namun berbeda dengan continue, continue digunakan untuk menghentikan perulangan saat ini, lalu melanjutkan ke perulangan selanjutnya

### Label
- Label merupakan penanda yang bisa digunakan dengan kata kunci break dan continue
- Secara default saat kita melakukan break atau continue, dia akan melakukan terhadap perulangan dimana kode break dan continue itu digunakan
- Dengan menggunakan label, kita bisa melakukan break dan continue terhadap perulangan yang kita inginkan, asalkan pada perulangannya kita gunakan label
- Untuk membuat label, kita bisa gunakan nama label lalu diikuti dengan : (titik dua)

### For In
- For In merupakan perulangan for yang digunakan untuk mengiterasi seluruh data property di object atau index di array
- Walaupun for in bisa digunakan untuk Array, namun tidak direkomendasikan untuk Array, karena biasanya kita jarang sekali butuh data index untuk Array, kita bisa menggunakan For Of (yang dibahas setelah ini)

### For Of
- Jika For In digunakan untuk melakukan iterasi property atau index, berbeda dengan For Of, ini digunakan untuk melakukan iterasi terhadap isi value dari iterable object, seperti Array, String dan lain-lain
- For of tidak bisa digunakan untuk melakukan iterasi data di object, karena object bukanlah iterable.

### With Statement
- With statement merupakan fitur yang digunakan untuk menurunkan sebuah scope data
- Dengan menggunakan with statement, kita bisa mengakses property dalam sebuah data tanpa harus menyebut datanya

### Function
- Function adalah blok kode program yang akan berjalan saat kita panggil
- Sebelumnya kita sudah menggunakan function writeln() untuk menampilkan tulisan di html
- Untuk membuat function, kita bisa menggunakan kata kunci function, lalu diikuti dengan nama function, kurung () dan diakhiri dengan block kurung {}
- Kita bisa memanggil function dengan menggunakan nama function lalu diikuti dengan kurung ()
- Di bahasa pemrograman lain, function juga disebut dengan method

### Function Parameter
- Kita bisa mengirim informasi ke function yang ingin kita panggil
- Untuk melakukan hal tersebut, kita perlu menambahkan parameter atau argument di function yang sudah kita buat
- Parameter ditempatkan di dalam kurung () di deklarasi method
- Parameter bisa lebih dari satu, jika lebih dari satu, harus dipisah menggunakan tanda koma

### Function Return Value
- Secara default, function itu tidak menghasilkan value apapun, namun jika kita ingin, kita bisa membuat sebuah function mengembalikan value
- Agar function bisa menghasilkan value, kita bisa menggunakan kata kunci return di dalam function nya.
- Dan di dalam block function, untuk menghasilkan nilai tersebut, kita harus menggunakan kata kunci return, lalu diikuti dengan data yang ingin kita hasilkan.
- Function hanya bisa mengembalikan satu data, jika kita ingin mengembalikan beberapa data sekaligus, kita bisa menggunakan Array sebagai return value nya

### Optional Parameter
- Secara default, parameter di function itu optional
- Artinya kita tidak wajib mengisi value nya ketika memanggil function
- Jika tidak ada value yang kita kirim ke parameter ketika memanggil function, maka secara otomatis parameter tersebut bernilai undefined

### Default Parameter
- Sekarang kita tahu bahwa parameter itu optional, artinya kita bisa tidak memberi value terhadap parameter
- Parameter juga bisa kita beri default value, artinya jika ketika kita tidak mengirim data ke parameter atau kita mengirim data undefined, maka secara otomatis parameter akan diisi oleh default value

### Rest Parameter
- Rest Parameter adalah fitur dimana kita bisa mengirim data sebanyak-banyak nya pada satu parameter, dan secara otomatis akan di konversi menjadi Array
- Untuk membuat rest parameter, ada ketentuannya
- Rest parameter hanya boleh ada satu di function, tidak boleh lebih dari satu
- Rest parameter hanya boleh berada di posisi paling akhir, tidak boleh di depan atau di tengah, kecuali memang cuma ada 1 parameter
- Di bahasa pemrograman lain, ada juga yang bilang ini adalah variable argument

### Function Sebagai Value
- Function tidak hanya bisa digunakan sebagai kode program yang dieksekusi, tapi bisa juga sebagai value
- Artinya, function bisa disimpan di variable, bisa juga dikirim melalui parameter ke function lainnya

### Anonymous Function
- Sebelumnya kita selalu membuat function dengan nama
- Kita juga bisa membuat function tanpa nama function, atau istilahnya adalah anonymous function
- Kita bisa buat anonymous function dalam sebuah variable atau bisa juga kita buat ketika mengisi parameter

### Function dalam Function
- Tidak ada batasan dimana kita bisa membuat function
- Termasuk jika kita ingin membuat function di dalam sebuah function, kita bisa melakukannya
- Function yang terdapat di dalam, kita sebut inner function
- Inner function hanya bisa diakses di tempat kita membuat function nya, tidak bisa diakses dari luar function nya

### Scope
- Scope merupakan area akses sebuah data
- Ada dua jenis scope, global scope dan local scope.
- Setiap kita membuat function, maka kita akan membuat local scope untuk function tersebut
- Data di global scope bisa diakses dari local scope, namun data di local scope hanya bisa di akses di local scope tersebut atau di scope local dibawahnya (dalam kasus function dalam function)
## Resources Used 📚
[tutorial_javascript](https://youtube.com/playlist?list=PL-CtdCApEFH8SS0Gsj9_a0cC0jypFEoSg&si=2GXqQE6Pyee4ME5O)














