import React from 'react';
import dummyData from '../../data/recipes.json';
import './RecipeCard.css';
import durationIcon from '../../assets/images/icons/duration-icon.png';
import servingsIcon from '../../assets/images/icons/servings-icon.png'

interface RecipeCardProps {
    recipe: {
        title: string;
        imageUrl: string;
        duration: number;
        servings: number;
        difficulty: number;
    };
    onClick: () => void;
}

function RecipeCard(
    // { recipe, onClick }: RecipeCardProps
) {
    const recipe = dummyData[0];
    const image = require(`../../assets/images/recipe-images/${recipe.imageUrl}`)
    return (
        <div className='recipe-card'>
            <button className='save-button'>+</button>
            <img src={image} alt={recipe.title}/>
            <div className='card-description'>
                <h3 className='recipe-title'>{recipe.title}</h3>
                <div className='duration icon'>
                    <img src={durationIcon} alt='duration icon' />
                    <p>{recipe.duration} minutes</p>
                </div>
                <div className='servings icon'>
                    <img src={servingsIcon} alt='servings icon' />
                    <p>{recipe.servings} servings</p>
                </div>
            </div>

        </div>
    )
}

export default RecipeCard;