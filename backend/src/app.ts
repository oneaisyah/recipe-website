import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { ingredientRoutes } from './routes/ingredientRoute';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello, backend for RecipeRealm is running!');
});

app.use(ingredientRoutes);

export default app;
