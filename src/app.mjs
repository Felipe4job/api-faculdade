import express from "express";
import db from "./config/dbConnect.mjs";
import router from "./routes/index.mjs";

const dateActual = new Date().toLocaleDateString();
const hourActual = new Date().toLocaleTimeString();

console.log(`${dateActual} ${hourActual}`);

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("conexão com o banco feita com sucesso");
});

const app = express();

app.use(express.json());

router(app);

export default app;
