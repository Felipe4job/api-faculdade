import mongoose from "mongoose";

const carrinhoSchema = new mongoose.Schema({
  id: { type: String },
  produto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "produtos",
    required: true,
  },
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "clientes",
    required: true,
  },
  vendedor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "vendedores",
    required: true,
  },
});

const carrinhos = mongoose.model("carrinhos", carrinhoSchema);

export default carrinhos;
