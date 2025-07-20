import mongoose from "mongoose";
import config from "config";
import Logger from "./logger";

export const dbConnection = async () => {
  const DB_URI = config.get<string>("DB_URI");

  try {
    await mongoose.connect(DB_URI);
    Logger.info("Conectado ao banco de dados!");
  } catch (err) {
    Logger.error(`Erro ao conectar ao banco de dados, ERRO: ${err}`);
    process.exit(1);
  }
};
