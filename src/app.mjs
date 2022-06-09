import express from "express";
import db from "./config/dbConnect.mjs";
import router from "./routes/index.mjs";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("conexão com o banco feita com sucesso");
});

const app = express();

app.use(express.json());

router(app);

export default app;
