# Daily Learning Log - [28/04/2025]

## Today's Focus

- [Belajar bahasa pemrograman Javascript]

## What I Learned

- [sejarah]

  - javascript(js) dibuat pada tahun 1995. programmer dari netscape bernama Brandan Eich membuat bahasa pemrograman scripting.
  - awalnya bernama mocha, lalu berubah menjadi LiveScript, akhirnya menjadi Javascript.

- [server]

  - awalnya Javascript berjalan di client side(browser), namun semenjak keluar teknologi NodeJS yang bisa digunakan untuk menjalankan javascript tanpa browser sehingga sekrang bisa membuat aplikasi di server.
  - karenanya javascript disebut bahasa fullstack.

- [standarisasi]

  - javascript hampir diadopsi oleh sebuah aplikasi browser, akhirnya dibuat standarisasi bernama ECMAScript yang dilakukan oleh organisasi ECMA internasional.
  - dengan standar ini kita bisa menjalankan javascript disemua browser.
  - javascript dan ECMA script itu sama.

- [hubungan_dengan_java]

  - javascript dan java itu berbeda
  - java itu bahasa pemrograman lain, dan tidak ada hubungannya dengan javascript meskipun sama sama memiliki kata java.

- [Program_Hello_World]

  - memunculkan line Hello world dengan code
    document.writeln("hello word")
  - code javascript sejatinya memerlukan titik koma (;), namun javascript tidak mewajibkan penggunaannya, jadi code akan tetap berjalan meskipun kita tidak menyertakan titik koma

- [javascript_dasar]
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
  - ### tipe data string
    - string itu tipe data text, tipe data yang berisi kumpulan kosong atau lebih karakter, seperti hello word
    - untuk membuat string perlu menggunakan petik dua("") atau petik satu('')
    - untuk menambah atau menggabungkan string kita menggunakan operator +
    - contoh : ("nama saya" + "Farrel");
    - escape sequence, merupakan karakter khusus seperti enter atau tab, berikut excape sequence.
      - \n = enter
      - \t = tab
      - \' = '
      - \" = "
      - \\ = \
      - contoh : ("hello \n world")

  - ### variable
    - variable yaitu tempat untuk menyimpan data
    - untuk membuat variable menggunakan kata kuci 'var' diikuti nama variabl, contoh = var nama;
    - javascript itu dynamic languange, artinya tipe data pada variable bisa berubah ubah.
    - untuk mengisi kita dapat menggunakan tanda '=', contoh : var nama = "farrel";
    - untuk mengubah isi variable bisa dengan nama variable diikuti '=' lalu data baru, contoh : nama = "M_Farrel";
    - apabila sudah membuat variable, kita bisa menggunakan data di dalam variable kapanpun dengan menyebut nama variable.

  - ### let dan const
    - sejak tahun 2015, semenjak ecmascript2015, kata kunci var tidak lagi direkomendasikan untuk membuat variable
    - sejak saat itu kata kunci untuk membuat variable ditambah yaitu let dan const
    - contoh : let nama = "farrel";
    - kata kunci const berbeda dengan let dan var, kata kunci const tidak bisa diubah sesuka hati. data yang ada di dalem const tidak boleh dirubah
    - contoh : const = "titik";
  
  - ### operator matematika
    - pertambahan (+)
    - pengurangan (-)
    - perkalian (*)
    - perpangkatan (**)
    - pembagian (/)
    - sisa bagi (%)
  
  - ### operator perbandingan
    - operasi untuk membandingkan 2 buah data, menghasilkan true dan false
    - lebih dari (>)
    - kurang dari (<>)
    - lebih dari atau sama dengan (>=)
    - kurang dari atau sama dengan (<=)
    - sama dengan (==) 
    - sama dengan dan sama tipe (===)
    - tidak sama dengan (!=)
    - tidak sama dengan atau tidak sama tipe (!==)
    - contoh : if (nama=="farrel") {};

  - ### operator logika
    - menghasilkan true dan false
    - dan (&&)
    - atau (||)
    - kebalikan (!)
    - contoh : if (benar || salah) {};

  - ### console
    - logging adalah mekanisme yang biasa dilakukan oleh programmer untuk menampilkan informasi dari aplikasi yang sedang berjalan tanpa menggangu alur kerja aplikasi tersebut.
    - console method 
      - console.info(...), sama dengan console.log() untuk memberi informasi
      - console.warn(...), untuk memberi peringatan
      - console.error(...), untuk memberitahu informasi error
      - console.table(...), untuk memberi informasi dalam bentuk table.
      - contoh : console.log(nama); 
  
  - ### string template
    - pada kasus tertentu, operator + bisa menjadi ribet jika digunakan untuk string, oleh karena itu kita gunakan string template
    - untung mengunakan string template menggunakan backtick(`)
    - contoh : const template = `name : ${namasaya}`;
    - contoh : const template = `name : ${namasaya} ${namakamu};
    - kita juga bisa menambah expression, contoh : document.writeln(`halo nilai kamu itu ${nilai>200}`);
    - multiline string, satu syntaks yang berbeda line, string template mendukung multiline string. contoh : 
    - let kalimat = `halo kamu, 
      apa kabar,
      oke oke aja kan?,
      keren`; 

  - ### konversi tipe data
    - terkang kita perlu memastikan input data berupa number dan bukan string, oleh karena itu kita gunakan kata kunci utuk mengkonversinya
    - parseInt(string), mengkonversi string ke number
    - parseFloat(string), mengkonversi string ke number(bilangan pecahan)
    - Number(string), mengkonversi dari string ke number(bulat dan pecahan)
    - Number.toString, mengkonversi number ke string
    - contoh : parseInt("2")
    - NaN (not a number), jika data string kita konversi ke number bukanlah data yang valid, maka hasil tersebut adalah NaN, jika di operasikan dengan number lain maka hasilnya tetap NaN
    - parseint dan parse float akan menerima string walaupun terdapat huruf dibelakang selama diawali dengan angka, contoh : parseInt("1salah");
    - isNaN() function, digunakan ketika kita ingin mengecek apakah sebuah number itu NaN atau bukan, maka kita gunakan isNaN, contoh : isNaN("hai");
## Resources Used 📚
[tutorial_javascript](https://youtu.be/SDROba_M42g?si=KB1hDbnVRNBgtCVw)
-
