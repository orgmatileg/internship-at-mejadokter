import express from "express";
import * as kategoriController from "../controllers/kategoriController.js";

const router = express.Router();

router.get("/", kategoriController.getAllKategori);
router.get("/:id", kategoriController.getKategoriById);
router.post("/", kategoriController.createKategori);
router.put("/:id", kategoriController.updateKategori);
router.delete("/:id", kategoriController.deleteKategori);

export default router;