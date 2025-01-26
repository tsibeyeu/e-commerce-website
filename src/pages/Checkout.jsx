import { useSelector } from "react-redux";
import { CartTotals, CheckoutForm, SectionTitle } from "../components";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
export const loader = (store) => () => {
  const user = store.getState().user.user;
  console.log(user);
  if (!user) {
    toast.warn("Please login to continue");
   return redirect("/login");
  }
  return null;
};
const Checkout = () => {
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  if (cartTotal === null) return <SectionTitle text="Your Cart is empty" />;
  return (
    <>
      <SectionTitle text="Place your order" />
      <div className="mt-8 gap-8  grid md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};

export default Checkout;
