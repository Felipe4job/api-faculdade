import express from "express";
import handleCarrinhos from "../controler/handleCarrinhos.mjs";

const carrinhosRoutes = express.Router();

carrinhosRoutes
  .get("/carrinhos", handleCarrinhos.getCarrinhos)
  .get("/carrinhos/:id", handleCarrinhos.getCarrinhoById)
  .post("/carrinhos", handleCarrinhos.postCarrinhos);

export default carrinhosRoutes;
