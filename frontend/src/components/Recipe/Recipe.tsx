import './Recipe.css';
import { RecipeData } from '../../types/interfaces';

interface RecipeProps {
    recipe: RecipeData;
}

export default function Recipe( prop: RecipeProps) {
    const image = require(`../../assets/images/recipe-images/${prop.recipe.imageUrl}`)
    return (
        <div className="recipe">
            <div className='recipe-overview'>
                <img src={image} alt={prop.recipe.title} className="recipe-image" />
                <div className='recipe-description'>
                    <h2>{prop.recipe.title}</h2>
                    <p>{prop.recipe.description}</p>
                    <p>Duration: {prop.recipe.duration} minutes</p>
                    <p>Cuisine: {prop.recipe.cuisine}</p>
                    <p>Difficulty: {prop.recipe.difficulty}</p>
                    <p>Servings: {prop.recipe.servings}</p>
                </div>
            </div>
            <h3>Ingredients:</h3>
            <ul>
                {prop.recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3>Instructions:</h3>
            <ol>
                {prop.recipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ol>
        </div>
    )
}