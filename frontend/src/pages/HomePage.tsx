import BannerCard from "../components/BannerCard/BannerCard";
import Navbar from "../components/Navbar/Navbar";
import Slider from "../components/Slider/Slider";
import dummyRecipe from "../data/recipes.json";

function HomePage() {
    return (
        <div
            style={{
                marginBottom: "100px",
            }}
        >
            <Navbar />
            <BannerCard />
            <Slider title="Popular Recipes" data={dummyRecipe}/>
            <Slider title="My Saved Recipes" data={dummyRecipe}/>
        </div>
    )
}

export default HomePage;