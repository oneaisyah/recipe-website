import React, { useRef } from 'react';
import dummyData from '../../data/recipes.json'
import './Slider.css';
import RecipeCard from '../RecipeCard/RecipeCard';

interface SliderProps {
    title: string;
    data: string[];
}

function Slider() {
    const title = 'Popular Recipes';
    const recipe = dummyData[0];
    const recipeList = [recipe, recipe, recipe, recipe, recipe, recipe, recipe]
    const [scrollIndex, setScrollIndex] = React.useState(0);

    const scrollLeft = () => {
      if (scrollIndex > 0) {
        setScrollIndex(scrollIndex - 1);
      }
    };
  
    const scrollRight = () => {
      if (scrollIndex < recipeList.length - 3) {
        setScrollIndex(scrollIndex + 1);
      }
    };

    const recipeListStyles = {
        transform: `translateX(-${scrollIndex * 100}%)`, // 100% moves to the next set of three items
      };

    return(
        <div className='slider'>
            <h1>{title}</h1>
            <div className='slider-container'>
                <div className='recipe-list' style={recipeListStyles}>
                    {recipeList.map((recipe, index) => (
                        <RecipeCard />
                    ))}
                </div>
            </div>
            <div className='slider-controls'>
                <button onClick={scrollLeft}>&lt;</button>
                <button onClick={scrollRight}>&gt;</button>
            </div>

        </div>
    )
}

export default Slider;