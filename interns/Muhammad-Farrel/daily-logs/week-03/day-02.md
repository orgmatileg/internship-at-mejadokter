# basis data day-02

---

### yang sudah dipelajari:  
- Tahapan membuat ERD
    - menentukan entity (siapa saja yang terlibat)
    - menentukan atributte key/primary key (atributte setiap entity, contohnya email pelanggan)
    - menentukan atributte (atribute tiap entity yang masuk ke ruang lingkup yang akan dibuat, contohnya nama entity)
    - membuat relationshipya


- implementasi model data
    - tahapan untuk membuat basis data secara fisik
    - implementasi umum :
        - entity akan menjadi tabel
        - atributte akan menjadi kolom tabel
        |  entity  |
        |email|nama|


    - tipe data :
        - text = string
        - number = integer
        - date, time, timestamp
        - boolean = true or false


    - relatioship
        - kardinalitas/derajat relasi
            - menunjukkan jumlah entity yang dapat berelasi dengan entity lainnya 
            - jenis jenis derajat relasi :
                - one to one = hanya bisa berelasi dari satu entity ke satu entity yang lain
                - one to many = satu entity bisa berelasi ke banyak entity (tapi tidak sebaliknya)
                - many to one = kebalikan dari one to many (banyak entity ke satu entity)
                - many to many = banyak entity bisa berelasi ke banyak entity

    
    - tahapan membuat ERD lanjutan :
        - menentukan relationship
        - menentukan attribute foreign key, yaitu attribute key yang mempresentasikan entity tersebut
        - menentukan derajat relasi
        - melengkapi attribute tambahan (apa bila diperlukan)
            
        