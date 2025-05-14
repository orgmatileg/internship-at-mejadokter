# Daily Learning Log - [14-05-2025]

## Today's Focus

- [melanjutkan pembejalaran javascript]

## What I Learned

- [pengenalan_oop]
  - object oriented programming adalah sudut panang bahasa pemrograman yang berkonsep object
  - beberapa istilah penting dalam oop yaitu object dan class
  - object adalah data yang berisi field/property/atrinut dan method/function/behavior
  - class adalah blueprint, prtototype, atau cetakan untuk membuat object
  - class berisikan deklarasi semua properties dan funtion yang dimiliki oleh object
  - setiap objek selalu dibuat dari class
  - dan sebuah class bisa membuat object tanpa batas
  - javascript pada awalnya dibuat sebagai bahasa prosedural, bukan bahasa pbo
  - implementasi oop di js memang tidak sedetail bahasa perograman lain yang memang dari awal merupakan bahasa pmerograman oop

- [constructor_function]
  - pembuatan object dengan tipe data object akan membuat object selalu unik, maksudnya setiap objectnya bisa berbeda beda. 
  - dalam oop kita akan membuat class sehingga bisa membuat object dengan karakteristik yang sama
  - pada versi ecmascript 6, kita membuat class dengan function, function ini disebut dengan constructor function
  - contoh :
  - function Person() {}
    const farrel = new Person();
    const eji = new Person();
  - ### property
    - setelah kita membuat object, kita bisa dengan mudah menambahkan property ke object tersebut hanya dengan nama variable, diikuti tanda titik dan nama property
    - namun jika seperti itu, constructor functionnya tidak terlalu berguna, karena property hanya ada di object yang kita tamabahkan property
    - untuk menambah property fi constructor function, kita bisa menggunakan kata kunci this diikuti dengan nama propertynya
    - contoh : function Person() {
                    this.first = ""
                    this.second = ""
                }
                const farrel = new Person();
                farrel.first = "relll"
                farrel.second = "setiawan"
        
  - ### method
    - kita juga bisa menambahkan method di constructor tersebut.
    - jika kita tambahkan method ke concstructor function, maka dia akan secara otomatis memiliki method tersebut
    - sama seperti kita membuat method di dalam objek
    - this.sayhai = function(nama) {
        console.info(`hello ${nama}, my name is ${this.first}`)
        }
    - parameter, karena classnya berwujud function, itu artinya class tersebut bisa memiliki parameter.
    - contoh : function Person(first, second) {
                    this.first = first
                    this.second = second
                    this.sayhai = function(nama) {
                        console.info(`hello ${nama}, my name is ${this.first}`)
                    }
                }
                const farrel = new Person("farrel", "setiawan");
  - ### constructor inheritance
    - dalam construction kita bisa memanggil construction lain sehingga kita bisa mewarisi semua property yang dibuat constructor lain 
    - untuk memanggil constructor lain, kita bisa menggunakan NamaConstructor.call(this, parameter)
    - this diatas digunakan untuk tanda kalau property akan digunakan
    - function Personal(first, second) {
            Person.call(this, first, second)
        }
    
- [prototype]
  - js itu sebelumnya dikenal dengan pemrograman berbasis prototype
  - prototype erat kaitannya dengan inheritance(pewarisan), saat kita membuat objek dari constructor function disebut instance, semua propertynya akan berada di dalam instance object
  - setiap kita membuat constructor function, secara otomatis dibuatkan prototypenya, misal kita membuat consctructor function person, secara otomatis dibuat person.prototype
  - saat kita membuat object instance, secara otomatis objek tersebut adalah turunan dari prototypenya
  - untuk mengakses prototype, kita bisa menggunakan __proto__
  - prototype itu mirip objek, dimana kita bisa menambah property ke dalam prototype, dan property tersebut akan menjadi data turunan
  - Person.prototype.namaproperty = isi;
  - ketika kita mengakses property di object instance, pertama akan di cek apakah object tersebut terdapat property itu atau tidak, jika tidak akan di cek di proto, jika tidak ada lagi maka dicek lagi di proto yang lebih tinggi seterusnya sampai di object prototype
  - jika di objek terdapat property yang dicari, maka yang pilih adalah yang di dalam objek bukan di proto
  - ### prototype inheritance
    - prototype itu memiliki parent, artinya dia adalah turunan, parent tertingginya adalah object prototype
    - untuk melakukan inheritance ke prototype lain agak tricky, karena hal ini sudah tidak direkomendasikan lagi untuk praktek oop
    - untuk melakukan itu kita  bisa menggunakan :
    - Manage.prototype = Object.create(Karya.prototype)

- [class]
  - kata kunci yang dibuat untuk membuat class di javascript, dengan class kita tidak butuh lagi menggunakan construction function
  - ### constructor class
    - kita tetap bisa menambahkan constructor function dalam class, biasanya untuk menambahkan parameter
    - untuk membuatnya kita gunakan kata kunci constructor
    - class namaclass{
            constructor(parameter){program}
        }
  - ### property di class
    - dalam class pun kita juga bisa menambahkan property, karena hasil akhirnya adalah object, jadi menambahkan property dalam class bisa instance.
    - untuk menambahkannya sama saja seperti pada constructor function
    - class person {
          constructor(nama){
              this.name = nama;
          }
      }


      const rel = new person("agna")
      console.log(rel.name)
  - ### method
    - membuat method di class sama seperti di constructor function, tapi seperti itu sebenernya menambah method ke dalam instance object
    - khusus method sebaiknya kita menambahkannya ke prototype, bukan ke instance object, di class kita bisa menambahkan method dan secara otomatis ditambahkan ke prototype
    - class person {
          sayhai(){
              console.info("hai")
          }
      }
  - ### class inheritance
    - sebuah class bisa melakukan pewarisan dari kelas lainnya dengan kata kunci extends
    - class inheritance sama seperti prototype inheritance
    - kodenya : class namaclass extends classlain {program}
  - ### super constructor
    - class inheritance difatnya seperti prototype inheritance
    - constructor inheritance hanyalah melakukan eksekusi constructor lain dengan tujuan agar property di conctructor bisa ditambahkan ke instance object ini
    - jika kita ingin menghasilkan hal yang sama seperti itu, kita gunakan kata kunci super
    - super digunakan untuk emmanggil constructor super class
    - jika child class membuat constructor, wajib memanggil parent constructor walaupun di parent tidak ada constructor
    - kata kunci super wajib didalam constructor
    - contoh : class Manager extends Employee {
                constructor(first, second){
                    super(first);
                    this.akhir = second
                }
## Resources Used 📚

- [Tutorial_Javascript](https://youtu.be/aviAyIK5oSU?si=RIxxTd5u_Y9DCOGV)
