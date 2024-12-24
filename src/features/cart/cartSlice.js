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
const cartSlice =createSlice({
    name: "cart",
    initialState,
    reducers:{
        addItem:(state,action)=>{
            console.log(action.payload);
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