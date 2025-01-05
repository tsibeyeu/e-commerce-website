import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const themes = {
  dracula: "dracula",
  winter: "winter",
};
function getItemFromLocalStorage() {
  return localStorage.getItem("theme") || themes.winter;
}
const initialState = {
  user: { username: "tsion beyen" },
  theme:getItemFromLocalStorage(),
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log("login");
    },
    logoutUser: (state) => {
      console.log("logout");
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
