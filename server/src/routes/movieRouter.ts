import express from "express";
const movieRouter = express.Router();
import { createMovie, deleteMovie, editMovie, findAllMovies, findMovieById } from "../controllers/MovieController";

//Validações
import { validation } from "../middleware/handleValidation";
import { createMovieValidation } from "../middleware/movieValidations";

movieRouter.post("/create/movie", createMovieValidation(), validation, createMovie);
movieRouter.get("/movie/:id", findMovieById);
movieRouter.get("/movies/all", findAllMovies);
movieRouter.delete("/movie/delete/:id", deleteMovie);
movieRouter.patch("/movie/edit/:id", createMovieValidation(), validation, editMovie);

export default movieRouter;