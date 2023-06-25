
import prisma from '../prisma';
import { Prisma, cancionesFavoritas } from '../../prisma/generated/client/index';
import { BasicResponse } from '../interfaces/usuario';
import { handlePrismaError, handleServerError } from "./usuario";
import { PostRegistrarFavoritoRequest } from '../interfaces';


export const registrarCancionFavorita = async (req: PostRegistrarFavoritoRequest): Promise<BasicResponse<cancionesFavoritas>> => {
    const { cancionId, usuarioId } = req.body;
    try {
        const resp =  await prisma.cancionesFavoritas.create({
            data: {
                idCancion: cancionId,
                idUsuario: usuarioId
            }
        });
        return {
            success: true,
            data: resp
        };
        
    } catch (e: any) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            return handlePrismaError(e);
        }
        return handleServerError(e);
    }
};