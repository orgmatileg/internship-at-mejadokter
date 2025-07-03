# Daily Learning Log - [31/05/2025]

## Today's Focus

- [Asynchronous]

## What I Learned

- [penjelasan]
  - secara default, proses di js akan dieksekusi secara synchronous, artinya baris selanjutnya akan di eksekusi setelah baris sebelumnya di eksekusi
  - Asynchronous itu berbeda dengan synchronous, secara async, js tidak akan menunggu proses tersebut seleai, melainkan js akan melanjutkan ke baris selanjutnya tanpa harus mnunggu proses asynchronous selesai
  - asynchronous disebut juga non bloking

- [callback]
  - mekanisme untuk memanggil kembali kode yang ada dari proses async
  - callback biasanya dibuat dalam bentuk function as parameter, dan parameter function tersebut akan dieksekusi saat proses Async selesai
  - dengan callback, program bisa menerima informasi dari proses yang berjalan secara async
  - ### Async method
    - setTimeout(callback, timeinMilis), digunakan untuk menjalakan proses async sekali dalam waktu tertentu
    - setInterval(callback, timeinMilis), digunakan untuk menjalakan proses async secara periodik dalam waktu tertentu

- [AJAX]
  - sinkatan dari Asynchronous Javascript dan xml
  - ajax digunakan untuk mengambil atau mengirim data ke url lain
  - untuk menggunakannya, kita bisa menggunakan XMLHttpRequest
  - contoh penggunaan ajax :
    - const ajax = new XMLHttpRequest();
      ajax.open("GET", "api/hello.json");
      ajax.send();
    - ajax.open akan melakukan request ke folder api ke file hello.json dengan metode nya GET
    - ajax send digunakan untuk mengirimkan request tersebut

- [menerima_ajax]
  - ajax digunakan untuk mengirim data ke server atau menerima data dari server
  - kita tidak bisa langsung mengambil response AJAX, karena proses AJX adalah async, sehingga kita perlu menunggu sampai proses async nya selesai
  - untuk mendapat informasi ajax kita bisa menggunakan AJAX Callback, yang akan dieksekusi setelah ajax selesai
  - untuk menambah AJAX Callback bisa pada event load atau event listener
  - untuk mengambil datanya dari server, kita bisa menggunakan property responseText
  - contoh penerima ajax :
    - const ajax = new XMLHttpRequest();
      ajax.open("GET", "api/hello.json");
      ajax.addEventListener("load", function(){
          const json = JSON.parse(ajax.responseText);
          const header = document.getElementById('response');
          header.textContent = json.response['message'];
      })
      ajax.send();
    - menggunakan eventlistener untuk bisa menambah ajax callback, lalu file json di parse terlebih dahulu dengan isinya ajax.responseText karena mengambil data, lalu dimasukan ke element html sebagai text content untuk ditampilkan

- [response_status_Ajax]
  - AJAX adalah proses komunkasi client dan sever
  - akan ada banyak hal yang mengganggu proses ajax yang menyebabkan error
  - server akan mengirimkan HTTP status code yang sesuai dengan jenis responsenya
  - untuk mengetahui status response kita bisa menggunakan kata kunci status
  - misal kita kita salah memasukan nama file atau folder dalam open, maka akan eror dengan status 404, begitupun dengan eror lainnya

- [State_di_ajax]
  - kita bisa mendapatkan banyak sekali state dengan property readyState
  - property readyState mengembalikan nilai number, dimaana tiap number merupakan representasi dari statenya.
  - daftar state :
    - 0 = unsent, client sudah dibuat xml ajax nya tapi belum di open() atau belum dipanggil
    - 1 = opened, open() telah dipanggil
    - 2 = headers_reveived, send telah dipanggil dan headers dan status telah berhasil
    - 3 = loading, sedang proses download responseText
    - 4 = done, operasi telah selesai, dan bisa digunakan datanya
    - ### ready state change event
      - jika kita ingin mendengarkan perubahan yang terjadi pada state, kita bisa gunakan readystatechange pada on atau eventlistener
      - contoh penggunaannya :
        - ajax.onreadystatechange = function(){
              console.log(ajax.readyState);
          }

- [Hookbin]
  - salah satu website gratis yang lumayan populer untuk menerima data AJAX yang kita kirim, yaitu Hookbin
  - hookbin adalah aplikasi yang bisa digunakan untuk menerima request HTP dan menyimpan datanya. kita bisa menggunakan hookbin untuk melihat detail data dari ajax
  - untuk menggunakannya saat kita open ajax, kita msukan metode post dan url dari hookbinnya
  - lalu ajax nya kita ("Content-Type", "application/json")
  - lalu kita send json yang sudah di stringify

- [url_Search_Param]
  - saat kita ingin mengirim data dengan ajax kita bisa mengubah url nya dengan menambahkan query parameter, namun ada cara yang lebih mudah yaitu menggunakan object URLSearchParam
  - ada banyak method untul URLSearchParam, method umum yang sering digunakan juga
  - untuk membuat sebuah URLSearchParam, const param = new URLSearchParams();
  - lalu kita bisa meng append kan isi dari param tersebut dengan elemen html
  - method pada ajax open juga gunakan "GET"
  - lalu tambahkan ?${param.toString()} pada url server

- [FORM_Data_AJAX]
  - kita tetap bisa menggunakan method URLSearchParam untuk ini, tapi kita kirim menggunakan send, bukan url lagi
  - jadi kita send(new URLSearchParam)
  - dengan metodenya POST dan kita tidak perlu lagi menambahkan pada url hookbinnya

- [upload_file_dengan_ajax]
  - untuk mengirim file ke server, kita perlu menggunakan object Form Data, lalu kita tambahkan object file ke dalam form data tersebut
  - penggunaan object form data sangat mirip dengan URLSearchParam
  - kita buat new FormData(), lalu kita append kan value input di form kita
  - kita buat var files untuk getelement id ke input file lalu kita buat variable untuk mengambil item nya dengan ffiles = files.item(0)
  - lalu kita append pada form data berisi ('files', ffiles)
  - lalu kita send formdata nya

- [Promise]
  - promise merupakan proxy untuk sebuah nilai di masa depan yang belum diketahui saat pembuatan promise tersebut
  - biasanya promise digunakan sebagai proxy untuk proses Async
  - ### promise state
    - state pending, saat promise dibuat dan belum ada datanya, jadi belum jelas akan ditepati atau tidak, maka resultnya adalah undefined
    - state fullfilled, jika promise state pending berubah ke fullfilled artinya datanya atau value nya sudah terisi sudah terisi, maka resultnya adalah value
    - state rejected, artinya ada eror yang telah terjadi, misalnya promise state pending kita berubah ke rejected maka resultnya error
  - untuk membuat promise kita bisa gunakan new Promise(executor: function (resolve, reject))
  - ### method
    - then(), mendapatkan atau mengubah data ketika promise sukses
    - catch(), mendapatkan data error ketika promise gagal
    - finally(), akan dieksekusi ketika terjadi sukses atau saat gagal, khusus finally tidak punya parameter.
    - ketika menggunakan method ini, jangan gunakan titik koma kalau tidak ingin memutus hubungan method
    - function()
        .then(function(){program})
        .catch(function(){program})
        .finally(fucntion(){program});
  - ### static method
    - promise.all() digunakan untuk mengeksekusi beberapa promise sekaligus dan menunggu semua hasil promisenya
    - promise.any() digunakan untuk mengeksekusi beberapa promise sekaligus dan mengambil hasil promise tercepat
    - promise.race() digunakan untuk mengambil hasil promise pertama
    - untuk menggunakannya kita bisa memasukan nama function promise ke dalam sebuah variabel dengan isi promise.all(function)
    - const promises = Promise.all([
          produk2('product'),
          produk2('product2'),
          produk2('product3')
      ])
    - lalu bisa kita lakukan .then pada nama variablenya

- [Fetch_API]
  - fitur baru sebagai alternatif dari AJAX
  - Fetch API sudah menggunakan Promise, sehingga penggunaan fetch api lebih mudah dibandingkan AJAX
  - saat kita menggunakan fetch API kita perlu mebuat object request, membuatnya menjadi lebih rapih dibanding ajax
  - untuk membuat request kita bisa menggunakan new Request()
  - respon dari fetch yaitu promise

- [Await]
  - fitur untuk mempermudah proses pembuatan promise
  - dengan await kita bisa membuat sebuah asynchronous terlihat seperti synchronous
  - dengan menggunakan Async kita tidak perlu mrmbuat promise secara manual
  - cukup didepan function kita ketikan async, secara otomatis function tersebut dijalankan secara async
  - contoh async :
      async funtion(){program};
  - await, digunakan untuk mendapat value hasil dari promise, tapi promise hanya bisa digunakan dalam async
  - async function(){const wait = await namafetch(); return wait.property}
  - untuk menangkap error di await kita bisa menggunakan kata kunci try catch() dan kita letakan didalam async function
  - async function getbil (){
        try{
            const product = await ambil();
            return product.response.name;
        }catch(error){
            console.error("Terjadi kesalahan:", error);
            return "Tidak dapat mengambil data";
        }
    }

- [web_worker]
  - javascript itu single proses, berati walaupun kita jalankan secara asynchronous tapi dia dijalan kan oleh satu orang
  - kemampuan satu thread untuk mengelola beberapa pekerjaan dinamakan concurrent
  - kemampuan menjalakankan bebarapa thread untuk mengelola satu atau lebih pekerjaan dinamakan paralel
  - untuk membuat proses secara paralel, kita bisa menggunakan web worker
  - untuk membuat web worker, kita bisa membuat object worker, dan kita harus memberikan perintah agar bisa berjalan
  - untuk mengirim pesan, kita menggunakan metode postMessage()
  - untuk menerima balasan dari worker, kita bisa menggunakan event listener onmessage
  - data yang diterima adalah object MessageEvent
  - contoh penggunaan :
      const worker = new Worker("api/product.js");
      worker.addEventListener("message", function(message){
          console.log("pesan dari worker:", message.data);
      })
      document.getElementById('slowbut').onclick = function(){
          worker.postMessage(100000);
      }

## Resources Used 📚

- [tutorial async](https://youtu.be/1E7W29-GjRM?si=VHarZqjXCgvr05CO)
