import { useSelector } from "react-redux";
import CartItem from "./CartItem";
const CartItemsList = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  return (
    <>
      {cartItems.map((item) => {
        console.log(item)
        return <CartItem key={item.cartID} cartItem={item} />;
      })}
    </>
  );
};

export default CartItemsList;
