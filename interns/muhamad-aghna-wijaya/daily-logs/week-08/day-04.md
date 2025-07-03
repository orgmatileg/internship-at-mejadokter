# Daily Learning Log - [15/05/2025]

## Today's Focus

- [Belajar bahasa pemrograman Javascript]

## What I Learned

### Export
- export merupakan kata kunci yang digunakan untuk mengekspos kode dari sebuah module
- export bisa ditambahkan diawal sebuah variable, function atau class

### Import
- Export digunakan untuk mengekspos kode di module, jika kita ingin menggunakan kode yang sudah di ekspos di module, kita bisa menggunakan kata kunci import
- Cara menggunakan kata kunci import adalah sebagai berikut :
import {namaFunction, namaVariable, NamaClass} from “lokasi-module.js”
- Module hanya bisa digunakan di module lain, jadi pastikan ketika  membuat script, kita harus menggunakan type module
- Saat menggunakan import, kita tidak perlu lagi menambahkan script module src satu per satu, karena sudah di handle oleh Browser secara otomatis ketika menggunakan module

### Variable di Module
- Salah satu hal yang membingungkan pada variable di JavaScript adalah ketika kita membuat variable di global scope, maka variable tersebut bisa diubah nilainya oleh file JavaScript lain
- Saat kita menggunakan module, ketika kita buat variable, maka variable tersebut hanya berada pada module tersebut, tidak bisa digunakan di module lain

### Class di Module
- Selain function dan juga variable, di module juga kita bisa menambahkan class
- Secara default, class tersebut hanya bisa diakses dari dalam module nya saja, tidak bisa diluar module
- Jika kita ingin mengekspos class yang kita buat, kita juga bisa menggunakan kata kunci export di awal deklarasi class nya

### Export Multiple
- Sebelumnya kita selalu menggunakan kata kunci export diawal variable, function atau class
- Sebenarnya kita bisa menggunakan export sekaligus beberapa data sekaligus, caranya cukup gunakan  perintah :
   - export { variable, function, class, danLainLain }

### Alias
- Saat kita membuat aplikasi JavaScript, semakin lama kemungkinan module akan semakin banyak
- Dan bisa saja akan ada nama variable atau nama function atau nama class yang sama antar module
- Hal ini akan menyulitkan ketika ada module yang menggunakan beberapa module, namun ternyata variable, function atau class nya memiliki nama yang sama
- Untungnya, module memiliki fitur alias, dimana kita bisa mengubah nama variable, function atau class nya







## Resources Used 📚
[tutorial_javascript](https://youtube.com/playlist?list=PL-CtdCApEFH8SS0Gsj9_a0cC0jypFEoSg&si=2GXqQE6Pyee4ME5O)