import express from "express";
import cadastrarVendedores from "../controler/cadastrarVendedores.mjs";

const router = express.Router();

router.post("/vendedores", cadastrarVendedores.cadastrarVendedor);

export default router;
