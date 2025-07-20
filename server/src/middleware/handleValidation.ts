import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const validation = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors: object[] = [];

  errors.array().map((err) => extractedErrors.push(err));

  res.status(422).json({
    errors: extractedErrors,
  });
};
