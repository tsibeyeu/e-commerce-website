import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartTotals, CartItemsList, SectionTitle } from "../components";
const Cart = () => {
  const user = null;
  const numItemInCart = useSelector((state) => state.cart.numItemInCart);
  if (numItemInCart === 0) {
    return <SectionTitle text="Your Cart is empty!" />;
  }
  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4">
          <CartTotals />
          {user ? (
            <Link to="/checkout" className="btn btn-primary btn-block mt-8">
              {" "}
              process to checkout
            </Link>
          ) : (
            <Link to="/login" className="btn btn-secondary btn-block mt-8">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
