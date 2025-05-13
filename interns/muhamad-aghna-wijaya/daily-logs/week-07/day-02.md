# Daily Learning Log - [06/05/2025]

## Today's Focus

- [Belajar bahasa pemrograman Javascript]

## What I Learned

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
```typescript
<script>
document.writeln("<textarea cols='100' rows='10'>"); //untuk memasukan 
        // text yg kita tulis ke dalam text area

        document.write("na \n ni\n");
        document.write("\\ home\n");
        document.write("\" citraland \"\n");
        document.write(" \' livistona \'");
        document.writeln("</textarea>"); 
</script>

Variable

<script>
        let fullName = "muhamad aghna wijaya";
        let firstName = "muhammad";
        let midleName = "aghna";
        let lastName = "wijaya";

        document.writeln(fullName);
        document.writeln("</br>");
        document.writeln(firstName);
        document.writeln("</br>");
        document.writeln(midleName);
        document.writeln("</br>");
        document.writeln(lastName);
        document.writeln("</br>");

// perbedaan nya pengguaan variable let bisa di edit, jika mengunakan const paten tidak bisa di ubah	

        const application  ="beljar javascript";

        document.writeln(application);
    </script>

MTK

    <script>
        let result = 1 + 2; //3
        document.writeln("<p> 1 + 2 = " + result + "</p>")
        let originalresult = result; //3

        result = result - 1; //2
        document.writeln("<p>" + originalresult + " - 1 = " + result + "</p>");
        originalresult = result;//2

        result = result * 2; //4
        document.writeln("<p>" + originalresult + " x 2 = " + result + "</p>");
    </script>
    <script>
         let result = 1 + 2; //3
        document.writeln("<p> 1 + 2 = " + result + "</p>")
        let originalresult = result; //3

        result -=1; //2
        document.writeln("<p>" + originalresult + " - 1 = " + result + "</p>");
        originalresult = result;//2

        result *=2; //4
        document.writeln("<p>" + originalresult + " x 2 = " + result + "</p>");
    </script>
    <script>
        let result = +1;
        document.writeln("<p>" + result + "</p>");

        // code di bawah untuk menurun kan satu angka menjadi 0
        result--; // result  = result -1 ; result -=  1; 0  
        document.writeln("<p>" + result + "</p>");

        // code ini untuk menaikan atau menambahkan satu angka, dari 0 menjadi 1
        result++; // result = result +1 ; result += 1; 1
        document.writeln("<p>" + result + "</p>");

        result = -result; // menjadi -1
        document.writeln("<p>" + result + "</p>");
    </script>
    <script>
        let result = 5 == "5";
        document.writeln("<p>" + result + "</p>")

        result = 5 === "5";
        document.writeln("<p>" + result + "</p>")

        result = 5 > 10;
        document.writeln("<p>" + result + "</p>")

        result = 5 < 10;
        document.writeln("<p>" + result + "</p>")

    </script>
    <script> //true atau false (lulus atau tidak)
        const nilaiUjian = 70;
        const nilaiAbsensi = 70;

        const lulusUjian = nilaiAbsensi > 75;
        const lulusAbsensi = nilaiUjian > 75; 

        const lulus = lulusAbsensi && lulusUjian;
        document.writeln(lulus);    
    </script>	

console
   <script>
        console.info("haii");
        console.warn("hati-hati!!");
        console.error("waduh");
        console.debug("debug");
    </script>	
```
## Resources Used 📚
[tutorial_javascript](https://youtube.com/playlist?list=PL-CtdCApEFH8SS0Gsj9_a0cC0jypFEoSg&si=2GXqQE6Pyee4ME5O)