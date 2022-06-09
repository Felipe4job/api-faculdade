import express from "express";
import handleVendedores from "../controler/handleVendedores.mjs";

const vendedoresRoutes = express.Router();

vendedoresRoutes
  .get("/vendedores", handleVendedores.getVendedores)
  .get("/vendedores/:id", handleVendedores.getVendedoresById)
  .post("/vendedores", handleVendedores.postVendedores)
  .delete("/vendedores/:id", handleVendedores.deleteVendedorById);

export default vendedoresRoutes;
