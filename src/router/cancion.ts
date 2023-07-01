import { Response, Router } from "express";
import { GetCancionesRequest, PostCancionRequest, PostRegistrarFavoritoRequest } from "../interfaces/cancion";
import {  obtenerCanciones, registrarCancion } from "../controlador/cancion";
import { registrarCancionFavorita } from "../controlador/favorito";
import { checkSchema, body } from "express-validator";
import { validarCampos } from "../middlewares/validaciones";


const router = Router();

router.post('/favorito', async (req: PostRegistrarFavoritoRequest, res: Response) => {
    const resp = await registrarCancionFavorita(req);
    res.json(resp.success ? resp.data : resp.error).status(resp.error ? 400 : resp.error!.codigo);
});

router.get('/', async (req: GetCancionesRequest, res: Response) => {
    const resp = await obtenerCanciones(req, res);
    res.json(resp.success ? resp.data : resp.error).status(resp.success ? 200 : 400);
});

router.post('/', async (req: PostCancionRequest, res: Response) => {
    const resp = await registrarCancion(req, res);
    res.json(resp.success ? resp.data : resp.error).status(resp.success ? 200 : 400);
    
});


export default router;