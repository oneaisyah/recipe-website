import { useNavigate } from 'react-router-dom';
import './BannerCard.css';

function BannerCard() {
    const navigate = useNavigate();

    const handleGenerateRecipeClick = () => {
        navigate('/generate');
    }

    return (
        <div className="banner-box">
            <h1 className="banner-title">What's the menu today?</h1>
            <button className="banner-button" onClick={handleGenerateRecipeClick}>GENERATE RECIPE</button>
        </div>
    )
}

export default BannerCard;