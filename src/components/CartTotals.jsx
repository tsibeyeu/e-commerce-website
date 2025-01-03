import { useSelector } from "react-redux";
import { formatPrice } from "../utils";
const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cart
  );
  return (
    <div className="card bg-base-200">
      <div className="card-body ">
        {/*  SUBTOTAL */}
        <p className="flex justify-between pb-2 border-b border-base-300 text-xs">
          <span>SubTotal</span>
          <span className="font-medium">{formatPrice(cartTotal)}</span>
        </p>
        {/*  SHIPPING */}
        <p className="flex justify-between pb-2 border-b border-base-300 text-xs">
          <span> Shipping</span>
          <span className="font-medium">{formatPrice( shipping)}</span>
        </p>
        {/*  Tax */}
        <p className="flex justify-between pb-2 border-b border-base-300 text-xs">
          <span>Tax</span>
          <span className="font-medium">{formatPrice(tax)}</span>
        </p>
        {/*  TOTAL ORDER */}
        <p className="flex justify-between pb-2 border-b border-base-300 text-xs">
          <span>Total Order</span>
          <span className="font-medium">{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  );
};

export default CartTotals;
