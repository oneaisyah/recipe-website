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
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [progressBarItems, setProgressBarItems] = useState<number>(0);

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
                  setProgressBarItems(Math.floor(props.data.length / noOfCards) + 1);
              }
          }
      };

      handleResize();

      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
    }, []);


    const handleScroll = (scrollOffset: number, direction: "left" | "right") => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += scrollOffset;
            if (direction === "left") {
                if (activeIndex === 0) {
                    setActiveIndex(0);
                } else {
                    setActiveIndex(activeIndex - 1);
                }
            } else {
                if (activeIndex === progressBarItems-1) {
                    setActiveIndex(progressBarItems-1);
                } else {
                    setActiveIndex(activeIndex + 1);
                }
            }
        }
        console.log(activeIndex);
    }

    const ProgressBarItem = (props: { active: boolean }) => {
        return (
            <div className={`progress-bar-item ${props.active ? 'active' : ''}`}></div>
        );
    }

    return(
        <div className='row'>
          <div className='header'>
            <h2>{props.title}</h2>
            <div className='progress-bar'>
                {Array.from({length: progressBarItems}).map((_, index) => (
                    <ProgressBarItem key={index} active={index === activeIndex} />
                ))}
            </div>
          </div>
          <div className='slider-container'>
            <button className='handler right-handle' onClick={() => handleScroll(-scrollOffset, "left")}>
              &#8249;
            </button>
            <div className='slider' ref={sliderRef}>
                {props.data.map((recipe, index) => (
                  <RecipeCard recipe={recipe} key={index} />
                ))}
            </div>
            <button className='handler left-handle' onClick={() => handleScroll(scrollOffset, "right")}>
              &#8250;
            </button>
          </div>
        </div>
    )
}

export default Slider;