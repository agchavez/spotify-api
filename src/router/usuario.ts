import { Response, Router } from "express";
import { actualizarUsuario, crearUsuario, eliminarUsuario, obtenerUsuario, obtenerUsuarios } from "../controlador/usuario";
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

// Ruta para registrar un usuario
router.post('/', async (req: PostUsuarioRequest, res: Response) => {
    const resp = await crearUsuario(req, res);
    res.status(resp.success ? 200 :  resp.error!.codigo)
        .json(resp.success ? resp.data : resp.error);
});

// Ruta para actualizar un usuario
router.put('/:id', async (req: PutUsuarioRequest, res: Response) => {
    const resp = await actualizarUsuario(req, res);
    res.status(resp.success ? 200 : resp.error!.codigo)
        .json(resp.success ? resp.data : resp.error);
});

// Ruta para eliminar un usuario
router.delete('/:id', async (req: GetUsuarioRequest, res: Response) => {
    const resp = await eliminarUsuario(req, res);
    res.status(resp.success ? 200 :  resp.error!.codigo)
        .json(resp.success ? resp.data : resp.error);
});


export default router;