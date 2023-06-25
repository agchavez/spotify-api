import { Request } from "express";
import { cancion } from "../../prisma/generated/client";



export interface GetRegistros {
    limit: string;
    offset: string;
}

export interface GetCancionesQuery extends GetRegistros {
    titulo?: string;
}

export type PostCancionBody = Omit<cancion, 'id'>;

export interface PostRgesitrarFavoritoBody {
    cancionId: number;
    usuarioId: number;
}


export interface GetCancionesRequest extends Request {
    query: GetCancionesQuery;
    
  }
export type PostCancionRequest = Request<{}, {}, PostCancionBody, {}>;
export type PostRegistrarFavoritoRequest = Request<{}, {}, PostRgesitrarFavoritoBody, {}>;