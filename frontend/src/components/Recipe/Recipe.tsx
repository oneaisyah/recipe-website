import dummyData from '../../data/recipes.json';
import React from 'react';
import './Recipe.css';
// import image from '../../assets/images/recipe-images/spaghetti-carbonara.jpg'

interface RecipeProps {
    recipe: {
        title: string;
        ingredients: string[];
        instructions: string[];
        imageUrl: string;
        cuisine: string;
        difficulty: number;
        servings: number;
        description: string;
        duration: number;
    };
}

export default function Recipe(
    // { recipe }: RecipeProps
) {
    const recipe = dummyData[0];
    const image = require(`../../assets/images/recipe-images/${recipe.imageUrl}`)
    return (
        <div className="recipe">
            <div className='recipe-overview'>
                <img src={image} alt={recipe.title} className="recipe-image" />
                <div className='recipe-description'>
                    <h2>{recipe.title}</h2>
                    <p>{recipe.description}</p>
                    <p>Duration: {recipe.duration} minutes</p>
                    <p>Cuisine: {recipe.cuisine}</p>
                    <p>Difficulty: {recipe.difficulty}</p>
                    <p>Servings: {recipe.servings}</p>
                </div>
            </div>
            <h3>Ingredients:</h3>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3>Instructions:</h3>
            <ol>
                {recipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ol>
        </div>
    )
}