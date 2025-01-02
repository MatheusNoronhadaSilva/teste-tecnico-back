import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProductById = async (id: number) => {
    return await prisma.$queryRaw`
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
}