import mongoose from "mongoose";
import config from "config";


export const dbConnection = async () => {
  const DB_URI = config.get<string>("DB_URI");

  try {
    await mongoose.connect(DB_URI);
    console.log("Conectado ao banco de dados!");
  } catch (err) {
    console.log(`Erro ao conectar ao banco de dados, ERRO: ${err}`);
  }
};
