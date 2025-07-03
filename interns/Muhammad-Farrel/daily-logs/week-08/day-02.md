# Daily Learning Log - [05/05/2025]

## Today's Focus

- [Javascript learning]

## What I Learned

- [tipe_data_object]
  - ### Associative Array
    - dijavascript associative array tidak didukung
    - jika kita paksakan, maka javascript akan mengubah tipe data array tersebut menjadi object. ini berbahaya karena di beberapa operasi array bisa merubah hasilnya.
  - ### tipe data object
    - tipe data object disebut attributes atau properties, bukan index, meskipun tipe data object mirip dengan array.
    - contoh : const person = {}
    - untuk mengisinya bisa langsung di {}, seperti :
      - const person = {"nama" : "budi", alamat : "indonesia", umur : 29}
    - bisa juga berbeda seperti : 
      - const person = {}
        person["nama"] = "budi"
      - tipe data object juga bisa menyimpan tipe data object didalamnya juga, untuk mmebuatnya seperti :
        const orang = {
            "nama": "andi",
            "umur": 30,
            "hobi": ["membaca", "bermain"],
            "alamat": {
                "jalan": "jl. raya",
                "kota": "jakarta"
            }
        };
      - untuk memunculkannya bisa dengan namatpo.namatpo2.data

- [If_Expression_(percabangan)]
    - dengan percabangan kita bisa mengeksekusi suatu kode apabila sesuai dengan suatu kondisi. untuk itu kita bisa menggunakan if expression
    - else expression, digunakan apabila kondisi dari if bernilai false.
    - else if expression, digunakan untuk menambahkan kondisi lain, karena dalam program bisa memuat banyak kondisi.
    - contoh : 
      if (nilai >= 80) {
          document.write(`<h1>Nilai Anda A</h1>`);
      }else if (nilai >= 70) {
          document.write(`<h1>Nilai Anda B+</h1>`);
      }else {
          document.write(`<h1>Nilai Anda B</h1>`);
      }
  
- [pop_up]
  - alert, digunakan untuk memberi peringatan berupa pop up pada browser
  - contoh : alert("ini adalah alert");
  - prompt, digunakan untuk meminta input data dari pengguna dalam bentuk pop up input text. untuk promt bisa dimasukan ke dalam sebuah var agar bisa disimpan hasil inputan pengguna.
  - contoh : prompt("masukkan nama : ");
  - confirm, digunakan untuk meminta input boolean dari user dalam bentuk pop up input pilihan
  - contoh : confirm("apakah anda yakin?");
  
- [undefined]
  - sebuah kata kunci di javascript, undefined adalah sebuah varibale yang belum ditambahkan nilai, maka artinya varibale itu merupakan tipe undefined.

- [Null]
  - null dengan undefined berbeda, null merupakan representasi data kosong, sudah ditambahkan value nya tapi null
  - undefined itu belum ditambahkan apapun.
  
- [switch_expression]
  - switch adalah statement percabangan yang sama dengan if, namun lebih sederhana pembuatannya.
  - kondisi di switch statement hanya untuk perbandingan ==
  - contoh :  
      switch(nilai) {
        case 100:
            document.write(`<h1>Nilai Anda A</h1>`);
            break;
        case 90:
            document.write(`<h1>Nilai Anda A</h1>`);
            break;
        case 80:
            document.write(`<h1>Nilai Anda B+</h1>`);
            break;
        default:
            document.write(`<h1>Nilai Anda B</h1>`);
            break;
    }

- [typeof]
  - operator yang bisa kita gunakan untuk melihat tipe data sebuah value atau variable
  - misalnya jika tipe data kita null maka akan dianggap "object, boolean maka akan dianggap "boolean".
  - contoh : let nilaicek = typeof nilai;

- [in_operator]
  - operator yang bisa dilakukan untuk mengecek apakah sebuah properti atau attribut dalam object atau tidak
  - contoh : if ("nama" in person) {}
  - in operator hanya mengecek apakah sebuah property ada atau tidak dalam index. tidak mengecek apakah dia undefined atau null, yang penting ada atau tidak.

- [ternary_operator]
  - ternary operator adalah operator sederhana dari if statement.
  - terdiri dari kondisi yang dievaluasi, jika menghasilkan true maka nilai pertama diambil, jika false maka nilai kedua diambil.
  - contoh : let ucapan = nilai >= 80 ? "selamat anda lulus" : "anda tidak lulus";

- [nullish_coalescing_operator]
  - nullist value adalah null dan undefined
  - nullish coalescing operator (??) adalah operator yang mirip dengan ternary, bedanya pada kondisinya, jika null/undefined, baru value default nya diambil.
  - contoh :
      let parameter;
      let data = parameter ?? null;
      if (data === undefined) {
          document.write(`${parameter}`);
      }else if (data === null) {
          document.write(`${parameter} bernilai null` );
      }

- [optional_chaining]
  - optional chaining(?) merupakan operator yang digunakan untuk mengamankan ketika mengakses properti sebuah object dari data nullish
  - jika mengakses data dari sebuha nullish tanpa optional chaining maka akan terjadi error
  - contoh : let son = {};
    alert(son?.alamat?.jl)

- [Falsy_dan_Truthy]
  - falsy(falsey), value yang ketika dalam boolean dianggap false.
  - tipe data dianggap falsy yaitu, false(boolean false), 0, -0(number 0 dan -0 dianggap false), semua string kosong dianggap false, null dianggap false, undefined dianggap false, NaN dianggap false.
  - didalam javascript, boolean sedikit berbeda karena ada istilah kita konversi tipe data lain ke boolean. dan ada 2 yaitu falsy dan truthy.
  - perlu diingat walaupun sebuah string berisi "false" nilainya akan tetap true.

- [operator_di_Non_Boolean]
  - operator and(&&) dan or(||) digunakan untuk dua data boolean
  - namun di javascript kita juga bisa menggunakan operator tersebut untuk data non boolean
  - or(||) itu membaca dari kiri ke kanan dan dia mengambil niar truthy, apabila tidak ada yang truthy makak yang terakhir akan di ambil.
  - contoh : console.info(""||"world"); yang diambil adalah world karena string kosong adalah falsy
  - and(&&), membaca dari kiri ke kanan, operator ini akan mengambil nilai pertama yang falsy, jika tidak ada yang falsy maka akan mengambil nilai terakhir.

- [for_loop]
  - for adalah kata kunci yang digunakan untuk melakukan pengulangan
  - blok kode dalam for akan selalu diulang.
  - for (init_statement;kondisi;post_statement) {}
  - init statement akan dieksekusi hanya sekali di awal sebelum perulangan, kondisi akan dilakukan pengecekan dalam setiap perulangannya, jika true perulangan akan dilakukan, jika false maka akan berenti
  - post statement akan dieksekusi setiap kali diakhir perulangan
  - jika init statement, kondisi, dan post statement tidak diisi maka akan selalu bernilai true.
  - contoh : for (let nomor = 1; nomor<=10;nomor++) {
                  document.write(`nomor ${nomor} <br>`);
              } 

- [while_loop]
  - pengulangan yang lebih sederhana dari for yang mana hanya memiliki satu kondisi.
  - while (kondisi) {}
  
- [do_while_loop]
  - perulangan yang mirip dengan while, bedanya terletak pada pengecekan kondisi.
  - pengecekan kondisi dilakukan di setelah perulangan dilakukan.
  - do {syntaks} while (kondisi)

- [break_&_continue]
  - break bisa digunakan untuk menghentikan loop yang berjalan.
  - untuk menggunakan kita bisa menambahkannya didalam syntaks
  - contoh : do {alert("hai") if(var==false){break;} } while(kondisi)
  - continue digunakan untuk menghentikan perulangan saat ini lalu meneruskan ke perulangan selanjutnya
  - for (init_statement;kondisi;post_statement){if (kondisi){continue;}syntaks_for}
  - for (let i = 1; i <= 10; i++) {
      if (i % 2 === 0) {
          continue; // skip even numbers
      }
      document.write(`nomor ${i} <br>`);
    }

- [label]
  - penanda yang bisa digunakan dengan kata kunci break dan continue
  - dengan menggunakan label, kita bisa melakukan break dan continue terhadap perulangan yang kita inginkan
  - contoh : loop1 :
              for (let a = 1; a<=10; a++) {
                  loop2:
                      for (let b = 0; b<=2; b++) {
                          if (b>10) {
                              continue loop2; // skip to the next iteration of loop1
                          }
                          console.log(`${a} - ${b}`);
                      }
              }

- [for_in]
  - for in digunakan untuk mengiterasi seluruh data property di object/array
  - walaupun bisa untuk array, tapi tidak direkomendasikan, karena jarang sekali kita butuh index untuk array
  - for (const indeks in person) {document.write(`${person[indeks]}`)}

-[for_of]
  - for of digunakan untuk melakukan iterasi terhadap isi value dari iterable object, seperti array, string, dan lain lain.
  - for of tidak bisa digunakan untuk melakukan iterasi pada object, karena object bukan iterable.
  - for (const indeks of person) {}
## Resources Used 📚

- [tutorial_javascript](https://youtu.be/SDROba_M42g?si=KB1hDbnVRNBgtCVw)
