import './RecipeCard.css';
import durationIcon from '../../assets/images/icons/duration-icon.png';
import servingsIcon from '../../assets/images/icons/servings-icon.png';
import { RecipeData } from '../../types/interfaces';

interface RecipeCardProps {
    recipe: RecipeData;
    number: number;
}

function RecipeCard( props: RecipeCardProps ) {
    const image = require(`../../assets/images/recipe-images/${props.recipe.imageUrl}`)
    return (
        <div className='recipe-card'>
            <button className='save-button'>+</button>
            <img src={image} alt={props.recipe.title}/>
            <div className='card-description'>
                <h3>{props.number}</h3>
                <h3 className='recipe-title'>{props.recipe.title}</h3>
                <div className='duration icon'>
                    <img src={durationIcon} alt='duration icon' />
                    <p>{props.recipe.duration} minutes</p>
                </div>
                <div className='servings icon'>
                    <img src={servingsIcon} alt='servings icon' />
                    <p>{props.recipe.servings} servings</p>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard;