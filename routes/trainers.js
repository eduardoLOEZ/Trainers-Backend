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

// Ruta para obtener todos los entrenadores
router.get("/", getAllTrainers);

// Ruta para obtener un entrenador por ID
router.get("/:id", getTrainerById);

// Ruta para crear un nuevo entrenador
router.post("/", createTrainer);

// Ruta para actualizar un entrenador por ID
router.put("/:id", updateTrainer);

// Ruta para eliminar un entrenador por ID
router.delete("/:id", deleteTrainer);

// Ruta para descargar la lista de entrenadores en formato CSV
router.get("/download/csv", downloadCSV);

export default router;
