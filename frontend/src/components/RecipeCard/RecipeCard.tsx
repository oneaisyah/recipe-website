import './RecipeCard.css';
import durationIcon from '../../assets/images/icons/duration-icon.png';
import servingsIcon from '../../assets/images/icons/servings-icon.png';
import { RecipeData } from '../../types/interfaces';

interface RecipeCardProps {
    recipe: RecipeData;
}

function RecipeCard( props: RecipeCardProps ) {
    const image = require(`../../assets/images/recipe-images/${props.recipe.imageUrl}`)

    const handleNavigate = () => {
        window.location.href = `/recipes/${props.recipe.id}`;
    }

    const handleSave = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        console.log('save');
    }

    return (
        <div className='recipe-card' onClick={handleNavigate}>
            <button className='save-button' onClick={handleSave}>+</button>
            <img src={image} alt={props.recipe.title}/>
            <div className='card-description'>
                <h3>{props.recipe.id}</h3>
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