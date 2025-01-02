"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const authenticate = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        res.status(401).json({ message: 'Token não fornecido' });
        return;
    }
    next();
};
exports.authenticate = authenticate;
