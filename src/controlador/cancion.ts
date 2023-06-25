import { Response } from "express";
import { Prisma, cancion } from "../../prisma/generated/client";
import { BasicResponse } from "../interfaces";
import { GetCancionesRequest, PostCancionRequest } from "../interfaces/cancion";
import prisma from "../prisma";
import { gestionarErrorPrisma, manejarErrorInterno } from "./usuario";


export const obtenerCanciones = async (req: GetCancionesRequest, res: Response): Promise<BasicResponse<cancion[]>> => {
    const canciones = await prisma.cancion.findMany({
        where: {
            titulo: {
                contains: req.query.titulo || ''
            }
        }
    });

    return {
        success: true,
        data: canciones
    }
}

export const registrarCancion = async (req: PostCancionRequest, res: Response): Promise<BasicResponse<cancion>> => {

    try {
        const { titulo, duracion, artista } = req.body;
        const result = await prisma.cancion.create({
            data: {
                titulo,
                duracion,
                artista
            }
        });

        return {
            success: true,
            data: result
        };

    } catch (e: any) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            return gestionarErrorPrisma(e);
        }
        return manejarErrorInterno(e);
    }
};