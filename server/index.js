import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();

const PORT = process.env.PORT || 5000;

const PASSWORD = 'excywVuWSWsSxe67';

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})