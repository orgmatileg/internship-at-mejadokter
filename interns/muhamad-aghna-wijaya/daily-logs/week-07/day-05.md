# Daily Learning Log - [09/05/2025]

## Today's Focus

- [Belajar bahasa pemrograman Javascript]

## What I Learned

### Recursive Function
- Recursive function adalah kemampuan function memanggil function dirinya sendiri
- Kadang memang ada banyak problem, yang lebih mudah diselesaikan menggunakan recursive function, seperti contohnya kasus factorial

### Function Generator
- Function generator adalah function yang digunakan untuk membuat data generator
- Generator adalah data yang bisa di interasi seperti Array
- Untuk membuat function generator, kita perlu menggunakan tanda * (bintang) setelah kata function
- Dan untuk mengembalikan data di tiap iterasi, kita bisa gunakan kata kunci yield diikuti datanya

### Arrow Function
- Arrow function adalah alternatif pembuatan function yang lebih sederhana dari function biasanya
- Namun terdapat limitasi dan juga tidak bisa digunakan di semua situasi
- Dinamakan arrow function karena menggunakan tanda => (seperti panah)
- Berikut contoh beberapa kekurangan arrow function :
   - tidak memiliki fitur arguments object
   - tidak bisa menggunakan function generator
   - tidak bisa mengakses this (yang nanti akan dibahas di function di object)
   - tidak bisa mengakses super (yang nanti akan dibahas di JavaScript Object Oriented   Programming)

### Closure
- Closure adalah kombinasi function dan bundel referensi ke data disekitarnya.
- Oke agak membingungkan memang, apalagi untuk yang baru pertama belajar
- Kita sudah tahu bahwa local scope tidak bisa diakses di luar scope nya
- Dengan kemampuan closure, kita bisa membuat sebuah function di local scope dan referensi ke data di sekitar local scope tersebut, keluar scope nya

### Object Method
- Pada tipe data object, kita sudah membahas tentang property di object
- Karena sebenarnya function juga merupakan salah satu tipe data, jadi function pun sebenarnya bisa ditambahkan sebagai property di object
- Cara pembuatannya pun sama dengan function sebagai value
- Function di object kadang disebut juga sebagai Object Method

### Kata Kunci this
- Kata kunci this adalah referensi ke object milik siapa
- Tiap lokasi kata kunci this, bisa berbeda-beda referensi pemilik nya
- Dalam Object Method, this merupakan referensi ke object pemilik function nya
- Di global scope, this merupakan referensi ke global object (di browser biasanya Window)
- Dalam function, this merupakan referensi ke global object (di browser biasanya Window)
- Di function dengan strict mode (akan dibahas nanti), this adalah undefined
- Dalam event, this merupakan referensi ke element yang menerima event (dibahas di materi Document Object Model)

### Arrow Function di Object
- Sebelumnya kita sudah bahas tentang Arrow Function
- Arrow Function juga bisa kita gunakan di sebagai Object Method
- Namun perlu diketahui, Arrow Function tidak bisa digunakan untuk mengakses arguments   object, function generator, kata kunci this dan kata kunci super (dibahas di materi JavaScript Object Oriented Programming)
- Jadi pastikan gunakan Arrow Function hanya memang ketika kita tidak butuh fitur-fitur diatas

### Getter dan Setter
- Getter dan Setter adalah kemampuan membuat function yang berbeda untuk mengambil data (Getter) dan mengubah data (Setter) pada sebuah property di Object
- Dengan menggunakan Getter dan Setter, kita bisa melakukan hal apapun dalam function sebelum sebuah property di akses atau diubah, misal menambah validasi dan lain-lain

### Masalah Variable var
- Sebelumnya sudah dijelaskan bahwa penggunaan var sudah tidak direkomendasikan lagi, dan diganti dengan let
- Pertanyaannya kenapa?
- Alasan var tidak direkomendasikan digunakan lagi adalah, karena var tidak memiliki block scope, artinya dia tidak mengikat ke local scope yang sebelumnya sudah kita bahas
- Karena masalah ini, var bisa tidak terprediksi
- Kita akan buat contoh penggunaan var dan let

### Destructuring
- Destructuring adalah fitur yang bisa digunakan untuk membongkar value-value di array atau object ke dalam variable-variable
- Fitur ini sangat mempermudah kita ketika ingin mengambil data dari array atau object tanpa harus melakukan pengambilan data satu persatu

### Strict Mode
- Saat kita menjalankan kode program JavaScript, secara default kode program kita berjalan dalam mode tidak strict, atau istilahnya sloppy mode
- Pada ECMAScript 5, diperkenalkan mode strict, dimana ketika strict mode dijalankan, maka akan merubah beberapa cara kerja di JavaScript, seperti :
    - Merubah beberapa JavaScript error dari yang tadinya silent error, menjadi throw error (terlihat)
    - Memperbaiki beberapa kesalahan engine JavaScript untuk optimisasi
    - Menolak beberapa kode perintah yang kedepannya akan digunakan di ECMAScript
- [Strict Mode.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode) 

### Debugger
- Debugger digunakan untuk melakukan proses debugging
- Debugging adalah proses mencari bug (masalah) yang biasa terjadi di kode program kita
- Dengan debugger kita bisa menghentikan kode program di posisi yang kita inginkan (breakpoint), lalu melihat semua isi variable yang ada pada saat kode program sedang berhenti
## Resources Used 📚
[tutorial_javascript](https://youtube.com/playlist?list=PL-CtdCApEFH8SS0Gsj9_a0cC0jypFEoSg&si=2GXqQE6Pyee4ME5O)





