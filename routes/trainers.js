import express from "express";
import {
  getAllTrainers,
  getTrainerById,
  createTrainer,
  updateTrainer,
  deleteTrainer,
  downloadCSV,
} from "../controllers/trainersController.js";

const router = express.Router();

router.get("/", getAllTrainers);
router.get("/:id", getTrainerById);
router.post("/", createTrainer);
router.put("/:id", updateTrainer);
router.delete("/:id", deleteTrainer);
router.get("/download/csv", downloadCSV);

export default router;
