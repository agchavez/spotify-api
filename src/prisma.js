"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = exports.prisma = void 0;
var client_1 = require("../prisma/generated/client");
var store_1 = require("../prisma/generated/store");
exports.prisma = new client_1.PrismaClient();
exports.store = new store_1.PrismaClient();
exports.default = exports.prisma;
