import dotenv from "dotenv";
dotenv.config();

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS

export default {
    port: 8080,
    DB_URI: `mongodb+srv://${DB_USER}:${DB_PASS}@apitypescript.oaifcyc.mongodb.net/`
};