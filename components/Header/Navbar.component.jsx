import Link from "next/link";

import Cart from "../Cart/Cart.component";
import Search from "../AlgoliaSearch/AlgoliaSearchBox.component";
import SVGMobileSearchIcon from "../SVG/SVGMobileSearchIcon.component";
import Hamburger from "./Hamburger.component";
import Heart from "components/SVG/Heart.component";
import User from "components/SVG/User.component";
import Logo from "components/SVG/Logo.component";
import SearchIcon from "components/SVG/SearchIcon.component";

/**
 * Navigation for the application.
 * Includes mobile menu.
 */
const Navbar = () => {
  return (
    <header>
      <nav id="header" className="fixed top-0 z-50 w-full py-1 bg-white ">
        <div className="container flex flex-wrap items-center justify-between px-6 mx-auto mt-0">
          <div className="order-2 md:order-1 flex items-center">
            <Hamburger />
            <SearchIcon />
          </div>
          <div className="order-1 md:order-2">
            <Link href="/">
              <a className="flex items-center text-xl font-bold tracking-wide text-gray-800 no-underline hover:no-underline ">
                <Logo />
              </a>
            </Link>
          </div>
          <div
            className="flex items-center order-2 md:order-3"
            id="nav-content"
          >
            {/* <Search /> */}
            {/* <SVGMobileSearchIcon /> */}
            <Heart />
            <User />
            <Cart />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
