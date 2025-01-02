import express, { Application } from 'express';
import productRoutes from './routes/productRoutes';

const app: Application = express();

app.use(express.json());

app.use('/v1/teste-tecnico', productRoutes);

export default app;
