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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProduct = void 0;
const product_model_1 = require("../models/product.model");
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = parseInt(req.params.id, 10);
    try {
        const product = yield (0, product_model_1.getProductById)(productId);
        if (!product) {
            res.status(404).json({ message: 'Produto não encontrado' });
            return; // Impede o Express de continuar tentando resolver a requisição
        }
        res.json(product); // Envia a resposta com os dados do produto
    }
    catch (error) {
        res.status(500).json({ message: 'Erro no servidor' });
    }
});
exports.getProduct = getProduct;
