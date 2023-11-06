import { Request, Response } from 'express';
import Instruction from '../models/instructionModel';

export const getInstructionsByRecipeId = async (req: Request, res: Response): Promise<void> => {
    try {
        const recipeId = req.params.recipeId;
        const instructions = await Instruction.findAll({ where: { recipeId } });
        res.status(200).json(instructions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

export const addInstructionToRecipe = async (req: Request, res: Response): Promise<void> => {
    try {
        const instruction = await Instruction.create(req.body);
        res.status(201).json({ instruction });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};