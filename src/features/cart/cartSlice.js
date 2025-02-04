import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 534,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || initialState;
};
const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload);
      const { product } = action.payload;
      const item = state.cartItems.find((i) => i.cartID === product.cartID);
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state);

      toast.success("Item added to cart");
    },
    removeItem: (state, action) => {
      const { cartID } = action.payload;
      const product = state.cartItems.find((i) => i.cartID === cartID);
      state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);
      state.numItemsInCart -= product.amount;
      state.cartTotal -= product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.error("Item removed from cart");
    },
    clearCart: () => {
      localStorage.setItem("cart", JSON.stringify(initialState));
      return initialState;
    },
    updateCart: (state, action) => {
      const {cartID,amount}=action.payload;
      // CURRENT ITEM BY FILTERIING THEIER CARTID SELCETED CARTID
      const item=state.cartItems.find((i)=> i.cartID === cartID);
      // update no of cart items  by adding new amount minus the current amount
      state.numItemsInCart  +=amount - item.amount;
      state.cartTotal += item.price * (amount - item.amount);
      item.amount=amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("Cart updated");
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.tax + state.shipping;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});
export const { addItem, removeItem, clearCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
