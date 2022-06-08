import express from "express";
import handleVendedores from "../controler/handleVendedores.mjs";

export default function router(app) {
  //   const router = express.Router();

  //   router.post("/vendedores", handleVendedores.cadastrarVendedor);

  app.route("/vendedor").post(express.json(), handleVendedores.postVendedores);

  app
    .route("/vendedor/get")
    .get(express.json(), handleVendedores.getVendedores);
}
