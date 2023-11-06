import { Request, Response } from 'express';
import Ingredient from '../models/ingredientModel';

export const getAllIngredients = async (req: Request, res: Response): Promise<void> => {
  try {
    const ingredients = await Ingredient.findAll();
    res.json(ingredients);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getIngredientById = async (req: Request, res: Response): Promise<void> => {
    try {
        const ingredient = await Ingredient.findByPk(req.params.id);
        res.json(ingredient);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const createIngredient = async (req: Request, res: Response): Promise<void> => {
    try {
        const ingredient = await Ingredient.create(req.body);
        res.status(201).json({ ingredient });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
