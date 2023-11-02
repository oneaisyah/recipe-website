import Navbar from "../components/Navbar/Navbar";
import Recipe from "../components/Recipe/Recipe";
import dummyRecipe from "../data/recipes.json"

function RecipePage() {
    return (
        <div>
            <Navbar />
            <Recipe
                recipe={dummyRecipe[1]}
            />
        </div>
    )
}

export default RecipePage;