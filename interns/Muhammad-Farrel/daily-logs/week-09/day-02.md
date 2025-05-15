# Daily Learning Log - [15/05/2025]

## Today's Focus

- [melanjutkan pembejalaran javascript]

## What I Learned

- [class_lanjutan]
  - ### super method
    - kata kunci super juga bisa kita gunakan untuk mengakses method parent class
    - caranya bisa menggunakan super.namafunction
    - contoh : class namaclass extends classlain{
                    function() {
                        super.namafunction()
                    }
                }
  - ### getter dan setter di class
    - getter dan setter disini akan berada di dalam prototype
    - contoh :
    - class Seseorang {
            constructor(first, second){
                this.firstname = first
                this.lastname = second
            }
            get full(){
                return `${this.firstname} ${this.lastname}`
            }
            set full(value) {
                const result = value.split(" ");
                this.firstname = result[0]
                this.lastname = result[1]
            }
        }
  - ### public class field
    - ecmascript mendukung acces modifier public dan private
    - public artinya bisa diakses dari luar class, private hanya bisa diakses dari dalam class saja
    - untuk membuat public class field, bisa langsung buat nama field dengan valuenya, dan itu selevel dengan method
    - apabila kita tidak menambahkan value maka akan terisi undefined
    - class Customer {
            firstname;
            lastname;
            balance=0;
        }
    - public dan constructor
  - ### private class field
    - jika kita ingin membuat field yang hanya bisa diakses didalam class nya saja(private). kita bisa menggunakan tanda # sebelum nama field
    - class namaclass{
            #field;
        }
  - ### Private method
    - sama seperti menambah private field, cukup ditambahkan tanda # sebelum nama methodnya
    - class namaclass{
            #namamethod(){program}     
        }
    - untuk memanggilnya juga gunakan this.#namamethod()
  - ### operator instanceof
    - kita tidak bisa digunakan operator typeof karena hasilnya selalu object
    - kita bisa gunakan instanceof, yang akan menghasilkan boolean
    - const son = new Person();
        console.log(son instanceof Person)
    nantinya dia akan menghasilkan true
    - instanceof juga bisa digunakan untuk mengecek parent
    - apabila suatu class merupakan extends dari suatu class lain, maka saat intanceof maka akan true jika disamakan dengan class lain juga dengan class nya.
  - ### static class field
    - statis adalah kata kunci yang bisa kita tambahkan sebelum field atau method. saat kita membuat field ata method maka secara otomatis akan menjadi property di instance object. tapi tidak akan terjadi jika kita menambhkan static
    - jika kita tambahkan static dalam class field, secara otomatis field itu bukan lagi milik instance object, jadi murni milik classnya
    - static ini biasanya dibuat untuk utility field atau function
    - cara aksesnya bukan lagi lewat object, tapi langsung ke classnya, dan sifatnya global
    - contoh : class Config{
                    static name = "farrel"
                }
    - untuk mengaksesnya kita panggil nama class titik nama field, Config.name
  - ### static method
    - jika kita tambahkan ke method maka akan menjadi milik class nya bukan prototype
    - cara membuatnya sama seperti static field, menambahkan static nama function, dan cara menggunakannya pun sama.

- [Error]
  - error merupakan standar dalam javascript
  - banyak sekali class error, namun semua class error selalu berujung di class error, class error adalah superclass untuk semua jenis error
  - ### throw error
    - untuk melempar error kita bisa menggunakankata kunci throw
    - throw new Error('pesan eror)
  - ### eror handling
    - kemampuan untuk menangkap errornya sehingga program tidak akan terhenti
    - untuk melakukan handling erro ita bisa menggunakan try catch
    - contoh : try{
                    Config.sum()
                }catch(error){
                console.info(`terjadi error : ${error.message}`)
                }
    - program yang terhenti hanya yang berada di try, selain itu tetap berjalan
  - kadang kita ingin melakukan sesuatu entah terjadi erro atau ngga, kita bisa menggunakan finally, blok finally akan selalu dieksekusi setelah try catch dieksekusi.
  - finally{
        console.info(`program selesai`)
    } // ditambahkan sesuadah blok catch
  - try finally, try finally itu blok finally tanpa catch. jadi ditulis sesudah blok try
  - ### class error manual
    - untuk membuat error sendiri secara manual cukup membuat class turunan dari class error
    - tambahkan parameter message, agar bisa dikirimkan ke parameter di constructor class error
    - class validate extends Error{
          constructor(message, field){
              super(message)
              this.field = field;
          }
      }
    - jadi sebenernya sama seperti membuat class biasa

- [iterable_dan_iterator]
  - iterable adalah spesial object yang memiliki standarisasi
  - dengan standarisasi iterable, secara otomatis kita bisa melakukan iterasi terdapat data tersebut dengan pengulangan for...of
  - contohnya mengikuti standarisasi iterable adalah string, array, object, dll
## Resources Used 📚

- [Tutorial_Javascript](https://youtu.be/aviAyIK5oSU?si=RIxxTd5u_Y9DCOGV)

