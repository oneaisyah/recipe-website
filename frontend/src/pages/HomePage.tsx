import BannerCard from "../components/BannerCard/BannerCard";
import Navbar from "../components/Navbar/Navbar";
import Slider from "../components/Slider/Slider";

function HomePage() {
    return (
        <div>
            <Navbar />
            <BannerCard />
            <Slider />
        </div>
    )
}

export default HomePage;