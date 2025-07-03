# Daily Learning Log - [16/05/2025]

## Today's Focus

- [javascript_standard_library]

## What I Learned

- [Number]
  - number adalah function yang digunakan untuk mengkonversi ke tipe data number
  - untuk mengkonversi data string ke number kita bisa gunakna kata kunci Number(data)
  - semisal kita punya variable let num = "123" lalu kita konversi dengan syntaks Number(num) maka data string di num akan dikonversi menjadi number
  - apabila terdapat huruf di variable tersebut, maka akan menjadi NaN(not a number)
  - ### Number Static Properties
    - untuk mendapat number minimal bisa dengan Number.MIN_VALUE
    - untuk mendapat number maximal bisa dengan Number.MAX_VALUE
    - ada juga MIN_SAFE_INTEGER untuk mengecek nilai minimum teraman
  - ### Number static Method
    - untuk mengecek apakah value nya ini NaN atau bukan bisa dengan Number.isNaN(value)
    - Number.isInteger(value) untuk mengecek apakah value nya integer atau bukan
  - ### Number Instance Method
    - Number.toLocalString(locale) untuk mengubah number menjadi string sesuai locale. jadi jika kita ingin mengubah number ke string dengan bahasa di negara tertentu
    - Number.toString(radix) untuk mengubah number menjadi string sesuai radix
    - locale itu string local, untuk menentukan negara, untuk indonesia("id-ID")
    - radix itu bisa ditentukan apakah binary atau nggak, default itu 10, binary itu 2

- [String]
  - ada banyak sekali instance method dan properties
  - contohnya name.toLowerCase() , dia akan membuat string baru bukan mengubah, setelah membuat yang baru dia akan mengembalikan nilainya
  - misalnya nama.split(" ") akan memisahkan string sesuai spasi dan mengubahnya menjadi array
  - name.length digunakan untuk menghitung panjang array

- [Array]
  - ### array loop
    - untuk melakukan iterasi array kita bisa menggunakan method forEach()
    - contoh : namaarray.forEach((value, index) => console.info(`${index} : ${value}`))
    - jadi untuk menggunakan forEach bisa dengan anonymous function atau arrow function
  - ### Array Queue
    - terdapat struktur data bernama Queue(antrian)
    - data yang baru masuk akan dimasukan di urutan terakhir
    - dan data yang akna dikeluarkan dimulai dari urutan terdepan
    - mirip dengan FIFO(first in first out)
    - kita bisa menggunakan queue di array dengan function push() untuk menambah data di belakang, dan shift() untuk mengambil dan menghapus data paling depan.
  - ### Array stack
    - kebalikan dari queue, stack artinya tumpukan dimana konsepnya mirip dengan tumpukan kartu
    - saat memasukan data akan masuk keurutan terakhir, dan saat mengambil data dimulai dari urutan terakhir
    - konsep ini sifatnya LIFO(last in first out)
    - untuk memasukan datanya bisa gunakan push()
    - untuk mengambil data bisa dengan pop()
  - ### Array Search
    - function untuk melakukan pencarian di array
    - find(valur => boolean) : value, menari data sesuai kondisi
    - findindex(value => boolean): number, mencari data index sesuai kondisi
    - includes(value):boolean, mengecek apakah terdapat data
    - indexOf(value):number, mengecek posisi index data
    - lastindexof(value):number, mengecek posisi index data terakhir
  - ### Array Filter
    - melakukan filter data yang kondisinya bernilai true, setelah di filter dia akan menciptakan array baru
    - array.filter(value=> value%2 === 1)
    - syntaks diatas akan memfilter data di array dan menampilkan data yang sesuai(bernilai true)
  - ### Array Transform
    - jika kita ingin merubah suatu bentuk array maka kita bisa melakukan array tranform
    - melakukan transform tiap value dan menghasilkan array result maka kita bisa gunakan : map(value => result)
    - melakukan transform dengan value array dan value selanjutnya, lalu hasilnya dilanjutkan ke iterasi selanjutnya bisa dengan : reduce(resultBefore, value => result)
    - reduceRight(resultBefore, value => result) sama seperti reduce() namun dilakukan dari belakang
    - setiap transform akan membuat array baru lalu dikembalikan nilainya
    - reduce juga bisa digunakan untuk membuat perkalian atau mengubah data array menjadi sebuah string

- [Object]
  - ### object freeze dan seal
    - jika ingin mengubah sebuah object menjadi object yang tidak bisa diubah atau di hapus, kita bisa menggunakan beberapa static freeze
    - object.freeze() digunakan untuk mengubah object menjadi object yang tidak bisa diubah dan dihapus
    - object.seal() digunakan untuk mengubah object yang tidak bisa dihapus attribute nya tapi masih bisa diubah
  - ### object assign
    - untuk menggabungkan semua attribute dari sebuah object ke object lain
    - kita bisa gunakan Object.Assign(target, source)
    - nantinya data dari source akan menjadi data di target
  - ### object property name & value
    - Object.values() digunakan untuk mengambil semua property value, dijadikan dalam bentuk array, dia akan menampilkan data di object tanpa nama value tersebut
    - Object.getPropertyNames() digunakan untuk mengambil semua properti name, hanya nama value nya saja bukan value nya. dijadikan dalam bentuk array

- [JSON]
  - singkatan dari javascript object notation
  - json merupakan data string yang bentuknya mirip dengan javascript object
  - json banyak sekali digunakan untuk komunikasi antara server dan client
  - javascript mendukung konversi data dari string json ke object atau sebaliknya
  - JSON.stringify() digunakan untuk melakukan konversi dari object ke string
  - JSON.parse() digunakan untuk melakukan konversi dari string ke object
  - json juga bisa digunakan untuk mengkonversi ke array dengan menambahkan []

- [Big_Integer]
  - tipe data number yang bisa mencakup data angka lebih dari Number.MAX_SAFE_INTEGER
  - untuk kasus number yang lebih dari itu, disarankan menggunakan tipe data BigInt
  - biasanya akan ada n diakhir data angka yang menggunakan BigInt
  - const a = BigInt(angka);

- [date]
  - merupakan representasi waktu dan tanggal
  - date merupakan representasi dalam hitungan milisecond sejak 1 januari 1970, dikenal dengan Epoch & Unix Timestamp
  - new Date(), untuk membuat date saat ini
  - new Date(year, month, date), membuat date dengan tanggal yang ditentukan
  - new Date(year, month, date?, hour?, minute?, second?, milis?), membuat date dengan parameter sampai milis, yang ada tanda tanya artinya opsional
  - new Date(timestamp), membuat date dari epoch atau unix timestamp
  - untuk mendapatkan waktu saat ini daam epoch & unix timestamp, kita bisa menggunakan Date.now()
  - untuk mengubah dari object date ke epoch & unix timestamp, kita bisa gunakan getTime()
  - const datenow =  new Date(Date.now())
    const date1 = new Date(1747620427894)
    const date4 = new Date()
    const date2 = new Date(2025, 5, 19)
  - ### parsing date
    - kita juga bisa melakukan parsing, membuat date dari string menggunakan method Date.parse(value)
    - format stringnya harus YYYY-MM-DDTHH:mm:ss.sss
    - dimana jika kita hanya membuat date brisi tanggal saya, kita cukup gunakan YYYY-MM-DD
    - jika date dengan tanggal, waktu, timezone, gunakan YYYY-MM-DDTHH:mm:ss.sss
    - hasil parsing adalah unix timestamp
    - const parsetime = Date.parse("2025-05-19T08:45:24.123+07:00");
  - ### date getter and setter
    - getter dan setter di date digunakan untuk mengubah informasi date
    - console.log(date4.getFullYear())
    - ada banyak selain fullyear, termasuk bulan, hari, hingga ke milidetik

- [Math]
  - math merupakan class di javascript yang berisikan static property dan method untuk operasi matematika
  - math itu hanya membuat tipe data number
  - Math.max(1, 2, 3) akan mencari nilai tertinggi, sebaliknya jika menggunakan .min
  - ada banyak selain max min, seperti round, floor, ceil, dll
  - floor itu dibulatkan kebawah(misal 9.5 jadi 9) dan ceil dibulatkan ke atas (9.5 jadi 10)

- [Boolean]
  - Boolean merupakan Wrapper class untuk tipe primitif boolean
  - Boolean memiliki method toSting() untuk konversi ke string
  - Boolean juga memiliki method valueof() karena Boolean itu object
  - Boolean dan boolean itu beda
  - const bool = Boolean(true)
  - bool.toString() akan menghasilkan string
  - bool.valueOf() akan menghasilkan isi object Boolean(true)

- [map]
  - map merupakan representasi dari struktur kata key-value
  - mirip dengan tipe data object, a=tapi semua method untuk manipulasi data sudah disediakan
  - map juga mengikuti kontrak iterable, sehingga bisa di iterasi secara langsung
  - perbedaan map dengan object, yaitu map secara default tidak memiliki key, sementara object karena memiliki prototype bisa jadi memiliki default key ketika dibuat
  - map bisa tipe data apapun, sementara object hanya string atau simbol
  - jumlah key map bisa diketahui dengan muda dengan attribute size, sementara objec tidak karena harus manual menggunakan iterasi
  - secara default map tidak bbisa di konversi ke JSON, sementara object bisa secara otomatis
  - map instance method & property :
    - size, untuk menentukan panjang map
    - clear() ntuk menghapus semua isi map
    - delete(key) untuk menghapus data map berdasarkan key nya
    - get(key) : value untuk mendapatkan data map berdasarkan key
    - has(key) : boolean mengecek apakah map berisi data key
    - set(key, value) mengubah data map dengan key = value
    - forEach((value, key) => ) untuk melakukan iterasi
    - map.set('name', 'farrel')
    - map.forEach((value, key) => console.log(`${key} = ${value}`))
  
- [set]
  - implementasi dari struktur data yang berisi data data unik
  - mirip array, tapi isinya data yang selalu unique
  - jika kita menambahkan data yang sama, yang diterima hanya satu saja
  - method set :
    - size, untuk mengecek panjang set
    - add(value), untuk menambah data ke set
    - has(value), mengecek apakah set memiliki value
    - delete(value), untuk menghapus value dari set
    - forEach(value => ), untuk melakukan iterasi

- [symbol]
  - tipe data yang digaransi akan selalu unique setiap kali membuat data symbol, banyak sekali digunakan untuk mmebuat key pada object
  - ### symbol for
    - pembuatan symbol juga bisa menggunakan static method Symbol.for(key)
    - jika kita menggunakan key yang sama, symbol yang sama akan selalu dikembalikan
    - pembuatan symbol for ini merupakan alternative untuk membuat symbol tanpa variable
    - objectname[Symbol.for("nama")] = "Farrel";
  - const sym = Symbol();

- [RegExp]
  - regular expression, fitur untuk mencari text dengan pola
  - membuat regexp ada 2 cara, yaitu menggunakan literal notation atau membuat object RegExp
  - literal notaion : const re = /ab+c/i
  - ### instance method
    - exec(value) : result, jika menemukan data sesuai pola,maka kembalikan result nya, jika tidak maka null
    - test(value) : result, jika menemukan data yang sesuai pola, maka hasilkan true jika ada, jika tidak maka false
    - let result = re.exec(namaku);
      let noresult = reg.test(namaku);
  - ### RegExp modifier
    - i, regex menjadi incase sensitive
    - g, pencarian dilakukan secara global, secara default setelah menemukan data pencarian akan berhenti
    - m, multiline, pencarian dilakukan tiap baris
    - cara pemasangannya, const re = /farrel/g
  - fitur regexp ada didalam string, methodnya yaitu
    - match(regex) : Array, mencari data yang sesuai dengan regex
    - search(regex) : index, mencari index data yang sesuai dengan regex
    - replace(regex. value), mengubah data dengan value yang sesuia regex
    - replaceAll(regex, value), mengubah semua data yang sesuai dengan regex
    - split(regex) : array, memotong string menjadi array

- [Proxy]
  - proxy merupakan fitur yang bisa digunakan sebagai wakil sebuah data
  - dengan proxy, interaksi dta akan melalui proxy terlebih dahulu
  - dengan ini kita bisa melakukan apapun sebelum interakti dilakukan ke data yang dituju
  - ### proxy handler
    - pembuatan proxy perlu menggunakan handler, didalam handle kita bisa membuat function yang dinamakan interceptor yang digunakan ketia mengambil data atau mengubah data ke target
    - untuk mmebuat proxy, kita bisa menggunakan new Proxy(target, handler)
    - membuat hander :
      const handler = {
          get : function (target, property) {
              return target[property];
          },
          set : function (target, property, value) {
              target[property] = value;
          }
      }
  - untuk membuat proxy :
      const proxy = new Proxy(target, handler)
      untuk mengisinya, proxy.namaproperty = value;
  - saat kita mengubah data proxy, secara otomatis data akan dikirm ke target melalui handler dengan memanggil function set(target, property, value)
  - Saat kita mengambil data proxy, secara otomatis data akan diambil dari target melalui handler dengan memanggil function get(target, property)
  - Artinya, jika kita ingin melakukan sesuatu sebelum dan setelah nya, bisa kita lakukan di handler
  - log handler ada di js learning part 2

- [Reflect]
  - class yang digunakan untuk mengseksekusi javascript function
  - refelct gapunya constructor, cara oenggunaannya tidak dengan membuat object dengan new Reflect
  - penggunaan Reflect adalah menggunakan banyak sekali static methodnya
  - kita juga bisa menggunakan Reflect.get untuk menampilkan data, atau Reflect.has untuk mengecek apa suatu object memiliki attribute tersebut atau tidak
  - Reflect.set(namaobject, "namaatribute", "value")
  - Reflect.get(namaobject, "namaatribute")
  - Reflect.has(namaobject, "namaatribute")

- [Encode]
  - saat kita menulis url, kita bisa menambahkan informasi tambahan seperti query parameter
  - URL sendiri sudah memiliki standard encoding penulisan URL
  - Standard encoding ini dilakukan agar penulisan URL aman ketika diterima oleh server
  - Aman disini dalam artian informasi URL tidak berubah
  - Contoh paling sederhana, misal, walaupun kita bisa mengirim spasi dalam url, tapi disarankan untuk di encode agar nilai spasi tidak benar-benar terlihat seperti spasi pada URL nya, jika spasi di encode maka akan diubah menjadi persen
  - contoh masalah : jika menggunakan tanda & dan lain lain maka akan dianggap sebagai parameter oleh server
  - #### Encode Function
    - encodeURI(value), melakukan encode value, namun karalter yang dipesan di URI tidak akan diubah ;,/?@&=+$#
    - encodeURIComponent(value), melakukan encode value ke semua karakter
    - decodeURI(encoded), melakukan decode value hasil encodeURI()
    - decodeURIComponent(encode), Melakukan decode value hasil encodeURIComponen()

- [base64]
  - Base64 merupakan binary to text encoding, representasi binary data dalam format string
  - Base64 merupakan format text data yang aman untuk dikirimkan di web
  - Base64 merupakan encoding yang biasanya digunakan ketika perlu mengirim data dari client ke server
  - Karena encoding Base64 merupakan text, oleh karena itu sangat aman digunakan pada query param URL atau text body dalam form
  - ### function
    - btoa(value), encode ke base 64 dari value
    - atob(value), decode dari base64 ke value
  - agar lebih enak untuk mengirim link, lebih baik di encode ke base64

- [eval]
  - functionyang digunakan untuk mengeksekusi kode javascript dari string 
  - perlu hati hati menggunakannya, karena bisa jadi malah mengeksekusi yang menyebabkan masalah keamanan di website kita 
  - eval(string)



## Resources Used 📚

- [Tutorial_javascript_standard_library](https://youtu.be/sP_QbKeifm4?si=8dtLIEdDiKCCc4gS)
