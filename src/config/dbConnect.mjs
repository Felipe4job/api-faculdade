import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://aprenderMongo:cHsxrZNIon7X8hw4@aprendizado.ccqdjvj.mongodb.net/lojaBB"
);

let db = mongoose.connection;

export default db;
