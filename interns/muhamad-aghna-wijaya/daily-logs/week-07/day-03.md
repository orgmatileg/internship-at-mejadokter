# Daily Learning Log - [07/05/2025]

## Today's Focus

- [Belajar bahasa pemrograman Javascript]

## What I Learned

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
 - ### Array
    - Array di javascript sangat mirip seperti array di php, yang mana bisa berubah dan bertambah.
    - untuk membuat array, bisa seperti
       let arraysaya = ["apel", "pisang", "anggur"], bisa kuga array kosong seperti let Arraykosong = []
    - posisi data dalam array disebut index
    - array dimulai dari 0
    - array.indexOf digunakan untuk mencari index dari sebuah data
    - operasi di Array
      - array.push(value), menambah data ke Array
      - array.length, untuk mendapatkan panjag length
      - array[index], mendapat data di posisi index
      - array[index] = value, mengubah data di posisi index
      - delete array[index], menghapus data di posisi index, namun index tidak bergeser
    - tidak ada batasan dalam array di javascript, bahkan kita bisa memasukan array ke dalam array(multidimension array)

### Tipe Data Object

- Tipe data object adalah tipe data yang mirip dengan tipe data Array
- Yang membedakan adalah index pada tipe data object bisa menggunakan string
- Index di object biasanya disebut attributes atau properties, bukan index

### If Expression

- Dalam JavaScript, if adalah salah satu kata kunci yang digunakan untuk percabangan
- Percabangan artinya kita bisa mengeksekusi kode program tertentu ketika suatu kondisi terpenuhi
- Hampir di semua bahasa pemrograman mendukung if expression

## Alert, Prompt dan Confirm

- JavaScript memiliki fitur yang bernama alert, prompt dan confirm
- Alert digunakan untuk memberi peringatan berupa popup text di browser
- Prompt digunakan untuk meminta input string dari pengguna browser dalam bentuk popup input text
- Sedangkan confirm digunakan untuk meminta input boolean dari pengguna browser dalam bentuk popup input pilihan


## undefined

- undefined adalah sebuah kata kunci di JavaScript
- undefined adalah sebuah tipe data
- Sebuah variable yang belum ditambahkan nilai maka artinya variable tersebut merupakan tipe undefined
- Kadang untuk programmer JavaScript pemula undefined ini memang agak sedikit membingungkan
- undefined itu berbeda dengan null di bahasa pemrograman lain

## Null

- nuil merupakan representasi data kosong
- null berbeda dengan undefined, null berarti variable sudah ditambahkan value nya, hanya saja value nya null
- Sedangkan undefined adalah variable belum ditambahkan value apapun

### Switch Statement

- Kadang kita hanya butuh menggunakan kondisi sederhana di if statement, seperti hanya menggunakan perbandingan --
- Switch adalah statement percabangan yang sama dengan if, namun lebih sederhana cara pembuatannya
- Kondisi di switch statement hanya untuk perbandingan ==

### Operator typeof

- typeof merupakan operator yang bisa kita gunakan untuk melihat tipe data sebuah value atau variable
- Karena JavaScript merupakan dynamic langauge, jadi kadang kita perlu mengecek tipe data sebuah value atau variable menggunakan operator typeof 
- Hasil dari operator typeof adalah string tipe datanya

### In Operator

- In operator adalah operator yang bisa dilakukan untuk mengecek apakah sebuah property ada di dalam object atau tidak
- Jika property tersebut ada di object, maka hasilnya true, sedangkan jika tidak, maka hasilnya false
- Tidak hanya di object, In juga bisa digunakan untuk mengecek index di Array

### Ternary Operator

- Ternary operator adalah operator sederhana dari if statement
- Ternary operator terdiri dari kondisi yang dievaluasi, jika menghasilkan true maka nilai pertama diambil, jika false, maka nilai kedua diambil

### Nullish Coalescing Operator

- Nullist value adalah null dan undefined
- Nullist coalescing operator (??) adalah operator mirip dengan ternary operator, yang membedakan adalah pada kondisi, jika bernilai null atau undefined, baru value default nya diambil

### Optional Chaining

- Optional chaining operator (2) merupakan operator yang digunakan untuk mengamankan ketika kita ingin mengakses property sebuah object dari data nullish
- Jika kita mencoba mengakses property dari sebuah object dari data nullish tanpa menggunakan optional chaining operator, maka akan terjadi error

### Falsy dan Truthy
1. 
    - Faisy atau kadang ditulis falsey, adalah value yang ketika dalam konteks boolean, dia dianggap false
    - Ini adalah salah satu fitur unik dari JavaScript, yang berguna, namun kadang juga sering membingungkan
    - Jadi di JavaScript, kondisi itu tidak hanya bisa boolean, tapi diluar boolean pun bisa, namun kita harus tahu beberapa data falsy, atau dianggap false
2. 
    - Truthy adalah kebalikan dari falsy, dimana data nya dianggap bernilai true
    - Sederhana sekali sebenarnya untuk mengetahui sebuah data itu adalah truthy, yaitu data yang bukan bernilai falsy

```typescript
string dan number 
 <script>
        const value1 = parseInt("1"); //string yang ada di dalam kurung berubah menjadi int menggunakan code tersebut
        const value2 = 1;
        const sum = value1 + value2;

        document.writeln(`<p>${sum}</p>`)

        document.writeln("</br>")

        document.writeln(`<p>${parseInt("1.1")}<?p>`); // mengunakan code ini merubah bilangan pecahan menjadi bilangan bulat hasil 1
        document.writeln(`<p>${parseFloat("1.1")}<?p>`); // menggunakan code ini dia akan menerima angka pecahan hasil 1.1
        document.writeln(`<p>${Number("1.1")}<?p>`); // dia bisa di gunakan kedua bilangan bulat dan pecahan

        document.writeln("</br>")

        const a =1;
        const b =1;
        const total = a + b; // jika menambhkan toString() number akan menjadi string "= a.toString() + b.tostring hasil akan 11 karena keda nya di ganti menjadi string" 
        document.writeln(`<p>${total}</p>`)

        document.writeln("</br>")

        document.writeln(`<p>${parseInt("salah")}<?p>`); // akan muncul nan not a number karena ini ada lah kalimat jika di depan memiliki satu angka masih tetap muncul tapi sting nya tidak
        document.writeln(`<p>${parseFloat("1.1na")}<?p>`); // pecahan nya akan muncul tidak dengan "na" nya karena letak di belakang jika letak di depan akan muncul nan
        document.writeln(`<p>${Number("1.1na")}<?p>`); // akan muncul nan karena ada sebuah sting di tolak hanya boleh memunculkan number

        
        const frist = Number("salah");
        const totalnumber = frist + 100; // walaupun di jumlah hasil tetap nan
        document.writeln(`<p>${totalnumber}</p>`)

        document.writeln(`<p>${isNaN(frist)}</p>`); // ini membaca apakah variable frist itu nan atau bukan jika benar berarti true
        document.writeln(`<p>${isNaN(100)}</p>`); // ini memebaca apakah var 100 nan atau bukan jika bukan berarti false
    </script> 	 

array dan object
    <script>
        let arraykosong = [];
        let arraynama = ["aghna wijaya","mantap"];

        const nama = [];
        nama.push("aghna");
        nama.push("wijaya");
        console.table(nama);

        console.info(nama[0]);
        console.info(nama[1]);
        console.table(nama);
        nama[0] = "muhamad aghna wijaya";
        nama[1] = "miliarder";
        nama.push("keren")
        console.table(nama);
        delete nama[2];
        console.table(nama);
        name[2] = "rich";
        console.table(nama);
        nama.push("mantap");
        console.table(nama);
        nama[2] = "rich";
        console.table(nama);
        delete nama[3];
        console.table(nama);
    </script>
    <script>
        const person ={};

        //ubah property
        person["nama"] = "aghna wijaya";
        person["alamat"] = "indonesia";
        person["umur"] = 17;

        console.table(person);

        const orang = {
            nama: "pesek",
            alamat: "indonesa",
            umur: "13"
        };

        console.table(orang);       
    </script>

if else
    <script>
        const examValue = 70;

        if (examValue > 80){
            document.writeln("<p>Menyalaaa</p>");
        }else if (examValue > 65){
            document.writeln("<p>Menyalaaa</p>")
        }else {
            document.writeln("<p>Coba lagi</p>");
        }
    </script>

popup
    <script>
        alert("selamat datang!");
    </script>
    <script>
        const name = prompt("siapa nama anda?");
        alert(`Hello ${name}`);
    </script>
    <script>
        const masuk = confirm("anda ingin masuk?");
        if (masuk) {
            const name = prompt("siapa nama anda?");
        alert(`Hello ${name}`);
        } else{
            alert("Terimakasih!");
        } 
    </script>

undefined & defined
    <script>
        let name = "na";
        if( name === undefined){
            console,info("undefined");
        } else { // jika kita tidak memebuan kalimat variable akan akn di munculkan undefinnded
            console.info("defined");
        }

        const nama =["aghna", "wijaya"];
        if (nama[2] === undefined){
            console.info("array undefined")
        } else {
            console.info("array defined")
        }
        //ini person
        const person = {}; 
        if (person,names === undefined){
            console.info("object undefined")
        } else {
            console.info("object defined")
        }
    </script>

null
    <script>
        let firstName = null;

        if (firstName === undefined) {
            alert("undefined");
        } else if (firstName === null) {
            alert("null");
        } else {
            alert(firstName);
        }
    </script>

switvh
    <script>
        const nilai = "";
        switch (nilai){
            case "A":
                document.writeln("<p> anda lulus dengan sempurna!!</p>");
                break;
            case "B":
            case "C":
            document.writeln("<p> anda lulus!!</p>");
            break;
            case "D":
            document.writeln("<p> Tidak lulus</p>");
            break;
            default:
            document.writeln("<p> Anda salah jurusan?</p>");
        }
    </script>
    <script>
        const nilai = 80;
        let ucapan;

        if (nilai >=75){
            ucapan = "selamat anda lulus!!"
        } else  {
            ucapan = "coba lagi"
        }
        document.writeln(`<p>${ucapan}</p>`)
        // kedua code memiliki hasil yg samma cuman di persingkat menggunakan ternary operator yg di bawah
        ucapan = nilai >= 75 ? "selamat anda lulus!!" : "coba lagii";
        document.writeln(`<p>${ucapan}</p>`)
    </script>
    <script>
        let parameter = null;

        let data = parameter;
        if (data === undefined || data === null) {
            data = "nilai default";
        }
        document.writeln(`<p>${data}</p>`);
        // cara yg bawah lebih seder hana mengunakan cara nullish
        data = parameter ?? "nilai default";
        document, writeln(`<p>${data}</p>`);
    </script>
</body>
oppsional chaining 
    <script>
        const person = {
            addres: {
                country : "indonesia"
            }
        };
        //if(person.addres !== undefined && person.addres !== null){
          //  country = person.addres,country;
        //} // lebih mudah mengunakan yg bawah
        let country = person?.addres?.country;
        document.writeln('sukses');
        document.writeln(`<p>${country}</p>`)
    </script>
```
## Resources Used 📚
[tutorial_javascript](https://youtube.com/playlist?list=PL-CtdCApEFH8SS0Gsj9_a0cC0jypFEoSg&si=2GXqQE6Pyee4ME5O)