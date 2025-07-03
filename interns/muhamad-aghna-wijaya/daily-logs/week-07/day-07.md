# Daily Learning Log - [11/05/2025]

## Today's Focus

- [Belajar bahasa pemrograman Javascript]

## What I Learned

### Property di Class
- Sama seperti pada constructor function, dalam class pun kita bisa menambahkan property
- Karena hasil akhirnya adalah sebuah object, jadi menambahkan property di class bisa juga dilakukan di instance object nya

### Method di Class
- Membuat method di class sebenarnya bisa dilakukan dengan cara seperti menambahkan method di constructor function
- Namun, hal tersebut sebenarnya menambahkan method ke dalam instance object
- Khusus untuk method sebaiknya kita menambahkan ke prototype, bukan ke instance object
- Untung nya di class, ada cara mudah menambahkan method dan secara otomatis ditambahkan ke prototype

### Class Inheritance
- Sebelumnya kita sudah tahu bahwa prototype mendukung pewarisan, walaupun agak sedikit tricky cara pembuatannya
- Untungnya itu diperbaiki di ES6 dengan fitur class nya
- Sebuah class bisa melakukan pewarisan dari class lainnya dengan menggunakan kata kunci extends
- Di JavaScript, class inheritance sama seperti prototype inheritance, hanya bisa memiliki satu parent class

### Super Constructor
- Class Inheritance sifatnya seperti Prototype Inheritance
- Bagaimana dengan Constructor Inheritance? Sebenarnya Constructor Inheritance hanyalah melakukan eksekusi constructor lain dengan tujuan agar property di constructor lain bisa ditambahkan ke instance object ini
- Dalam kasus ini, jika kita ingin mencapai hasil yang sama, kita bisa menggunakan kata kunci super di dalam constructor
- Kata kunci super digunakan untuk memanggil constructor super class
- Jika di child class kita membuat constructor, maka kita wajib memanggil parent constructor, walaupun di parent tidak ada constructor

### Super Method
- Selain digunakan untuk memanggil constructor milih parent class, kata kunci super juga bisa digunakan untuk mengakses method parent class
- Caranya bisa menggunakan super titik nama function nya
- Dengan kata lain, super sebenarnya adalah reference ke parent prototype, mirip seperti 
(_proto_)

### Getter dan Setter di Class
- Class juga mendukung pembuatan getter dan setter
- Perlu diingat, getter dan setter ini akan berada di prototype, bukan di instance object

### Class Field
- Biasanya, saat kita ingin menambahkan field (property yang berisi value), kita biasanya tambahkan di constructor
- Namun, ada proposal di EcmaScript yang mengajukan pembuatan public class field ditempatkan diluar constructor, selevel dengan penempatan  method
- Proposal ini masih belum final, namun beberapa browser sudah mendukung nya
- [proposal class fields](https://github.com/tc39/proposal-class-fields) 

### Private Class Field
- Secara default, saat kita menambahkan field, maka field tersebut bisa diakses dari manapun
- Jika kita ingin membuat field yang bersifat private (hanya bisa diakses di dalam class), kita bisa menggunakan tanda # sebelum nama field nya
- Ini dinamakan private class field, dan hanya bisa diakses dari dalam class saja

### Private Method
- Sama seperti field, terdapat proposal juga untuk menambah fitur private method di EcmaScript
- Dengan demikian, access modifier private juga bisa digunakan di method
- Caranya sama, dengan menambahkan tanda # diawal method, maka secara otomatis method tersebut adalah private
- Ingat fitur ini masih dalam tahapan, belum benar-benar menjadi standard EcmaScript, jadi mungkin tidak semua browser mendukung fitur ini
- [proposal private method](https://github.com/tc39/proposal-private-methods) 

### Operator instanceof
- Kadang ada kasus kita ingin mengecek apakah sebuah object merupakan instance dari class tertentu atau bukan
- Kita tidak bisa menggunakan operator typeof, karena object dari class, jika kita gunakan operator typeof, hasilnya adalah “object”
- Operator instanceof akan menghasilkan boolean, true jika benar object tersebut adalah instance object nya, atau false jika bukan

### Kata Kunci static
- static adalah kata kunci yang bisa kita tambahkan sebelum field atau method, biasannya ketika kita membuat field atau method, maka secara otomatis field akan menjadi property di instance object, dan method akan menjadi function di prototype
- Jika kita tambahkan static, maka hal itu tidak terjadi

### Static Method
- Kata kunci static juga tidak hanya bisa ditambahkan di field, tapi juga di method
- Jika kita tambahkan di method, artinya method tersebut jadi milik class nya, bukan prototype
- Dan untuk mengakses method tersebut, kita juga bisa lakukan seperti mengakses static class field

### Error
- Saat membuat aplikasi, sudah tentu kita tidak akan terhindar dari yang namanya error
- Di JavaScript, Error merupakan sesuatu yang sudah standar
- Banyak sekali class error di JavaScript, namun semua class error di JavaScript selalu berujung di class Error, artinya class Error adalah superclass untuk semua jenis error di JavaScript
- Contoh class error yang terdapat di JavaScript contohnya SyntaxError, TypeError, EvalError, dan lain-lain
- [error type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types)

### Error Handling
- Saat terjadi error di kode program JavaScript, kadang kita tidak ingin program kita berhenti
- Di JavaScript, kita bisa menangkap jika terjadi error
- Kita bisa menggunakan try catch statement untuk menangkap error
- Pada block try, kita akan mencoba mengakses kode program yang bisa menyebabkan error, dan jika terjadi error, block try akan berhenti dan otomatis masuk ke block catch
- Jika tidak terjadi error, block catch tidak akan dieksekusi

### Membuat Class Error Manual
- Walaupun JavaScript sudah memiliki standard class Error
- Namun alangkah baiknya, kita membedakan tiap jenis error
- Untuk membuat error sendiri secara manual sangatlah mudah, cukup membuat class turunan dari class Error
- Dan jangan lupa tambahkan parameter message, agar bisa dikirimkan ke parameter di constructor class Error

### Iterable dan Iterator
- Salah satu fitur terbaru di ES6 adalah iterable
- Iterable adalah spesial object yang memiliki standarisasi
- Dengan mengikuti standarisasi Iterable, secara otomatis kita bisa melakukan iterasi terdapat data tersebut dengan menggunakan perulangan for...of
- Contoh yang sudah mengikuti standarisasi Iterable adalah string, Array, Object, dan lain-lain

## Resources Used 📚
[tutorial_javascript](https://youtube.com/playlist?list=PL-CtdCApEFH8SS0Gsj9_a0cC0jypFEoSg&si=2GXqQE6Pyee4ME5O)
