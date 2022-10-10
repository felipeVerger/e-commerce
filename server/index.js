import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import productRoutes from './routes/productsRoutes.js';

const app = express();

/* Loading the `.env` file into the `process.env` object. */
dotenv.config();

/* A middleware that parses the body of the request. */
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

/* A middleware that allows cross-origin requests. */
app.use(cors());

app.use('/products', productRoutes);

const PORT = process.env.PORT || 5000;

/* A middleware that connects the server to the MongoDB database. */
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error));