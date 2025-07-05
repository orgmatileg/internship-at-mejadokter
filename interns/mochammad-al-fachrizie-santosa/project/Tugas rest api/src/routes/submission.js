import express from "express";
import * as submissionController from "../controllers/submissionController.js";

const router = express.Router();

router.get("/", submissionController.getAllSubmission);
router.post("/", submissionController.createSubmission);
router.delete("/:id", submissionController.deleteSubmission);

export default router;