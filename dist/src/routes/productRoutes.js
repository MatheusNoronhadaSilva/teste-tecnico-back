"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
router.get('/product/:id', authMiddleware_1.authenticate, productController_1.getProduct); // Rota autenticada
exports.default = router;
