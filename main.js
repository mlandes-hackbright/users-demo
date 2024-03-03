import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// TODO: routes

const { PORT } = process.env;
app.listen(PORT, () => console.info(`app running on ${PORT}`));