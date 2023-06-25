"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarUsuario = exports.actualizarUsuario = exports.crearUsuario = exports.obtenerUsuario = exports.obtenerUsuarios = exports.handleServerError = exports.handlePrismaError = void 0;
var client_1 = require("../../prisma/generated/client");
var prisma_1 = require("../prisma");
var handlePrismaError = function (e) {
    return {
        success: false,
        error: {
            message: e.message,
            codigo: 400,
            codigoError: e.code
        }
    };
};
exports.handlePrismaError = handlePrismaError;
var handleServerError = function (e) {
    var errorMessage = e.message.replace(/\n/g, ' ');
    return {
        success: false,
        error: {
            message: errorMessage,
            codigo: 500,
            codigoError: e.code
        }
    };
};
exports.handleServerError = handleServerError;
var validarExisteCorreo = function (email) { return __awaiter(void 0, void 0, void 0, function () {
    var existe;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma_1.default.usuario.findMany({
                    where: {
                        email: email
                    }
                })];
            case 1:
                existe = _a.sent();
                return [2 /*return*/, {
                        success: existe.length > 0 ? true : false,
                        error: existe.length > 0 ? {
                            message: 'El correo ya existe',
                            codigo: 400,
                            codigoError: 'CORREO_YA_EXISTE'
                        } : undefined
                    }];
        }
    });
}); };
var obtenerUsuarios = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, limit, offset, querys, _b, result, count, e_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _a = req.query, limit = _a.limit, offset = _a.offset;
                querys = Promise.all([
                    prisma_1.default.usuario.findMany({
                        take: parseInt(limit || '10'),
                        skip: parseInt(offset || '0'),
                    }),
                    prisma_1.default.usuario.count()
                ]);
                return [4 /*yield*/, querys];
            case 1:
                _b = _c.sent(), result = _b[0], count = _b[1];
                return [2 /*return*/, {
                        success: true,
                        data: {
                            result: result,
                            count: count
                        }
                    }];
            case 2:
                e_1 = _c.sent();
                if (e_1 instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                    return [2 /*return*/, (0, exports.handlePrismaError)(e_1)];
                }
                return [2 /*return*/, (0, exports.handleServerError)(e_1)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.obtenerUsuarios = obtenerUsuarios;
var obtenerUsuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma_1.default.usuario.findUnique({
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
                    })];
            case 2:
                result = _a.sent();
                if (!result) {
                    return [2 /*return*/, {
                            success: false,
                            error: {
                                message: 'Usuario no encontrado',
                                codigo: 404,
                                codigoError: 'USUARIO_NO_ENCONTRADO'
                            }
                        }];
                }
                return [2 /*return*/, {
                        success: true,
                        data: result
                    }];
            case 3:
                e_2 = _a.sent();
                if (e_2 instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                    return [2 /*return*/, (0, exports.handlePrismaError)(e_2)];
                }
                return [2 /*return*/, (0, exports.handleServerError)(e_2)];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.obtenerUsuario = obtenerUsuario;
var crearUsuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, nombre, apellido, email, existe, result, e_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, nombre = _a.nombre, apellido = _a.apellido, email = _a.email;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, validarExisteCorreo(email)];
            case 2:
                existe = _b.sent();
                if (!existe.success)
                    return [2 /*return*/, existe];
                return [4 /*yield*/, prisma_1.default.usuario.create({
                        data: {
                            nombre: nombre,
                            apellido: apellido,
                            email: email
                        }
                    })];
            case 3:
                result = _b.sent();
                return [2 /*return*/, {
                        success: true,
                        data: result
                    }];
            case 4:
                e_3 = _b.sent();
                if (e_3 instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                    return [2 /*return*/, (0, exports.handlePrismaError)(e_3)];
                }
                return [2 /*return*/, (0, exports.handleServerError)(e_3)];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.crearUsuario = crearUsuario;
var actualizarUsuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, nombre, apellido, email, id, result, e_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, nombre = _a.nombre, apellido = _a.apellido, email = _a.email;
                id = req.params.id;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma_1.default.usuario.update({
                        where: {
                            id: parseInt(id)
                        },
                        data: {
                            nombre: nombre,
                            apellido: apellido,
                            email: email
                        }
                    })];
            case 2:
                result = _b.sent();
                return [2 /*return*/, {
                        success: true,
                        data: result
                    }];
            case 3:
                e_4 = _b.sent();
                if (e_4 instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                    return [2 /*return*/, (0, exports.handlePrismaError)(e_4)];
                }
                return [2 /*return*/, (0, exports.handleServerError)(e_4)];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.actualizarUsuario = actualizarUsuario;
var eliminarUsuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, usuario, e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, prisma_1.default.usuario.findUnique({
                        where: {
                            id: parseInt(id)
                        }
                    })];
            case 2:
                usuario = _a.sent();
                if (!usuario) {
                    return [2 /*return*/, {
                            success: false,
                            error: {
                                message: 'Usuario no encontrado',
                                codigo: 404,
                                codigoError: 'USUARIO_NO_ENCONTRADO'
                            }
                        }];
                }
                return [4 /*yield*/, prisma_1.default.usuario.delete({
                        where: {
                            id: parseInt(id)
                        }
                    })];
            case 3:
                _a.sent();
                return [2 /*return*/, {
                        success: true,
                        data: 'Usuario eliminado'
                    }];
            case 4:
                e_5 = _a.sent();
                if (e_5 instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                    return [2 /*return*/, (0, exports.handlePrismaError)(e_5)];
                }
                return [2 /*return*/, (0, exports.handleServerError)(e_5)];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.eliminarUsuario = eliminarUsuario;
