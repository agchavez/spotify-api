import { Response } from "express";
import { BasicResponse, GetUsuarioRequest, GetUsuariosRequest, PostUsuarioRequest, PutUsuarioRequest, UsuarioResponse } from "../interfaces";
import { Prisma, usuario } from "../../prisma/generated/client";
import prisma from "../prisma";
import { cancion } from '../../prisma/generated/client/index';

export const gestionarErrorPrisma = (e: Prisma.PrismaClientKnownRequestError): BasicResponse<any> => {
  return {
    success: false,
    error: {
      message: e.message,
      codigo: 400,
      codigoError: e.code
    }
  };
};

export const manejarErrorInterno = (e: any): BasicResponse<any> => {
  const errorMessage = e.message.replace(/\n/g, ' ');
  return {
    success: false,
    error: {
      message: errorMessage,
      codigo: 500,
      codigoError: e.code
    }
  };
};

const validarExisteCorreo = async (email: string): Promise<BasicResponse<any>> => {
    const existe = await prisma.usuario.findMany({
        where: {
            email: email
        }
    });
    return {
        success: existe.length > 0 ? true : false,
        error: existe.length > 0 ? {
            message: 'El correo ya existe',
            codigo: 400,
            codigoError: 'CORREO_YA_EXISTE'
        } : undefined

    }
};

export const obtenerUsuarios = async (req: GetUsuariosRequest, res: Response): Promise<BasicResponse<UsuarioResponse>> => {
  try {
    const { limit, offset } = req.query;

    const querys = Promise.all([
      prisma.usuario.findMany({
        take: parseInt(limit || '10'),
        skip: parseInt(offset || '0'),
        include: {
          favoritas: {
            include: {
              cancion: true,
            }
          }
        }
      })
      ,
      prisma.usuario.count()
    ]);

    const [result, count]: [usuario[], number] = await querys;

    return {
      success: true,
      data: {
        result,
        count
      }
    };
  } catch (e: any) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      return gestionarErrorPrisma(e);
    }
    return manejarErrorInterno(e);
  }
};

export const obtenerUsuario = async (req: GetUsuarioRequest, res: Response): Promise<BasicResponse<usuario>> => {
  const { id } = req.params;

  try {
    const result = await prisma.usuario.findUnique({
      where: {
        id: parseInt(id)
      },
      include: {
        favoritas: {
          include: {
            cancion: true,
          }
        }
      }
    });

    if (!result) {
      return {
        success: false,
        error: {
          message: 'Usuario no encontrado',
          codigo: 404,
          codigoError: 'USUARIO_NO_ENCONTRADO'
        }
      };
    }

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


export const crearUsuario = async (req: PostUsuarioRequest, res: Response): Promise<BasicResponse<usuario>> => {
    const { nombre, apellido, email } = req.body;

    try {
        const existe = await validarExisteCorreo(email);

        if (!existe.success) return existe;

        const result = await prisma.usuario.create({
            data: {
                nombre,
                apellido,
                email
            }
        });

        return {
            success: true,
            data: result
        };
    }
    catch (e: any) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            return gestionarErrorPrisma(e);
        }
        return manejarErrorInterno(e);
    }
};

export const actualizarUsuario = async (req: PutUsuarioRequest, res: Response): Promise<BasicResponse<usuario>> => {
    const { nombre, apellido, email } = req.body;
    const { id } = req.params;

    try {
        const result = await prisma.usuario.update({
            where: {
                id: parseInt(id)
            },
            data: {
                nombre,
                apellido,
                email
            }
        });

        return {
            success: true,
            data: result
        };
    }
    catch (e: any) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            return gestionarErrorPrisma(e);
        }
        return manejarErrorInterno(e);
    }
}

export const eliminarUsuario = async (req: GetUsuarioRequest, res: Response): Promise<BasicResponse<string>> => {
    const { id } = req.params;

    try {

        const usuario = await prisma.usuario.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        if (!usuario) {
            return {
                success: false,
                error: {
                    message: 'Usuario no encontrado',
                    codigo: 404,
                    codigoError: 'USUARIO_NO_ENCONTRADO'
                }
            };
        }
        await prisma.usuario.delete({
            where: {
                id: parseInt(id)
            }
        });

        return {
            success: true,
            data: 'Usuario eliminado'
        };
    }
    catch (e: any) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            return gestionarErrorPrisma(e);
        }
        return manejarErrorInterno(e);
    }
}
