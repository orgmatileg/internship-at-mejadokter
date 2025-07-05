import { db } from "../db.js";
import { submission } from "../../drizzle/schema.js";

export const getAllSubmission = async (req, res) => {
  const result = await db.select().from(submission);
  res.json(result);
};

export const createSubmission = async (req, res) => {
  const { nama, no_hp, email, rumah_id } = req.body;
  await db.insert(submission).values({ nama, no_hp, email, rumah_id });
  res.json({ message: "Submission berhasil dibuat" });
};

export const deleteSubmission = async (req, res) => {
  await db.delete(submission).where(eq(submission.id, Number(req.params.id)));
  res.json({ message: "Pemesanan berhasil dihapus" });
};