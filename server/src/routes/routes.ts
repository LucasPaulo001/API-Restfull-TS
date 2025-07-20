import express, { Request, Response } from "express";
const router = express.Router();

import movieRouter from "./movieRouter";

router.use(movieRouter);

router.get("/", async (req: Request, res: Response) => {
  res.status(200).send("API funcionando!");
});

export default router;
