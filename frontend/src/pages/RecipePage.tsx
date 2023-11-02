import Navbar from "../components/Navbar/Navbar";
import Recipe from "../components/Recipe/Recipe";
import dummyRecipe from "../data/recipes.json"
import { useParams } from 'react-router-dom';

function RecipePage() {
    const { id = '' } = useParams();
    const parsedId = parseInt(id, 10);
    const selectedRecipe = dummyRecipe.find(recipe => recipe.id === parsedId);
    
    return (
        <div>
            <Navbar />
            {selectedRecipe && <Recipe recipe={selectedRecipe} />}
        </div>
    )
}

export default RecipePage;