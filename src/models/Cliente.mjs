import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
});

const clientes = mongoose.model("clientes", clienteSchema);

export default clientes;