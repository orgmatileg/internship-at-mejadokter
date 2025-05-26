# Daily Learning Log - [21/05/2025]

## Today's Focus

- [Belajar_Document_Object_Model]

## What I Learned

- [DOM]
  - DOM hanyalah representasi object dan struktur halaman web
  - DOM bukanlah bagian dari bahasa javascript, melainkan bagian dari Web API
  - DOM bisa digunakan menggunakan bahasa pmerograman apapun, karena dalam pembuatan web, kita tidak hanya bisa menggunakan javascript

- [Tipe-data]
  - DOM memiliki representasi data, sederhana tapi bermanfaat
  - tipe data DOM yaitu
    - Document, merupakan representasi dari halaman web
    - Node, merupakan base class untuk semua tipe data di DOM, seperti Document, Element, dan attribute(attr), anggap saja parent class dari tipe data DOM
    - Element, representasi object element di halaman web, misalnya head, body, form, input, dll
    - Node list, array/collection yang berisikan Node
    - Attr, attribute yang merupakan representasi object attribute dalam element
    - NamedNodeMap, collection yang berisi Attr dalam bentuk map

- [Document]
  - merupakan representasi dari halaman web
  - dalam satu web, tedapat satu document, tidak perlu membuatnya secara manual, karena otomatis ada di browser
  - kita bisa langsung menggunakan kata kunci document
  - ### property
    - property di document bisa digunakan untuk melihat semua data yang terdapat dalam document halaman web
    - document.body, document.title, document.images
    - apapun struktur di html akan menjadi property document
  - ### method
    - document juga mempunyai method untuk memanipulasi data
    - untuk mendapatkan elemen html dengan id, kita bisa menggunakan document.getElementById("namaid");

- [Node]
  - base class dari Document, Element, Attr
  - semua fitur yang dimiliki di Node dimiliki diturunannya
  - Node dalam DOM itu bentuknya tree(pohon), artinya kita bisa melihat parent(node diatasnya), shildren(node dibawahnya), sibling(node sebelahnya)
  - untuk membuat node kita juga bisa menggunakan documentgetElementById("namaid")
  - ### node method
    - method di node bisa untuk menambah atau menghapus element di dalamnnya
    - misalnya namanode.removechild()

- [Element]
  - Element merupakan Node yang berbentuk element, biasanya adalah element HTML, misal <html>, <head>, <body>, <div>, <table>, dan lain-lain
  - element merupakan turunan dari node, jadi banyak method node yang bisa dilakukan oleh element, seperti remove(), masih ada banyak method lainnya
  - ### membuat element
    - kita bisa menggunakan method document.createElement(tagname)
    - setelah itu kita bisa set isinya, misalnya jiak membuat element text, kita bisa set isinya dengan textcontent = ""
    - setelah kita membuatnya, kita harus memunculkannya dengan kata kunci append(namaelement) atau appendchild(namaelement)
    - misal ; nama_parent.append(namaelement)

- [Nodelist]
  - kumpuan dari list, nodelist menyeleksi banyak node sekaligus, misa ketika kita ingin mengambil semua children node
  - ### live dan static Nodelist
    - live artinya perubahan yang terjadi pada Nodelistnya, akan merubah semua nodelist yang sama
    - static artinya perubahan yang terjadi pada nodelistnya, tidak akan merubah semua nodelist yang sama
    - saat kita menggunakan element.childNodes, maka nodelist tersebut bersifat live
    - saat kita menggunakan document.querySelectorAll(), maka nodelist nya bersifat static

- [Attr]
  - singkatan dari attribut, representasi dari attribute sebuah element
  - untuk mendapatkan attribute kita bisa menggunakan kode namaid.getAttributeNode("src")
  - namaid merupakan variable yang digunakan untuk mendapatkan id tag nya
  - untuk membuat Attr, kita bisa menggunakan document.createAttribute("nama")
  - atau bisa juga dengan element.setAttributeNode(attribute)
  - bisa juga dengan setAttribute("nama", "value")

- [NamedNodeMap]
  - kumpulan dari Attr, mirip nodelist tapi versi attribute
  - untuk membuat NamedNodeMap kita bisa gunakan kata kunci attributes, misal : var.Attributes
  - contoh penggunaannya
    - const NNM = gambar.attributes
      console.log(NNM.getNamedItem("id"))

      for (const item of NNM) {
          console.log(`${item.name} = ${item.value}`)
      }

- [Text_Node]
  - terkadang kita membuat teks tanpa tag, text tanpa tag adalah sebuah node dan bukan element, lebih tepatnya textnode
  - kita juga bisa membuat textnode dengan menggunakan method document.createTextNode("string"), dan bisa kita append di parent yang kita mau

- [EventHandler]
  - node bisa bereaksi terhadap suatu kejadian, misalnya click, hover, dll
  - ada 2 cara untuk menambahkan eventhandler, Event Target dan GlobalEventHandler
  - ### Event Target
    - parent class dari node, artinya semua Node memiliki kemampuan dari Event target
    - kita bisa menggunakan method addEventListener(type, callback) untuk menambahkan event handler
    - type pada eventlistener merupakan event apa yang kita inginkan, misal "click"
    - lalu kita lanjutkan dengan membuat sebuah anonymous function
    - addeventlistener bisa lebih dari satu event
  - ### Global Event Handler
    - menggunakan global event handler hanya bisa sekali event saja
    - methodnya ada banyak, salah satunya onclick
    - untuk menggunakannya ; namaid.onclick = function(){}

- [jenis_event]
  - jenis event bisa kita sesuaikan dengan target eventnya, misal di element video ada event pause
  - kita juga bisa menerima data event yang memicu eventnya, datanya berbeda beda, misal click, datanya mouseevent
  - untuk mendapakan event, kita bisa menambahkan "event" di parameter functionya

- [style]
  - kita bisa langsung mengatur style element dengan element.style.name = value
  - pada DOM style, untuk format stylenya kita menggunakan pascalCase, misal backgroundColor, jadi kedua kata digabung dan kata kedua dibesarkan huruf pertamanya
  - contoh penggunaannya yaitu 

- [InnterText_dan_InnerHTML]
  - innerText untuk mendapatkan isi text ebuah element
  - tujuannya sama dengan textxontent, yaitu untuk mengambil dan mengisi sebuah element
  - bedanya textcontent akan mengembalikan semua isi dari konten text sebuah element
  - innerText bisa tahu bagian text mana yang ditampilkan, dia hanya akan mengambil text yang ditampilkan
  - semisal di sebuah class konten terdapat teks dan script, maka konten.innerText hanya akan mengambil text nya saja, scriptnya tidak
  - innerHTML, akan mengambil seluruh elemen html nya, tidak hanya teks nya saja, bisa kita gunakan untuk mengannti element html dengan text dimana text nya terdapat struktur elemen
  - innerHTML, akan mengambil semua isi class termasuk tag nya sekalipun

- [Window]
  - representasi window yang berisikan DOM Document
  - beberapa javascrit function berasal dari object window seperti alert(), confirm(), promt()
  - untuk menggunakan Window, tidak perlu membuat objectnya, cukup dengan kata kunci window
  - window memiliki banyak jenis, mulai dari method, event, dll
  - contoh :
    - window.screen.height = untuk menghitung tinggi website
    - window.location = untuk mengambil halaman url
  
- [query_selector]
  - terdapat 2 method untuk melakukan query selector,
    - queryselector(pola) menyeleksi node pertama yang sesuai pola
    - queryselectorAll(pola) menyeleksi semua node yang sesuai pola
  - ### universal selector
    - di dom juga menggunakan tanda * untuk menyeleksi semua bagian, sama seperti css
    - document.querySelectorAll("*")
  - ### type selector
    - selector yang diunakan untuk menyeleksi tag type HTML yang kita pilih
    - document.querySelectorAll("li")
  - ### class selector
    - selector yang menyeleksi semua elemen yang memiliki class yang sesuai dengan selector
    - document.querySelectorAll("class")
  - ### id selector
    - selector yang menyeleksi elemen dengan id yang sama sesuai pola, untuk menggunakannya kita bisa menuliskan nama id diawali dengan #
    - document.querySelectorAll("#konten")
  - ### attribute selector
    - selectpr yang menyeleksi element berdasarkan attributenya
    - kita bisa menggunakan selector [attribute]
    - atau bisa juga untuk tag tertentu, misal menggunakan selector div[attribute]
    - document.querySelectorAll("[class]")
    - kita juga bisa menggunakan operator pada attribute selector
    - document.querySelectorAll("[class^=ulis]")

- [Node_type]
  - saat kita menyeleksi node, dia akan menjadi nodelist, node sendiri memiliki property yang bernama nodeType, nodeType bisa kita gunakan untuk mengecek tipe node nya.
  - const elemens = document.body.childNodes
    for (let node of elemens) {
        console.log(`${node} = ${node.nodeType}`)
    }

- [html_element]
  - element merupakan representasi dalam DOM
  - Namun, saat menggunakan HTML, implementasi detail nya sebenarnya adalah HTML Element, yaitu turunan dari Element
  - HTML Element memiliki banyak sekali property dan method tambahan selain dari Element DOM
  - Kebanyakan HTML Element memiliki property yang sesuai dengan attribute yang ada pada tag html tersebut, oleh karena itu, kadang kita tidak butuh lagi menggunakan method setAttribute dan getAttribute
  - const link = document.getElementById("link")
    link.href = "https://www.google.com"
    link.textContent = "Google"
    link.target = "_blank"
  - jadi langsung kita isikan tanpa menambahan get atau set attribute

- [html_form_element]
  - form adalah salah satu elemen yang memiliki banyak fitur diluar dari element DOM
  - Hal ini karena penggunaan Form memang lebih kompleks dibandingkan element HTML lainnya
  - Ada banyak sekali property, method dan juga event yang terdapat pada HTML form element atau input element
  - kita juga bisa mengakses form dari name nya
  - document.forms[name]
  - atau ingin mengakses inputnya berati document.forms[name][inputName]

- [html_table_element]
  - element yang kompleks selain form adalah table
  - ada banyak yang bisa di akses dari table seperti tbodies, dll

## Resources Used 📚

- [Tutorial_DOM](https://youtu.be/e5MscvTM3Us?si=5id7tBh5i2GloQ9t)
