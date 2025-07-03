# Daily Learning Log - [20-05-2025]

## Today's Focus

- [javascript_Modules]

## What I Learned

- [Javascript_Modules]
  - merupakan fitur dimana kita bisa membuat module(kode javascript yang bisa digunakan ulang) untuk Javascript lain
  - ### import dan export
    - import merupakan kata kunci yang digunakan untuk mengambil sesuatu dari module lain
    - export digunakan untuk memberitahu module lain, bagian mana yang ingin kita expose keluar, sehingga bisa di import
  
- [live_server]
  - saat menggunakan javascript module, disarankan menjalankan dalam web server
  - extension live server visual studio bisa digunakan untuk ini

- [test_tanpa_modul]
  - secara default, semua kode javascript bisa diakses ketika kita include ke dalam html
- [dengan_modul]
  - jika kita menggunakan o=module, kita bisa lebih secara selektif memilih bagian kode mana yang ingin kita ekspos keluar
  - secara default, kode javascript tidak bisa di ekspos keluar kecuali kita meminta nya secara langsung

- [membuat_modul]
  - karena javascript biasa dnegan modul itu sama, maka biasanya developer membedakan module dengan .mjs
  - tidak wajib, namun demi kemudahan.
  - pada html di script kita tambahkan type="module"
    <script type="module" src="module.mjs"></script>
  - akan error jika kita langsung menerapkan kode di file mjs ke html, karen perlu di expose

- [export]
  - kita perlu menambahkan kata kunci export di awal kode javascript kita untuk memberi tanda kalau kita ingin menggunakan kode ini
  - tapi akan tetap error, karena harus di import terlebih dahulu

- [import]
  - jika kita ingin menggunakan kode yang sudah di export, kita perlu menggunakan kata kunci import
  - caranya :
        import{namafunction,namaVariable,Namaclass}from"lokasimodule.js"
  - module hanya bisa digunakan di module lain, jadi pastkan kita sudah menuliskan type="module" di script yang berada di dalam html
  - import{hello}from "./module.mjs"

- [Variable]
  - saat menggunakan module,ketika membuat variable, maka variable tersebut hanya berada pada module tersebut, tidak bisa digunakan di module lain, meskipun di export
  - cara pembuatan sama seperti pembuatan variable biasa, hanya tambahkan export, dan import untuk menggunakannya

- [class]
  - jika ingin mengexport, kita juga bisa menggunakan kata kunci export, sama dengan import juga
  - pembuatan class juga sama saja, hanya tambahkan export dan import
  - jangan lupa gunakan new namaclass(), untuk membuatnya

- [Export_Multiple]
  - kita bisa menggunakan export sekaligus untuk beberapa kode, dengan :
    - export {variable, function, clas, dll}
    - export {sayhai, person, name}
  - cara importnya sama saja,
    - import {variable, function, clas, dll}
    - import{sayhai, person, name}

- [alias]
  - kita bisa mengubah nama variable, function, atau classnya
  - karena semakin lama kita membuat javascrip, maka akan semakin banyak module yang dibuat, maka akan banyak kemungkinan kita membuat variable, function, class dengan nama yang sama, jadi kita bisa mengubahnya dengan alias.
  - alias itu membuat nama tiruan, sebenarnya nama aslinya tidak berubah.
  - kita bisa membuat alias di export dan saat di import
  - jika kita membuat saat di export, export{variable as varlain}
  - begitu juga saat di import, import{function as funclain}

- [export_default]
  - fitur yang digunakan untuk mempermudah untuk membuat default data di module, membantu javascript agar kompatibel dengan CommonJS dan AMD module system
  - cara penggunaannya sama dengan export, tapi ditambahkan default setelah export
  - export default namaFunction;
  - bisa juga langsung membuat function, tidak harus dengan nama function
  - untuk importnya bisa dengan :
    - import{default as aliasvariable}from "./location.mjs"
    - import namaaliasFucntion from "./location"
  - dalam satu module, kita tidak boleh membuat lebih dari satu default 
  - untuk import secara bersamaan yaitu
    - import namadefault, {namavar, namafucntion}from "./location.mjs"
  - sebisa mungkin selalu gunakan export named dibanding pake default karena dia tidak punya nama nya

- [module_object]
  - mengimport module yang sangat banyak, sebaiknya gunakan module object
  - Module Object merupakan object javascript yang berisi attribute hasil yang di export pada module
  - untuk membuat module object bisa dengan :
    - import * as namamodule from "./module.js"
    - kita bisa menggunakan namamodule sebagau object untuk module tersebut
  - untuk memanggilnya, gunakan namamodule.namafunction()

- [Aggregating_Modules]
  - dengan melakukan aggregate, kitabisa membuat module aggregate yang isinya menggabungkan export dari modul lain
  - caranya sangat mudah, export{a, b, c}from "./location.mjs" , location.mjs merupakan nama file module lain yang ingin digabungkan ke dalam aggregate
  - saat di import, seperti import biasa, hanya lokasinya mengambil ke module yang melakukan aggregate

- [dynamic_modul_loading]
  - terkadang kita tidak ingin meload semua modul diawal, jadi hanya di load ketika di butuhkan saja, ini membuat prosesmenjadi lebih cepat
  - dynamic module loading bisa digunakan untuk ini, yaitu dengan menggunakan function import(), dimana hasilnya berupa Promise<ModuleObject>

## Resources Used 📚

- [Javascript_modules_tutorial](https://youtu.be/gi4ItKnH-pY?si=3_ufv8tYbXS1G7AN)
