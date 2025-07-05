import { db } from "../db.js";
import { rumah } from "../../drizzle/schema.js";
import { and, eq, like, gte, lte } from "drizzle-orm";

export const getAllRumah = async (req, res) => {
  const { kategori_id, minHarga, maxHarga, search } = req.query;

  let conditions = [];

  if (kategori_id) conditions.push(eq(rumah.kategori_id, Number(kategori_id)));
  if (minHarga) conditions.push(gte(rumah.harga, Number(minHarga)));
  if (maxHarga) conditions.push(lte(rumah.harga, Number(maxHarga)));
  if (search) conditions.push(like(rumah.nama, `%${search}%`));

  const result = await db.select().from(rumah).where(and(...conditions));
  res.json(result);
};

export const getRumahById = async (req, res) => {
  const [result] = await db.select().from(rumah).where(eq(rumah.id, Number(req.params.id)));
  res.json(result || {});
};

export const createRumah = async (req, res) => {
  const { nama, deskripsi, harga, kategori_id } = req.body;
  const gambar = req.file ? req.file.filename : null;

  await db.insert(rumah).values({ nama, deskripsi, harga, gambar, kategori_id });
  res.json({ message: "Rumah berhasil dibuat" });
};

export const updateRumah = async (req, res) => {
  const { nama, deskripsi, harga, kategori_id } = req.body;
  const id = Number(req.params.id);

  if (!id) return res.status(400).json({ message: "ID tidak valid" });

  const updateData = { nama, deskripsi, harga, kategori_id };

  if (req.file) {
    updateData.gambar = req.file.filename;
  }

  try {
    await db.update(rumah).set(updateData).where(eq(rumah.id, id));
    res.json({ message: "Rumah berhasil diperbarui" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Gagal memperbarui rumah" });
  }
};

export const deleteRumah = async (req, res) => {
  await db.delete(rumah).where(eq(rumah.id, Number(req.params.id)));
  res.json({ message: "Rumah berhasil dihapus" });
};

const { kategori_id, search } = req.query;

let conditions = [];

if (kategori_id) conditions.push(eq(rumah.kategori_id, Number(kategori_id)));
if (minHarga) conditions.push(gte(rumah.harga, Number(minHarga)));
if (maxHarga) conditions.push(lte(rumah.harga, Number(maxHarga)));
if (search) conditions.push(like(rumah.nama, `%${search}%`));