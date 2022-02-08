import { useEffect, useState } from "react";
import CurvedTextIta from "components/SVG/CurvedTextIta.component";
import CurvedTextEng from "components/SVG/CurvedTextEng.component";

/**
 * Initial hero content displayed on the front page, under the navigation bar.
 */
const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section id="hero" className="grid grid-cols-12 w-full h-screen mt-32">
        <div
          className="col-span-2 h-full bg-cover"
          style={{ backgroundImage: `url(images/col-hero-1.png)` }}
        ></div>
        <div
          className="col-span-2 h-full bg-cover"
          style={{ backgroundImage: `url(images/col-hero-2.png)` }}
        ></div>
        <div className="col-span-4 h-full flex align-center justify-center items-center">
          <div
            className="absolute pt-5 pl-5"
            style={{ transform: `rotate(${scrollPosition * 0.05}deg)` }}
          >
            <CurvedTextIta />
          </div>
          <div
            className="absolute px-2"
            style={{ transform: `rotate(-${scrollPosition * 0.05}deg)` }}
          >
            <CurvedTextEng />
          </div>
        </div>
        <div
          className="col-span-2 h-full bg-cover"
          style={{ backgroundImage: `url(images/col-hero-4.png)` }}
        ></div>
        <div
          className="col-span-2 h-full bg-cover"
          style={{ backgroundImage: `url(images/col-hero-5.png)` }}
        ></div>
      </section>
    </>
  );
};

export default Hero;
