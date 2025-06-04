# Daily Learning Log - [18/05/2025]

## Today's Focus

- [Belajar bahasa pemrograman Javascript]

## What I Learned

### Upload File dengan AJAX
- Selain menggunakan JSON, Query Param, Form, kadang kita butuh mengirim file ke Server
- Untuk mengirim file ke Server, kita perlu menggunakan object Form Data, lalu kita perlu menambahkan object File ke dalam FormData tersebut
- [link](https://developer.mozilla.org/en-US/docs/Web/API/FormData )
- [link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file )
- [link](https://developer.mozilla.org/en-US/docs/Web/API/File )
- [link](https://developer.mozilla.org/en-US/docs/Web/API/FileList) 

### Apa itu Promise?
- Promise merupakan proxy untuk sebuah nilai di masa depan (Future) yang belum diketahui saat pembuatan Promise tersebut.
- Biasa Promise digunakan sebagai proxy untuk proses Async.
- Penggunaan Promise sangat mudah, dan lebih mirip dengan kode Synchronous.
- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )


### Fetch API
- Fetch API merupakan fitur baru sebagai alternatif AJAX
- Saat menggunakan AJAX, kita perlu menggunakan Callback untuk menerima response atau data dari Server, sedangkan Fetch API sudah menggunakan Promise, sehingga penggunaan Fetch API lebih mudah dibandingkan AJAX
- Hampir semua browser modern sekarang sudah mendukung menggunakan Fetch API
- Apa yang bisa kita lakukan di AJAX, bisa juga kita lakukan di Fetch API
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API )

### Async Await
- Async Await adalah fitur di JavaScript yang digunakan untuk mempermudah proses pembuatan kode Promise.
- Dengan menggunakan Async Await, kita bisa membuat kode Asynchronous dengan gaya Synchronous

### Thread di JavaScript
- JavaScript adalah Single Thread (Single Proses), artinya walaupun proses yang kita buat adalah Async, tapi tetap akan dijalankan dalam Thread (Proses) yang sama.
- Kemampuan satu Thread dalam mengelola beberapa pekerjaan, dinamakan Concurrent.
- Kemampuan menjalankan beberapa Thread untuk mengelola satu atau lebih pekerjaan, dinamakan Paralel. 
- Dan untuk membuat proses secara Paralel, kita bisa menggunakan Web Worker
## Resources Used 📚
[tutorial_javascript](https://youtube.com/playlist?list=PL-CtdCApEFH8SS0Gsj9_a0cC0jypFEoSg&si=2GXqQE6Pyee4ME5O)