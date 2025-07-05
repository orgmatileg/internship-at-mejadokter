import express from "express";
import dotenv from "dotenv";
import kategoriRoutes from "./routes/kategori.js";
import rumahRoutes from "./routes/rumah.js";
import submissionRoutes from "./routes/submission.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static("public")); // Untuk akses gambar lokal

app.use("/kategori", kategoriRoutes);
app.use("/rumah", rumahRoutes);
app.use("/submission", submissionRoutes);

export default app;