    import express from 'express';
    import path from 'path';
    import { fileURLToPath } from 'url';
    import session from 'express-session';
    import { db } from './src/database/db.js';
    import { categories, house, buyers } from './src/database/schema.js';
    import router from './src/database/schema.js';
  import { eq, and, gte, lte, sql, lt } from 'drizzle-orm';
    import multer from 'multer';
    

    const app = express();
    if (db) {
        console.log('database connected')
    }

    app.use(express.urlencoded({ extended: true }));
    
    const filename = fileURLToPath(import.meta.url);
    const dirname = path.dirname(filename);
    const upload = multer({ storage: multer.memoryStorage() });
    app.use(express.static(path.join(dirname, 'src')));
    app.set('view engine', 'ejs');
    app.set('public', path.join(dirname, 'public'));

    app.get('/', async (req, res, next) => {
        res.sendFile(path.join(dirname, 'public/index.html'));
    })
    app.get('/api/categories', async (req, res, next) => {
        try {
            const result = await db.select().from(categories);
            res.json(result);
        } catch (error) {
            console.error("Error fetching categories:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    });

    app.post('/category', async (req, res, next) => {
        const {nameCat, detail} = req.body;
        try {
            console.log(req.body);
            await db.insert(categories).values({
                nameCat : nameCat,
                detail : detail
            })
            res.redirect('/category');
        } catch (error) {
            console.error("gagal menambah category:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    });
    app.delete('/category/:id', async (req, res) => {
        const { id } = req.params;
        try {
            await db.delete(categories).where(eq(categories.id_category, id));
            res.status(200).send({ success: true });
        } catch (error) {
            console.error("Gagal delete kategori:", error);
            res.status(500).send({ error: "Gagal delete kategori" });
        }
    });
    app.get('/api/categories/:id', async (req, res) => {
        const { id } = req.params;
        try {
            const [result] = await db.select().from(categories).where(eq(categories.id_category, id));
            if (!result) return res.status(404).json({ error: "Kategori tidak ditemukan" });
            res.json(result);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Gagal mengambil data kategori" });
        }
    });

    app.post('/category/edit/:id', express.json(), async (req, res) => {
        const { id } = req.params;
        const { nameCat, detail } = req.body;
        try {
            await db.update(categories).set({ nameCat, detail }).where(eq(categories.id_category, id));
            res.status(200).send({ message: "Kategori diperbarui" });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Gagal mengupdate kategori" });
        }
    });


const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'public/uploads'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});


app.post('/house', upload.single('picture'), async (req, res) => {
  const { name, address, price, bed, bath, sqft, category_id, seller, contact } = req.body;
  const picture = req.file ? `/uploads/${req.file.filename}` : '';

  try {
    await db.insert(house).values({
      name,
      address,
      price, 
      bed: parseInt(bed),
      bath: parseInt(bath),
      sqft,
      picture,
      category_id: parseInt(category_id), 
      seller,
      contact
    });

    res.redirect('/house');
  } catch (err) {
    console.error("Gagal menyimpan rumah:", err);
    res.status(500).send("Terjadi kesalahan");
  }
});

    app.get('/api/houses/:id', async (req, res) => {
        const { id } = req.params;
        try {
            const [result] = await db.select().from(house).where(eq(house.id_house, id));
            if (!result) return res.status(404).json({ error: "Rumah tidak ditemukan" });
            res.json(result);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Gagal ambil data rumah" });
        }
    });

    app.delete('/house/delete/:id', async (req, res) => {
        const { id } = req.params;
        try {
            await db.delete(house).where(eq(house.id_house, id));
            res.status(200).json({ message: "Rumah dihapus" });
        } catch (err) {
            res.status(500).json({ error: "Gagal hapus rumah" });
        }
    });

    app.get('/api/houses', async (req, res) => {
    try {
        const { category, minPrice, maxPrice } = req.query;

        const conditions = [];

      
        if (category) {
            conditions.push(eq(house.category_id, Number(category)));
        }

   
        if (minPrice) {
            conditions.push(gte(house.price, Number(minPrice) * 1_000_000));
        }

        if (maxPrice) {
            conditions.push(lt(house.price, Number(maxPrice) * 1_000_000));
        }

        const results = await db
            .select()
            .from(house)
            .innerJoin(categories, eq(house.category_id, categories.id_category))
            .where(conditions.length > 0 ? and(...conditions) : undefined);

        res.json(results);
    } catch (error) {
        console.error("Error fetching filtered houses:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



    app.delete('/house/delete/:id', async (req, res) => {
        const { id } = req.params;
        try {
            await db.delete(house).where(eq(house.id_house, id));
            res.status(200).json({ message: "Rumah dihapus" });
        } catch (err) {
            res.status(500).json({ error: "Gagal hapus rumah" });
        }
    });

    app.get('/api/buyers', async (req, res, next)=> {
        try {
            const result = await db.select().from(buyers).innerJoin(house, eq(buyers.house_id, house.id_house));
            res.json(result)
        } catch (error) {
            console.log(`salah dengan error : ${error}`)
        }
    })

app.post('/house/edit/:id', upload.single('picture'), async (req, res) => {
  const { id } = req.params;
  const {
    name,
    alamat,
    price,
    bed,
    bath,
    sqft,
    category_id,
    seller,
    contact
  } = req.body;

  const picture = req.file ? req.file.originalname : null;

  try {
    await db.update(house)
      .set({
        name,
        address: alamat,
        price,
        bed,
        bath,
        sqft,
        picture,
        category_id,
        seller,
        contact
      })
      .where(eq(house.id_house, id));

    res.redirect('/house');
  } catch (err) {
    console.error("Gagal update rumah:", err);
    res.status(500).json({ error: "Gagal update rumah" });
  }
});


    app.get('/category', (req, res, next) => {
        res.sendFile(path.join(dirname, 'public/category.html'));
    })
    app.get('/category/edit/:id', (req, res, next) => {
        res.sendFile(path.join(dirname, 'public/catedit.html'));
    })
    app.get('/house/edit/:id', (req, res, next) => {
        res.sendFile(path.join(dirname, 'public/houseedit.html'));
    })
    app.get('/house', (req, res, next) => {
        res.sendFile(path.join(dirname, 'public/house.html'))
    })

    app.get('/buyers', (req, res, next)=>{
        res.sendFile(path.join(dirname, 'public/buyers.html'))
    })
    app.get('/buyers/:id', (req, res, next)=>{
        res.sendFile(path.join(dirname, 'public/addbuy.html'))
    })

    app.post('/buyers/:id', async (req, res) => {
        const { house_id, nameB, contact, location, Message } = req.body;

        try {
            await db.insert(buyers).values({
                house_id : house_id,
                nameB : nameB,
                contact : contact,
                location : location,
                Message : Message
            })

           res.redirect('/buyers');
        } catch (err) {
            console.error('Gagal insert buyer:', err);
            res.status(500).json({ error: 'Gagal menyimpan data' });
        }
     });


    app.listen(3000, () => {
        console.log('server running')
    })