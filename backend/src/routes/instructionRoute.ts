import express from "express";
import { addInstructionToRecipe, getInstructionsByRecipeId } from "../controllers/instructionController";

const router = express.Router();

router.get('/instructions/:recipeId', getInstructionsByRecipeId);
router.post('/instructions', addInstructionToRecipe);

export { router as instructionRoutes };