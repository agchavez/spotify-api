import { Request, Response, Router } from "express";
import prisma from "../prisma";
import { usuario } from "../../prisma/generated/client";
import { actualizarUsuario, crearUsuario, eliminarUsuario, obtenerUsuario, obtenerUsuarios } from "../controlador/usaurio";
import { GetUsuarioRequest, GetUsuariosRequest, PostUsuarioRequest, PutUsuarioRequest } from "../interfaces";

const router = Router();

// Ruta para listar todos los usuarios
router.get('/', async (req: GetUsuariosRequest, res: Response) => {
    //TODO: Obtener usuarios
    const resp = await obtenerUsuarios(req, res);
    res.status(resp.success ? 200 :  resp.error!.codigo)
        .json(resp.success ? resp.data : resp.error);
});

// Ruta para obtener un usuario por id
router.get('/:id', async (req: GetUsuarioRequest, res: Response) => {
    const resp = await obtenerUsuario(req, res);
    res.status(resp.success ? 200 :  resp.error!.codigo)
        .json(resp.success ? resp.data : resp.error); 
});

router.post('/', async (req: PostUsuarioRequest, res: Response) => {
    const resp = await crearUsuario(req, res);
    res.status(resp.success ? 200 :  resp.error!.codigo)
        .json(resp.success ? resp.data : resp.error)
        ;
});

router.put('/:id', async (req: PutUsuarioRequest, res: Response) => {
    const resp = await actualizarUsuario(req, res);
    res.status(resp.success ? 200 : resp.error!.codigo)
        .json(resp.success ? resp.data : resp.error);
});

router.delete('/:id', async (req: GetUsuarioRequest, res: Response) => {
    const resp = await eliminarUsuario(req, res);
    res.status(resp.success ? 200 :  resp.error!.codigo)
        .json(resp.success ? resp.data : resp.error);
});


export default router;