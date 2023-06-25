import { NextFunction, Request, Response } from "express";
import { ValidationChain, validationResult } from "express-validator";

export const validarCampos = (validations: ValidationChain[]) => {
    return async (req: Request<any, any, any, any, any>, res: Response, next: NextFunction) => {
      let isErrored = false;
      for (let validation of validations) {
        const result = await validation.run(req);
        if (result.array().length) isErrored = true;
      }
  
      const errors = validationResult(req);
      if (errors.isEmpty() && !isErrored) {
        return next();
      }
  
      res.status(400).json({ errors: errors.array() });
    };
  };