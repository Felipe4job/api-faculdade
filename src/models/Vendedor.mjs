import mongoose from "mongoose";

const vendedorSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const vendedores = mongoose.model("vendedores", vendedorSchema);

export default vendedores;
