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
var express_1 = require("express");
var cancion_1 = require("../controlador/cancion");
var favorito_1 = require("../controlador/favorito");
var express_validator_1 = require("express-validator");
var validateMiddleware = function (validations) {
    return function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
        var isErrored, _i, validations_1, validation, result, errors;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    isErrored = false;
                    _i = 0, validations_1 = validations;
                    _a.label = 1;
                case 1:
                    if (!(_i < validations_1.length)) return [3 /*break*/, 4];
                    validation = validations_1[_i];
                    return [4 /*yield*/, validation.run(req)];
                case 2:
                    result = _a.sent();
                    if (result.array().length)
                        isErrored = true;
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    errors = (0, express_validator_1.validationResult)(req);
                    if (errors.isEmpty() && !isErrored) {
                        return [2 /*return*/, next()];
                    }
                    res.status(400).json({ errors: errors.array() });
                    return [2 /*return*/];
            }
        });
    }); };
};
var router = (0, express_1.Router)();
router.post('/favorito', validateMiddleware((0, express_validator_1.checkSchema)({
    cancionId: {
        in: ['body'],
        isInt: true,
        toInt: true,
        errorMessage: 'El id de la debe ser un numero entero'
    },
    usuarioId: {
        in: ['body'],
        isInt: true,
        toInt: true,
        errorMessage: 'El id del usuario debe ser un numero entero'
    }
})), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var resp;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, favorito_1.registrarCancionFavorita)(req)];
            case 1:
                resp = _a.sent();
                res.json(resp.success ? resp.data : resp.error).status(resp.error ? 400 : resp.error.codigo);
                return [2 /*return*/];
        }
    });
}); });
router.get('/', validateMiddleware([(0, express_validator_1.body)('email').isEmail(), (0, express_validator_1.body)('password', "La contraseña debe tener al menos 8 caracteres").isLength({ min: 8 })]), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var resp;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, cancion_1.getCanciones)(req, res)];
            case 1:
                resp = _a.sent();
                res.json(resp.success ? resp.data : resp.error).status(resp.success ? 200 : 400);
                return [2 /*return*/];
        }
    });
}); });
router.post('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var resp;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, cancion_1.postCancion)(req, res)];
            case 1:
                resp = _a.sent();
                res.json(resp.success ? resp.data : resp.error).status(resp.success ? 200 : 400);
                return [2 /*return*/];
        }
    });
}); });
exports.default = router;