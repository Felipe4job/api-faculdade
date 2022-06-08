import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://aprenderMongo:xCXUxynNdSwFOfco@aprendizado.ccqdjvj.mongodb.net/lojaBB"
);

let db = mongoose.connection;

export default db;
