import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const clientes = mongoose.model("clientes", clienteSchema);

export default clientes;
