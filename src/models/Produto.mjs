import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    valor: { type: Number, required: true },
    quantidade: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);

const produtos = mongoose.model("produtos", produtoSchema);

export default produtos;
