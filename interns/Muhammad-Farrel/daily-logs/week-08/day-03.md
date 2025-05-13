# Daily Learning Log - [08/05/2025]

## Today's Focus

- [melanjutkan_pembelajaran_javascript]

## What I Learned

- [With_statement]
  - fitur yang digunakan untuk menurunkan sebuah scope data
  - dengan ini kita mengakses property dalam sebuah data tanpa harus menyebut datanya, misalnya seperti person.name
  - dengan with statement kita tidak perlu menuliskan datanya
  - with (orang2) {
    document.write(`nama : ${namaawal} - ${namaakhir}`)}.
  - namun with statement jarang digunakan, bahkan tidak pernah, karena bisa menciptakan kode ambigu. misalnya jika kita melakukan with dengan person yang memiliki namaawal, ternyata kita juga memiliki var namaawal. kita jadi bingung nantinya.

- [function]
  - blok kode program yang akan berjalan saat kita panggil
  - untuk menggunakan function, bisa menggunakan kata kunci function diikuti dengan nama function() dan diakhiri {}
  - untuk memanggil function tersebut kita bisa mengetik nama_function()
  - di bahasa lain, function disebut juga method
  - function hai() {program}

- [function_parameter]
  - kita bisa mengirim informasi ke function yang ingin kita panggil
  - untuk itu kita butuh parameter atau argument di function yang sudah dibuat
  - parameter ditempatkan di dalam kurung(), dan parameter bisa lebih dari satu.
  - function nama(namaawal, namaakhir) {program}
    nama("andi", "hermawan")
  - namun terkadang kita juga bisa kita juga bisa memasukan parameter dengan sebuah variable, saat function digunakan kita bisa memasukan nama variablenya. misalnya tambah(var_a, var_b);

- [Function_return_value]
  - secara default, function itu tidak mengembalikan value apapun, namun jika kita ingin, kita bisa mengembalikan value dari sebuah function
  - untuk itu kita bisa menggunakan kata kunci return diikuti data yang ingin dihasilkan
  - tapi di function kita hanya bisa mengembalikan satu data, tapi jika ingin sekaligus kita bisa menggunakan array
  - misalnya kita punya function tambah(a, b), lalu kita isi sebuah variable dengan valuenya tambah(10, 20), lalu kita console variable tersebut maka akan menghasilkan hasil dar function tersebut.
  - function kurang(c, d) {
      return c - d;
    }
    let hasil = kurang(10, 5);
    console.log(hasil);
  - hasil di atas adalah 5, dimana hasil dari function disimpan di variablenya.
  - cara agar return bisa lebih dari satu, dimana setiap return itu berbeda beda, maka bisa kita gunakan if else.
  - apabila ingin menghentikan eksekusi, bisa menggunakan return, karena apabila suatu kode return berjalan, maka kode setelah return tidak akan dieksekusi
  - function stopreturn(arrayy, searchValue) {
        for (const element of arrayy) {
            if (element === searchValue) {
                return true
            }
        }
        return false
    }

- [optional_parameter]
  - secara default, parameter di function itu optional, jaid kita sebenernya tidak wajib mengisi parameter sebuah function.
  - jadi apabila kita tidak memasukan parameter yang tersedia, dianggap undefined

- [default_parameter]
  - parameter juga bisa kita beri default value. jika kita tidak mengirim data ke parameter, maka default value yang akan dihasilkan.
  - caranya function umursaya(umur = "unknown"){}
  - apabila kita tidak mengisi umur, maka yang ditampilkan adalah unknown
  - jika kita mengisi dengan undefined, maka yang ditampilkan juga unknown, tapi berbeda dengan null, karena jika null yang ditamplkan adalah null

- [Rest_parameter]
  - rest parameter adalah fitur dimana kita bisa mengisi data sebanyak banyaknya pada satu parameter, dan akan dikonversi menjadi array.
  - ada ketentuannya, yaitu rest parameter hanya boleh ada satu pada function, hanya boleh berada di posisi paling akhir(kecuali jika hanya 1 parameter)
  - untuk menggunakannya, function sum(nama, ...data){}
  - dengan menambahkan titik 3, maka akan mengubahnya menjadi array.
  - terkadang kita sudah memiliki data array dan ingin memasukan ke rest area, namun jika dicoba maka akan number di array tidak akan sesuai. untuk itu ada yang namanya spead syntaks
  - spead syntaks berguna untuk mengubah array menjadi parameter, untuk mengunakannya kita bisa menambahkan titik 3(...) diikui arraynya
  - contoh : const array = sum(...namaarray)
  - arguments object, fitur dimana kita bisa mengambil semua parameter dalam bentuk array dengan menggunakan object bernama arguments, namun lebih sering digunakan rest parameter.

- [function_sebagai_value]
  - function tidak hanya digunakan sebagai kode program, tetapi juga bisa sebagai value sebuah variable
  - let hitung = sum; dimana sum adalah nama function dan tidak perlu buka tutup kurung, karena jika menggunakan kurung dianggap memanggil function
  - function sayhello(nama) {
        document.write(`<h1>hello ${nama}</h1>`)
    }
    let say = sayhello;
    function givemename(calllback) {
        calllback("farrel")
    }
    givemename(say)

- [anonymous_function]
  - kita bisa membuat function tanpa nama
  - kita bisa buat anonymous function didalam sebuah variable.
  - let anonymous = function (parameter) {}
  - untuk menggunakannya kita panggil nama variable diikuti parameter jika perlu di isi
  - anonymous function juga bisa digunakan di parameter
  - namafunction(function(parameter){});

- [function_dalam_function]
  - tidak ada batasan saat kita membuat function dimana, termasuk ketika kita membuat function dalam function. function dalam function itu disebut inner function
  - tapi inner function hanya bisa diakses di tempat kita membuat functionnya, tidak bisa diluar functionnya
  - function outer(){
      function inner(){}
      inner()
    }
  
-[scope]
  - scope merupakan area akses sebuah data
  - data yang sudah kita buat itu bisa diaksesnya dimana aja gitu
  - ada 2 scope, yaitu local scope dan global scope
  - setiap kita membuat function, maka kita akan membuat local scope untuk function tersebut
  - di data global scope bisa diakses dari local scope, namn data di local scope hanya bisa diakses di local scope tersebut atau di local scope di bawahnya(seperti pada inner function)
  - contoh global scope tuh seperti saat kita membuat variable, berati variable yang kita buat itu bisa diakses dari mana pun
  - sementara local scope itu seperti data yang kita buat dalam function, seperti sebuah variable yang tersimpan di variable.
  
- [recursive_function]
  - yaitu kemampuan function untuk memanggil functionnya sendiri
  - kadang banyak problem yang lebih mudah diselesaikan dengan recursive function daripada pengulangan
  - contoh : function recurfactor(n) {
                  if (n === 1) {
                      return 1;
                  }else {
                      return n  * recurfactor(n - 1)
                  }
              }

- [function_generator]
  - function yang digunakan untuk data generator
  - generator adalah data yang bisa di interasi seperti array
  - untuk membuat function generator, kita perlu menggunakan tanda * setelah kata function
  - dan mengembalikan data di tiap iterasi, kita bisa menggunakan kata kunci yield.
  - function* namafunction(parameter){yield parameter;}
  - function_generator itu lazy evaluation, artinya jika data belum diambil dari generator, maka yield selanjutnya tidak akan dieksekusi.

- [arrow_function]
  - alternative pembuatan function yang lebih sederhana dari function biasanya
  - arrow function memiliki limitasi dan tidak bisa digunakna di semua situasi
  - dinamakan arrow function karena menggunakan tanda =>
  - kekurangan arrow function :
    - tidak memiliki arguments object
    - tidak bisa menggunakan function generator
    - tidak mengakses this
    - tidak bisa mengakses super
  - untuk membuat arrow function perlu didalam variable dan dilanjut parameter diikuti tanda => dilanjut programnya{}
  - const nama = (parameter) => {program}
  - kita juga bisa membuat arrow function tanpa block, misalnya ketika programnya hanya satu baris
  - arrow function bisa mengembalikan value(return), jika menggunakan blok kita perlu menggunakan kata kunci return, jika tidak menggunakan blok maka tidak perlu menggunakan return.
  - jika parameter pada arrow function hanya satu, maka tidak perlu menggunakan buka tutup kurung.
  - const sapa = nama => nama;
  - karena arrow function mirip sama anonymous function, maka arrow function bisa digunakan sebagai parameter.
  - contoh : givemename(nama=> console.log(`hello ${nama}`))

- [closure]
  - kombinasi function dan bundel referensi ke data disekitarnya
  - local scope tidak bisa diakses dari luar, dengan closure kita bisa membuat function di local scope dan referensi ke data disekitar local scope tersebut.
  - function namafunction(parameter){
      function add(param){}
    }
    const addtwo = namafunction(parameter);

- [Object_Method]
  - function uga bisa ditambahkan sebagai property di object
  - cara pembuatan sama seperti function sebagai value
  - const person = {sayhai : function(nama){}}

- [this]
  - referensi ke object milik siapa, dimanapun kita menggunakan this mengacu pada siapa pemilik program itu
  - kalau dalam object method kita membuat function, this merupakan referensi ke object pemilik functionnya
  - di global scope, this merupakan referensi ke global object
  - dalam function, referensi ke global object
  - dalam event, referensi ke element yang menerima event
  - const objek = {nama: "andi" ,sayhi:function(){console.log(`hello ${this.nama}`)}}

- [arrow_function_object]
  - arrow function ternyata juga bisa digunakan sebagai object method, tapi arrow function tetap tidak bisa mengakses argument object
  - const auah = {nama: "andi", sayhi: (nama) => {
                      console.log(`hello ${this.nama}`)
                  }}
  - tapi ingat tetap tdak bisa menggunakan this, generator, dll

- [getter_dan_setter]
  - kemampuan membuat function yang berbeda untuk mengambil data(getter) dan mengubah(setter) pada sebuah property di object
  - misalnya dalam object kita punya function tapi kita dahului dengan kata get, maka functin di object itu akan dianggap sebagai property
  - const getter = {nama: "andi",
                    get hallow() {
                        return `hello ${this.nama}`
                    }
                }
  - dengan setter kita bisa membuat function di object dengan parameter.
  - set hallow(val) {
        const array = val.split(" ")
        this.nama = array[0]
        this.akhir = array[1]
    }

- [variable_var_problem]
  - var itu tidak memiliki block scope, artinya dia tidak mengikat ke local scope
  - ini membuat var bisa tidak terprediksi
  - misalnya kita punya var i, lalu kita buat for dengan init statement var i juga, nantinya saat kita gunakan si var i, dia akan berubah nilainya. berbeda dengan let yang tidak akan berubah karena dibedakan antara variable dan init_statement

- [Destructuring]
  - fitur yang digunakan untuk membongkar value di array atau object ke dalam variable
  - const [pertama, kedua, ketiga, ...others] = names;
  - untuk nama "names" di akhir itu harus sesuai dengan nama array kita
  - untuk ... itu digunakan ketika ingin mengambil data tapi masih dalam bentuk array
  - bisa juga pada data object, sama persis hanya berbeda pada kurungnya, menggunakan {}. sementara array menggunakan []
  - destructuring juga bisa untuk nested object, jika misalnya data dalam object kita merupakan tipe data object juga, tetap bisa digunakan 
  - caranya dengan menulisnya seperti ini
  - contoh : let {namas, hobby, umur, addres:{jl, perum}} = des
  - destruturing juga bisa dilakukan di function parameter
  - untuk memasukan destructuring ke parameter kita menambahkan kurung {} atau [] tergantung jenis data apa yang kita gunakan
  - misalnya : function display({namaawal, tengah}) {
                    document.writeln(`si ${namaawal} ${tengah} `)
                }
                const personal = {namaawal : "farrel", tengah : "setiawan"}
                display(personal)
  - default value bisa kita tambahkan ke destructuring, bisa kepada array atau object
  - const [first, second, third = "auah"] = namanya
  - kita juga bisa menggunakan nama variable lain ketika membuat destructuring
  - let {first = kesatu} = person

- [strict_mode]
  - secara default program kita berjalan dalam mode sloopy mode
  - pada ecmascript5, diperkenalkan strict mode, jadi saat ada error kodenya langsung berhenti, tapi kesalahan engine javascript diperbaiki, dan ada beberapa perintah yang ditolak 
  - untuk menyalakan strict mode menggunakan 'use strict' pada baris pertama js kita, artinya semua program akan masuk ke mode script, atau bisa juga pada function
  
- [debugger]
  - debugging adalah proses mencari bug, dengan debugger kita bisa menghentikan program di posisi yang kita inginkan(breakpoint), saat kita hentikan nanti, semua variablenya akan terlihat
  - untuk menggunakannya kita gunakan kata kunci debugger;
  - nanti browser kita akan masuk ke mode debugging
## Resources Used 📚

- [tutorial_javascript](https://youtu.be/SDROba_M42g?si=KB1hDbnVRNBgtCVw)
