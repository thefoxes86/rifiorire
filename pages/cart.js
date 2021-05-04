import Header from "components/Header/Header.component";
import CheckoutForm from "components/Checkout/CheckoutForm.component";
import PageTitle from "components/Title/PageTitle.component";

const Cart = () => (
  <>
    <Header title="Cart" />
    <PageTitle title="Cart" />
    <CheckoutForm />
  </>
);
export default Cart;
