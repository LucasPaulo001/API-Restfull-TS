import { body } from "express-validator";

export const createMovieValidation = () => {
    return[
        body("title")
        .isString()
        .withMessage("O título é obrigatório!"),

        body("rating")
        .isNumeric()
        .withMessage("A nota precisa ser um número!")
        .custom((value: number) => {
            if(value < 0 || value > 10){
                throw new Error("A nota precisa ser de 0 a 10!")
            }
            return true
        }),

        body("description")
        .isString()
        .withMessage("A descrição é recomendada!"),

        body("director")
        .isString()
        .withMessage("O nome do diretor é obrigatório!"),

        body("poster")
        .isURL()
        .withMessage("A imagem precisa ser uma URL!")
    ]
}


