import BannerCard from "../components/BannerCard/BannerCard";
import Navbar from "../components/Navbar/Navbar";
import Slider from "../components/Slider/Slider";
import dummyRecipe from "../data/recipes.json";

function HomePage() {
    return (
        <div>
            <Navbar />
            <BannerCard />
            <Slider title="Popular Recipes" data={dummyRecipe}/>
        </div>
    )
}

export default HomePage;