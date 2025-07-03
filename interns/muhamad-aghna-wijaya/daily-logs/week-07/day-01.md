# Daily Learning Log - [05/05/2025]

## Today's Focus

- [Belajar bahasa pemrograman Javascript]

## What I Learned

- ### sejarah

  - javascript(js) dibuat pada tahun 1995. programmer dari netscape bernama Brandan Eich membuat bahasa pemrograman scripting.
  - awalnya bernama mocha, lalu berubah menjadi LiveScript, akhirnya menjadi Javascript.

- ### server

  - awalnya Javascript berjalan di client side(browser), namun semenjak keluar teknologi NodeJS yang bisa digunakan untuk menjalankan javascript tanpa browser sehingga sekrang bisa membuat aplikasi di server.
  - karenanya javascript disebut bahasa fullstack.

- ### standarisasi

  - javascript hampir diadopsi oleh sebuah aplikasi browser, akhirnya dibuat standarisasi bernama ECMAScript yang dilakukan oleh organisasi ECMA internasional.
  - dengan standar ini kita bisa menjalankan javascript disemua browser.
  - javascript dan ECMA script itu sama.
- ### hubungan_dengan_java

  - javascript dan java itu berbeda
  - java itu bahasa pemrograman lain, dan tidak ada hubungannya dengan javascript meskipun sama sama memiliki kata java.

- [Program_Hello_World]

  - memunculkan line Hello world dengan code
    document.writeln("hello word")
  - code javascript sejatinya memerlukan titik koma (;), namun javascript tidak mewajibkan penggunaannya, jadi code akan tetap berjalan meskipun kita tidak menyertakan titik koma

- ### javascript_dasar
  - ### Komentar
    - untuk menambahkan komentar hanya untuk satu baris menggunakan //, contoh(//ini komentar)
    - untuk komentar lebih dari satu baris menggunakan /**/, contoh (/*ini komentar*/)
  - ### tipe data number
    - di javascript hanya ada satu tipe data number, bisa berupa bilangan bulat atau desimal. di javascript semua disatukan
    - contoh = Document.writeln(100);
    - contoh = Document.writeln(60.5);
    - number notation pada javascript memiliki default 10, javascript juga mendukung binary(0b), hexadecimal(0x), octal(0o).
  - ### tipe data boolean
    - boolean hanya memiliki 2 data, yaitu false (salah) dan true (benar).

## Code Snippets 💻
```typescript
<body>
    <script>
        document.writeln("<p>hello word</p>")
        document.writeln("<p>hello word</p>")
    </script>
</body>

<body>
    <script src="script/hello.js"></script>
</body> (document.writeln("hello word") *code yg ad di file hello.js*)
```
## Resources Used 📚
[tutorial_javascript](https://youtube.com/playlist?list=PL-CtdCApEFH8SS0Gsj9_a0cC0jypFEoSg&si=2GXqQE6Pyee4ME5O)