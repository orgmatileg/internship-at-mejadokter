# Daily Learning Log - [14/05/2025]

## Today's Focus

- [Belajar bahasa pemrograman Javascript]

## What I Learned

### Encode
- Saat kita menulis URL, kadang kita ingin menambahkan informasi tambahan seperti query parameter misalnya
- URL sendiri sudah memiliki standard encoding penulisan URL
- Standard encoding ini dilakukan agar penulisan URL aman ketika diterima oleh server
- Aman disini dalam artian informasi URL tidak berubah
- Contoh paling sederhana, misal, walaupun kita bisa mengirim spasi dalam url, tapi disarankan untuk di encode agar nilai spasi tidak benar-benar terlihat seperti spasi pada URL nya


### Base64
- Base64 merupakan binary to text encoding, representasi binary data dalam format string
- Base64 merupakan format text data yang aman untuk dikirimkan di web
- Base64 merupakan encoding yang biasanya digunakan ketika perlu mengirim data dari client ke server
- Karena encoding Base64 merupakan text, oleh karena itu sangat aman digunakan pada query param URL atau text body dalam form
- [Base64](https://developer.mozilla.org/en-US/docs/Glossary/Base64 )

### Eval
- Eval merupakan function yang digunakan untuk mengeksekusi kode JavaScript dari String
- Fitur ini sangat menarik, namun perlu hati-hati ketika menggunakannya
- Jika sampai salah penggunaan, maka bisa jadi kita malah mengeksekusi kode program yang bisa menyebabkan masalah keamanan di website kita
- [Eval JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval)


### Latar Belakang JavaScript Modules
- Dahulu kode program JavaScript biasanya dimulai dari kode yang kecil dan sedikit disetiap halaman, jadi jarang sekali kita akan menggunakan kode JavaScript dengan ukuran besar dalam satu halaman web
- Namun saat ini, kebutuhan web sudah berbeda, semenjak makin populernya framework-framework JavaScript untuk membuat FrontEnd, kebutuhkan pembuatan kode JavaScript semakin kompleks dan besar
- Oleh karena itu, sudah seharusnya saat ini, saat membuat kode JavaScript, kita perlu melakukan mekanisme memotong-motong kode JavaScript, sehingga tidak terlalu kompleks dan banyak dalam satu file JavaScript

    #### - JavaScript Modules
    - JavaScript Modules merupakan fitur dimana kita bisa membuat module (kode JavaScript yang bisa digunakan ulang) untuk kode JavaScript lain
    - JavaScript Modules diawali pada teknologi bernama NodeJS, selanjutnya banyak library yang mengadopsi penggunaan JavaScript Modules di NodeJS agar bisa berjalan di Web Browser, seperti library CommonJS, AMD, RequireJS, dan lain-lain
    - Namun untungnya, saat ini Browser modern sudah banyak mendukung JavaScript Modules, kecuali jika masih menggunakan Internet Explorer


### Live Server
- Saat kita menggunakan fitur JavaScript Module, sangat disarankan untuk menjalankan kode JavaScript kita dalam Web Server
- Hal ini karena spesifikasi dari JavaScript module meminta secara default kode JavaScript perlu di satu domain server yang sama, jika kita membuat file html menggunakan URL file://, maka dikhawatirkan akan terjadi error CORS (Cross Origin Resource Sharing)

### Tanpa Module
- Sebelum kita membahas JavaScript Module, sekarang kita akan coba dulu tanpa menggunakan module
- Saat kita membuat file JavaScript, lalu kita load file JavaScript tersebut di web, secara default semua kode JavaScript di file tersebut bisa diakses, baik itu variable, function atau class


### Membuat Module
- Membuat module sangat sederhana, kita cukup membuat file JavaScript saja
- Yang membedakan adalah, saat kita akan meload file JavaScript dari HTML, kita tidak menggunakan type javascript lagi, melainkan menggunakan type module











## Resources Used 📚
[tutorial_javascript](https://youtube.com/playlist?list=PL-CtdCApEFH8SS0Gsj9_a0cC0jypFEoSg&si=2GXqQE6Pyee4ME5O)