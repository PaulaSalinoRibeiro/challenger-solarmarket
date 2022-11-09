import express from 'express';
import cors from 'cors';
import { productRouter } from './routers/productRouter';
import { errorMiddleware } from './middleware/errorMiddleware';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/products', productRouter);
app.use(errorMiddleware);

export default app