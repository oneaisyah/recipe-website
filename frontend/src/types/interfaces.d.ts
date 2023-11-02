export interface RecipeData {
    id: number;
    title: string;
    ingredients: string[];
    instructions: string[];
    imageUrl: string;
    cuisine: string;
    difficulty: string;
    servings: number;
    description: string;
    duration: number;
}