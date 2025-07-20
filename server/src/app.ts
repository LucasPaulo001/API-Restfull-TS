import express from "express";
import config from "config";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

const port = config.get<number>("port");

//Config de rotas
import router from "./routes/routes";
app.use("/api/", router);

//Logger
import Logger from "../config/logger";

//banco de dados
import { dbConnection } from "../config/db";

app.listen(port, async () => {
  await dbConnection();
  Logger.info(`Aplicação rodando na porta ${port}!`);
});
