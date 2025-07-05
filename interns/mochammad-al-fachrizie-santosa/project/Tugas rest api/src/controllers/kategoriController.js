import { db } from "../db.js";
import { kategori } from "../../drizzle/schema.js";
import { eq } from "drizzle-orm";

export const getAllKategori = async (req, res) => {
  const result = await db.select().from(kategori);
  res.json(result);
};

export const getKategoriById = async (req, res) => {
  const [result] = await db.select().from(kategori).where(eq(kategori.id, Number(req.params.id)));
  res.json(result || {});
};

export const createKategori = async (req, res) => {
  const { nama } = req.body;
  await db.insert(kategori).values({ nama });
  res.json({ message: "Kategori berhasil dibuat" });
};

export const updateKategori = async (req, res) => {
  const { nama } = req.body;
  await db.update(kategori).set({ nama }).where(eq(kategori.id, Number(req.params.id)));
  res.json({ message: "Kategori berhasil diperbarui" });
};

export const deleteKategori = async (req, res) => {
  await db.delete(kategori).where(eq(kategori.id, Number(req.params.id)));
  res.json({ message: "Kategori berhasil dihapus" });
};