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
exports.getProductById = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.$queryRaw `
SELECT 
    Products.*,
    GROUP_CONCAT(Images.path ORDER BY Images.order SEPARATOR ', ') AS caminhos_das_imagens,
    Skus.size AS tamanho_do_produto,
    Skus.stock AS estoque_do_tamanho
FROM 
    Products
LEFT JOIN 
    Images ON Products.id = Images.product_id
LEFT JOIN 
    Skus ON Products.id = Skus.product_id
WHERE 
    Products.id = ${id}
GROUP BY 
    Products.id, Skus.size, Skus.stock;
  `;
});
exports.getProductById = getProductById;
