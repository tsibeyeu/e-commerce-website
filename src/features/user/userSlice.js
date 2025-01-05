import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: { username: "tsion beyen" },
  theme: "dracula",
};
const userSlice =createSlice({
    name:"user",
    initialState,
    reducers:{
        loginUser:(state,action)=>{
            console.log("login");
        },
        logoutUser:(state)=>{
            console.log("logout");
        },
        toggleTheme:(state)=>{
            console.log("theme");
        }
    }
});
export const {loginUser,logoutUser,toggleTheme}=userSlice.actions;
export default userSlice.reducer;