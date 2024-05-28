import express from "express";
import cors from "cors";
import connectDB from "./DB/dbconnection.js";
import router from "./routes/trainers.js";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({
    msg: "API-Pokemon Trainers",
    version: "1.0.0",
    author: "Eduardo Loeza",
  });
});

connectDB();
app.use("/api/trainers", router);

app.listen(port, () => {
  console.log(`Running Server on port: ${port}`);
});
