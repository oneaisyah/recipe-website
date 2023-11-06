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

export const updateInstruction = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const [updated] = await Instruction.update(req.body, {
            where: { id: Number(id) },
        });
        if (updated) {
            const updatedInstruction = await Instruction.findByPk(id);
            res.status(200).json({ instruction: updatedInstruction });
        } else {
            throw new Error('Instruction not found');
        }
    } catch (error: any) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

export const deleteInstruction = async (req: Request, res: Response): Promise<void> => {
    try {
        const { recipeId } = req.params;
        const deleted = await Instruction.destroy({
            where: { id: Number(recipeId) },
        });
        if (deleted) {
            res.status(204).send('Instruction deleted');
        } else {
            throw new Error('Instruction not found');
        }
    } catch (error: any) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

export const reorderInstructions = async (req: Request, res: Response): Promise<void> => {
    try {
        const { recipeId, instructions } = req.body;
        const updatedInstructions = await Promise.all(instructions.map(async (instruction: any) => {
            const [updated] = await Instruction.update(instruction, {
                where: { id: Number(instruction.id) },
            });
            if (updated) {
                const updatedInstruction = await Instruction.findByPk(instruction.id);
                return updatedInstruction;
            } else {
                throw new Error('Instruction not found');
            }
        }));
        res.status(200).json({ instructions: updatedInstructions });
    } catch (error: any) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};