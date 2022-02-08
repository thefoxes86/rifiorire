import { useContext } from "react";
import Link from "next/link";
import CartIcon from "components/SVG/CartIcon.component";
import { AppContext } from "utils/context/AppContext";

/**
 * Displays the shopping cart contents.
 * Currently only displays a sample cart.
 * Displays amount of items in cart.
 */
const Cart = () => {
  const [cart] = useContext(AppContext);

  const productsCount =
    null !== cart && Object.keys(cart).length ? cart.totalProductsCount : "";

  return (
    <>
      <Link href="/cart">
        <a className="inline-block pl-5 pr-5 no-underline" aria-label="cart">
          <CartIcon />
        </a>
      </Link>
      {/*Cart quantity */}
      {productsCount && (
        <span className="w-6 h-6 pb-2 -mt-5 text-center text-white bg-black rounded-full">
          {productsCount}
        </span>
      )}
    </>
  );
};

export default Cart;
