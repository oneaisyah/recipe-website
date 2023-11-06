import express from "express";
import { addInstructionToRecipe, deleteInstruction, getInstructionsByRecipeId, updateInstruction } from "../controllers/instructionController";

const router = express.Router();

router.get('/instructions/:recipeId', getInstructionsByRecipeId);
router.post('/instructions', addInstructionToRecipe);
router.put('/instructions/:id', updateInstruction);
router.delete('/instructions/:id', deleteInstruction);
router.put('/instructions/reorder/:recipeId', updateInstruction);

export { router as instructionRoutes };