import dotenv from 'dotenv';
dotenv.config();

import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';

import connectDb from './src/config/Database.js';
import ProductRouter from './src/api/routes/ProductRoutes.js';

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

connectDb();

app.use('/products', ProductRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});