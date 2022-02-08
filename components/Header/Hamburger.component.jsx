import { useState } from "react";
import { useSpring, animated } from "react-spring";
import Link from "next/link";

/**
 * Shows the mobile menu.
 * Shows a X when mobile menu is expanded.
 * Uses React-spring for animations.
 */
const Hamburger = () => {
  const [isExpanded, setisExpanded] = useState(false);
  const hamburgerSlideDownAnimation = useSpring({
    to: [
      {
        opacity: isExpanded ? 0.9 : 0,
        top: isExpanded ? "132px" : "-180px",
      },
    ],
    from: {
      opacity: isExpanded ? 0.9 : 0,
      top: isExpanded ? "132px" : "-180px",
    },
  });

  const showHamburgerHideXAnimation = useSpring({
    to: [
      {
        opacity: isExpanded ? 0 : 0.9,
        display: isExpanded ? "inline" : "inline",
      },
    ],
    from: {
      opacity: isExpanded ? 0 : 0.9,
    },
  });

  const showXHideHamburgerAnimation = useSpring({
    to: [
      {
        opacity: isExpanded ? 1 : 0,
        display: isExpanded ? "inline" : "inline",
        marginLeft: isExpanded ? -20 : -30,
      },
    ],
    from: {
      opacity: isExpanded ? 0 : 1,
      display: isExpanded ? "inline" : "inline",
      marginLeft: isExpanded ? -20 : -30,
    },
  });

  return (
    <>
      <label
        htmlFor="menu-toggle"
        aria-label="Meny"
        className="block cursor-pointer "
      >
        <animated.svg
          id="hamburgersvg"
          style={showHamburgerHideXAnimation}
          onClick={() => {
            setisExpanded((prevExpanded) => !prevExpanded);
          }}
          className="text-gray-900 fill-current"
          xmlns="https://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </animated.svg>
        <animated.svg
          id="xsvg"
          onClick={() => {
            setisExpanded((prevExpanded) => !prevExpanded);
          }}
          style={showXHideHamburgerAnimation}
          xmlns="https://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-x z-20 absolute"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </animated.svg>
      </label>

      {isExpanded && (
        <animated.div
          style={hamburgerSlideDownAnimation}
          id="mobile-menu"
          className="absolute right-0 z-10 w-full text-center text-black bg-white"
        >
          <div class="grid grid-cols-6 gap-4">
            <div className="pt-20 pb-10 p-5">List 1</div>
            <div className="pt-20 pb-10 p-5">List 4</div>
            <div className="pt-20 pb-10 p-5">List 3</div>
          </div>
        </animated.div>
      )}
    </>
  );
};

export default Hamburger;
