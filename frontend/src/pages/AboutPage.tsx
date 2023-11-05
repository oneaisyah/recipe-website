import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import "./AboutPage.css";

function AboutPage() {
    const timelineRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
          if (timelineRef.current) {
            const top = timelineRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (top < windowHeight * 0.75) {
              setIsVisible(true);
              window.removeEventListener('scroll', handleScroll);
            }
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div>
            <Navbar />
            {/* <p
                style={{
                    margin: "0px 150px",
                    textAlign: "justify"
                }}
            >The seed of this web application was sown by a simple yet powerful muse—my mother. Faced with the labyrinth of scattered recipe books, an idea sparked within me. I embarked on a mission to weave together the kaleidoscope of recipes that lay scattered across my kitchen, binding them into a single, digital haven. The dream was to create a virtual library, a culinary cosmos where generations of flavors and kitchen secrets converged, a legacy not confined by the limitations of shelves and pages but an ever-expanding universe of taste and tradition.</p> */}
            <div ref={timelineRef} className={`timeline ${isVisible ? 'animate' : ''}`}>
                <div className="timeline-item">
                    <div className="ghj"><h1>dfghjk</h1></div>
                </div>
                <div className="timeline-item">
                    <div className="ghj"><h1>dfghjk</h1></div>
                </div>
                <div className="timeline-item">
                    <div className="ghj"><h1>dfghjk</h1></div>
                </div>
                {/* Add more timeline items as needed */}
            </div>
        </div>

    )
}

export default AboutPage;