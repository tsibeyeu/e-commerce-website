import {createSlice} from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 534,
  tax:0,
  orderTotal: 0,
};

const getCartFromLocalStorage=()=>{
    return JSON.parse(localStorage.getItem("cart")) || initialState;
}
const cartSlice =createSlice({
    name: "cart",
    initialState:getCartFromLocalStorage(),
    reducers:{
        addItem:(state,action)=>{
            console.log(action.payload);
            const {product} =action.payload;
            const item=state.cartItems.find((i)=>i.cartId === product.cartId);
            if(item){
                item.amount +=product.amount;

            }else{
                state.cartItems.push(product);
            }
            state.numItemsInCart +=product.amount;
            state.cartTotal +=product.price * product.amount;
            state.tax=0.1 * state.cartTotal;
            state.orderTotal = state.cartTotal + state.tax + state.shipping;
            localStorage.setItem("cart",JSON.stringify(state))
            toast.success("Item added to cart");
        },
        removeItem:(state,action)=>{}
    },
    clearCart:(state)=>{

    },
    updateCart:(state,action)=>{

    },

});
export const {addItem,removeItem,clearCart,updateCart}=cartSlice.actions;
export default cartSlice.reducer;