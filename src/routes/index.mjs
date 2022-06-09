import express from "express";
import vendedoresRoutes from "./vendedoresRoutes.mjs";
import clientesRoutes from "./clientesRoutes.mjs";
import produtosRoutes from "./produtosRoutes.mjs";
import carrinhosRoutes from "./carrinhosRoutes.mjs";

export default function router(app) {
  app.use(
    express.json(),
    vendedoresRoutes,
    clientesRoutes,
    produtosRoutes,
    carrinhosRoutes
  );
}
