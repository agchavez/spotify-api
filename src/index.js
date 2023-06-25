"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dotenv_1 = require("dotenv");
var usuario_1 = require("./router/usuario");
var cancion_1 = require("./router/cancion");
dotenv_1.default.config();
var servidor = (0, express_1.default)();
var PORT = process.env.PORT || 3000;
servidor.use(express_1.default.json());
// Rutas
servidor.use('/api/usuario', usuario_1.default);
servidor.use('/api/cancion', cancion_1.default);
// Inicializar el servidor 
servidor.listen(PORT, function () {
    console.log("Servidor corriendo en el puerto ".concat(PORT));
});
