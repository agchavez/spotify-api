import { NextFunction, Request, Response, Router } from "express";
import { GetCancionesRequest, PostCancionRequest, PostRegistrarFavoritoRequest } from "../interfaces/cancion";
import { getCanciones, postCancion } from "../controlador/cancion";
import { registrarCancionFavorita } from "../controlador/favorito";
import { ValidationChain, validationResult, checkSchema, checkExact, body } from "express-validator";


const validateMiddleware = (validations: ValidationChain[]) => {
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


const router = Router();

router.post('/favorito',validateMiddleware(checkSchema({
    cancionId: {
        in: ['body'],
        isInt: true,
        toInt: true,
        errorMessage: 'El id de la debe ser un numero entero'
    },
    usuarioId: {
        in: ['body'],
        isInt: true,
        toInt: true,
        errorMessage: 'El id del usuario debe ser un numero entero'
    }
})), async (req: PostRegistrarFavoritoRequest, res: Response) => {
    const resp = await registrarCancionFavorita(req);
    res.json(resp.success ? resp.data : resp.error).status(resp.error ? 400 : resp.error!.codigo);
});





router.get('/', 
    validateMiddleware(
        [body('email').isEmail(), body('password',
        "La contraseña debe tener al menos 8 caracteres"
        ).isLength({ min: 8 })]), async (req: GetCancionesRequest, res: Response) => {
    const resp = await getCanciones(req, res);
    res.json(resp.success ? resp.data : resp.error).status(resp.success ? 200 : 400);
});

router.post('/', async (req: PostCancionRequest, res: Response) => {
    const resp = await postCancion(req, res);
    res.json(resp.success ? resp.data : resp.error).status(resp.success ? 200 : 400);
    
});


export default router;