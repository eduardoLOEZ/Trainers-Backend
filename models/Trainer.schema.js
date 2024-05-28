import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TrainerSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    minlength: [2, "El nombre debe tener al menos 2 caracteres"],
  },
  lastName: {
    type: String,
    required: [true, "Los apellidos son obligatorios"],
    minlength: [2, "Los apellidos deben tener al menos 2 caracteres"],
  },

  phoneNumber: {
    type: String,
    required: [true, "El número de teléfono es obligatorio"],
    validate: {
      validator: function (v) {
        return /\d{10}/.test(v);
      },
      message: (props) =>
        `${props.value} no es un número de teléfono válido. Debe tener 10 dígitos.`,
    },
  },

  gymBadges: {
    type: Number,
    required: [true, "El número de medallas es obligatorio"],
    min: [0, "El número de medallas no puede ser negativo"],
    max: [15, "El número de medallas no puede ser mayor que 8"],
  },
});

export default mongoose.model("Trainer", TrainerSchema);
