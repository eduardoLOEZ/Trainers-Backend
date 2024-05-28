import TrainerSchema from "../models/Trainer.schema.js";
import { Parser } from "json2csv";

// Obtener todos los entrenadores
export const getAllTrainers = async (req, res) => {
  try {
    const trainers = await TrainerSchema.find();
    res.json(trainers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTrainerById = async (req, res) => {
  const { id } = req.params;
  try {
    const trainer = await TrainerSchema.findById(id);
    if (!trainer) {
      return res.status(404).json({ error: "Entrenador no encontrado" });
    }
    res.json(trainer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Crear un nuevo entrenador
export const createTrainer = async (req, res) => {
  const { firstName, lastName, phoneNumber, gymBadges } = req.body;

  if (!firstName || !lastName || !phoneNumber || gymBadges === undefined) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  try {
    const newTrainer = new TrainerSchema({
      firstName,
      lastName,
      phoneNumber,
      gymBadges,
    });

    await newTrainer.save();
    res.status(201).json(newTrainer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Actualizar un entrenador
export const updateTrainer = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const trainer = await TrainerSchema.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    await trainer.save();
    res.json(trainer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Eliminar un entrenador
export const deleteTrainer = async (req, res) => {
  const { id } = req.params;

  try {
    await TrainerSchema.findByIdAndDelete(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const downloadCSV = async (req, res) => {
  try {
    const trainers = await TrainerSchema.find();
    const fields = [
      "Nombre",
      "apellidos",
      "Número de teléfono",
      "medallas de gimnasio obtenidas",
    ];
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(trainers);

    res.header("Content-Type", "text/csv");
    res.attachment("trainers.csv");
    res.send(csv);
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};
