
import { useState, useRef, useEffect } from "react";
import './answer6.css'

export function Answer6() {
  const achillesRef = useRef<HTMLDivElement | null>(null);
  const tortoiseRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let achillesX = 0;
    let tortoiseX = 200;
    let animationFrame: number;

    const move = () => {
      const containerWidth = containerRef.current?.offsetWidth || window.innerWidth;
      const distance = tortoiseX - achillesX;
      achillesX += distance * 0.02; 
      tortoiseX += 1;

      if(tortoiseX > containerWidth - 220){
        achillesX = 0;
        tortoiseX = 200;
      }else{
        if (achillesRef.current) {
          achillesRef.current.style.transform = `translateX(${achillesX}px)`;
        }
        if (tortoiseRef.current) {
          tortoiseRef.current.style.transform = `translateX(${tortoiseX}px)`;
        }
    }

      animationFrame = requestAnimationFrame(move);
    };

    animationFrame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <main >
      <div className="p-10 flex flex-col gap-5">
        <p>Question 6: Write the code that animates “Zeno's Paradox of Achilles and the Tortoise” on an
        interface(we would like to see the paradox demonstrated).
        </p>
        <p>Answer:</p>
        <p> "In this paradox, Zeno argues that a swift runner like Achilles cannot overtake <br />
          a slower moving tortoise with a head start, because the distance between them can be infinitely subdivided, <br />
          implying Achilles would require an infinite number of steps to catch the tortoise." <a href="https://en.wikipedia.org/wiki/Zeno%27s_paradoxes">Wikipedia</a></p> 
        <div className="flex items-center gap-5">
          
          <div className="relative" ref={containerRef}>
            <div className="achilles" ref={achillesRef}>
              <img src="../../public/images/achilles.png" alt="from https://www.freepik.com" width={"70px"} height={"auto"}/>
            </div>
            <div className="tortoise" ref={tortoiseRef}>
              <img src="../../public/images/tortoise.png" alt="from https://www.freepik.com" width={"70px"} height={"auto"}/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
