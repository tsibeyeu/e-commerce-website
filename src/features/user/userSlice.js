import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const themes = {
  dracula: "dracula",
  winter: "winter",
};
function getItemFromLocalStorage() {
  return localStorage.getItem("theme") || themes.winter;
}
function getUserFromLocalStorage(){
  return JSON.parse(localStorage.getItem("user")) || null;
}
const initialState = {
  // user: { username: "tsion beyene" },
  user: getUserFromLocalStorage(),
  theme: getItemFromLocalStorage(),
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload, token: action.payload.jwt };
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));

    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      toast.success("Logged out");
    },
    toggleTheme: (state) => {
      const { dracula, winter } = themes;
      state.theme = state.theme === dracula ? winter : dracula;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});
export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;
