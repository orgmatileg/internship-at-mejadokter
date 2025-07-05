import express from "express";
import multer from "multer";
import * as rumahController from "../controllers/rumahController.js";

const router = express.Router();

// Konfigurasi penyimpanan multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
    const ext = file.originalname.split(".").pop();
    cb(null, `${uniqueSuffix}.${ext}`);
  },
});

const upload = multer({ storage: storage });

// Route upload rumah + gambar
router.post("/", upload.single("gambar"), rumahController.createRumah);

// Route lain tetap
router.get("/", rumahController.getAllRumah);
router.get("/:id", rumahController.getRumahById);
router.post("/update/:id", upload.single("gambar"), rumahController.updateRumah);
router.delete("/:id", rumahController.deleteRumah);

export default router;