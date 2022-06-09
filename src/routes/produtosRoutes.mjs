import express from "express";
import handleProdutos from "../controler/handleProdutos.mjs";

const produtosRoutes = express.Router();

produtosRoutes
  .get("/produtos", handleProdutos.getProdutos)
  .get("/produtos/:id", handleProdutos.getProdutoById)
  .post("/produtos", handleProdutos.getProdutoById);

export default produtosRoutes;
