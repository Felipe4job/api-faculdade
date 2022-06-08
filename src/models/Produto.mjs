import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
  valor: { type: Number, required: true },
  quantidade: { type: Number, required: true },
});

const produtos = mongoose.model("produtos", produtoSchema);

export default produtos;
