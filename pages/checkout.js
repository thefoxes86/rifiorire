import Header from "components/Header/Header.component";
import CartItemsContainer from "components/Cart/CartPage/CartItemsContainer.component";
import PageTitle from "components/Title/PageTitle.component";

const Checkout = () => {
  return (
    <>
      <Header title="Checkout" />
      <PageTitle title="Checkout" />
      <CartItemsContainer />
    </>
  );
};

export default Checkout;
