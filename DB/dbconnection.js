import mongoose from "mongoose";

// console.log(DB_URL); // Verifica que DB_URL tenga un valor aquí

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://loezaali39:XIjLq6HupYwFFrNj@cluster0.pridqmi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Conexión a MongoDB establecida");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error.message);
  }
};
export default connectDB;
