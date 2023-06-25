import { Request } from "express";
import { usuario } from "../../prisma/generated/client";
import { type } from "os";

export interface  UsuarioResponse {
    result: usuario[];
    count: number;
}

export enum StatusCodes {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500
}

export interface Error {
    message: string;
    codigo: StatusCodes;
    codigoError: number | string;
}


export interface BasicResponse<T> {
    success: boolean;
    error?: Error;
    data?: T;
}

export interface GetUsuariosQuery {
    limit: string;
    offset: string;
}

export interface GetUsuarioParams {
    id: string;
}

export type PostUsuarioBody = Omit<usuario, 'id'>;

export type GetUsuariosRequest = Request<{}, {}, {}, GetUsuariosQuery>;
export type GetUsuarioRequest = Request<GetUsuarioParams, {}, {}, {}>;
export type PostUsuarioRequest = Request<{}, {}, PostUsuarioBody, {}>;
export type PutUsuarioRequest = Request<GetUsuarioParams, {}, PostUsuarioBody, {}>;