import { Request, Response } from "express";
import { MovieModel } from "../models/Movie";
import Logger from "../../config/logger";

//Criar filme
export const createMovie = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const movie = await MovieModel.create(data);
    return res.status(201).json(movie);
  } catch (err: any) {
    Logger.error(`Erro no sistema: ${err.message}`);
  }
};

//Listar filme por ID
export const findMovieById = async (req: Request, res: Response) => {
  try {
    const movieId = req.params.id;

    const movie = await MovieModel.findById(movieId);

    if (!movie) {
      return res.status(404).json({
        error: "O filme não foi encontrado!",
      });
    }

    res.status(200).json(movie);
  } catch (err: any) {
    Logger.error(`Erro no sistema: ${err.message}`);
  }
};

//Listar todos os filmes
export const findAllMovies = async (req: Request, res: Response) => {
  try {
    const movies = await MovieModel.find();
    res.status(200).json(movies);
  } catch (err: any) {
    Logger.error(`Erro no sistema: ${err.message}`);
  }
};

//Excluir filme
export const deleteMovie = async (req: Request, res: Response) => {
  try {
    const movieId = req.params.id;
    const movie = await MovieModel.findById(movieId);
    if (!movie) {
      return res.status(404).json({
        error: "Filme não encontrado!",
      });
    }

    await movie.deleteOne();

    res.status(200).json({
      msg: "Filme deletado com sucesso!",
    });
  } catch (err: any) {
    Logger.error(`Erro no sistema: ${err.message}`);
  }
};

//Editar filmes
export const editMovie = async (req: Request, res: Response) => {
  try {
    const movieId = req.params.id;
    const data = req.body;

    const movie = await MovieModel.findById(movieId);

    if (!movie) {
      return res.status(404).json({
        error: "Filme não encontrado!",
        filme: data
      });
    }

    await MovieModel.findByIdAndUpdate({ _id: movieId }, data);

    res.status(201).json({
        msg: "Filme editado com sucesso!"
    })
    
  } catch (err: any) {
    Logger.error(`Erro no sistema: ${err.message}`);
  }
};
