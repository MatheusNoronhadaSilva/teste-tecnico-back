import { Request, Response } from 'express';
import { getProductById } from '../models/product.model';

export const getProduct = async (req: Request, res: Response): Promise<void> => {
  const productId = parseInt(req.params.id, 10);
  try {
    const product = await getProductById(productId);
    if (!product) {
      res.status(404).json({ message: 'Produto não encontrado' });
      return; // Impede o Express de continuar tentando resolver a requisição
    }
    res.json(product); // Envia a resposta com os dados do produto
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor' });
  }
};
