import express from 'express';
import { getAllIngredients, getIngredientById, createIngredient } from '../controllers/ingredientController';

const router = express.Router();

router.get('/ingredients', getAllIngredients);
router.get('/ingredients/:id', getIngredientById);
router.post('/ingredients', createIngredient);

export { router as ingredientRoutes };
