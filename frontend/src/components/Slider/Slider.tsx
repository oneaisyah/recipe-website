import './Slider.css';
import RecipeCard from '../RecipeCard/RecipeCard';
import { useEffect, useRef, useState } from 'react';
import { RecipeData } from '../../types/interfaces';

interface SliderProps {
    title: string;
    data: RecipeData[];
}

function Slider( props: SliderProps ) {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [scrollOffset, setScrollOffset] = useState<number>(0);

    useEffect(() => {
      const handleResize = () => {
          if (sliderRef.current) {
              const sliderElement = sliderRef.current;
              const cardElement = sliderElement.querySelector('.recipe-card') as Element | null;
              if (cardElement) {
                  const cardWidth = cardElement.clientWidth;
                  const cardMargin = parseInt(window.getComputedStyle(cardElement).marginRight);
                  const noOfCards = Math.floor(sliderElement.clientWidth / (cardWidth + cardMargin));
                  setScrollOffset((cardWidth + cardMargin) * noOfCards);
              }
          }
      };

      handleResize();

      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
    }, []);


    const handleScroll = (scrollOffset: number) => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += scrollOffset;
        }
    }

    return(
        <div className='row'>
          <div className='header'>
            <h2>{props.title}</h2>
          </div>
          <div className='slider-container'>
            <button className='handler right-handle' onClick={() => handleScroll(-scrollOffset)}>
              &#8249;
            </button>
            <div className='slider' ref={sliderRef}>
                {props.data.map((recipe, index) => (
                  <RecipeCard recipe={recipe} key={index} />
                ))}
            </div>
            <button className='handler left-handle' onClick={() => handleScroll(scrollOffset)}>
              &#8250;
            </button>
          </div>
        </div>
    )
}

export default Slider;