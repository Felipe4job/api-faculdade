import express from "express";
import handleClientes from "../controler/handleClientes.mjs";

const clientesRoutes = express.Router();

clientesRoutes
  .get("/clientes", handleClientes.getClientes)
  .get("/clientes/:id", handleClientes.getClientesById)
  .post("/clientes", handleClientes.postClientes);

export default clientesRoutes;
