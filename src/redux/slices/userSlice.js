import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user-chat_me",
  initialState: {
    isUserLoggedIn: false,
    userInfo: {},
    // userToken: null,
    // loading: false,
  },
  reducers: {
    login: (state, action) => {
      state.isUserLoggedIn = true;
      state.userInfo = action.payload;
      localStorage.setItem("chat_me_user", action.payload);
    },
    logout: (state, action) => {
      state.isUserLoggedIn = false;
      state.userInfo = {};
      localStorage.removeItem("chat_me_user");
    },
  },
});

export const userReducer = userSlice.reducer;
export const { login, logout } = userSlice.actions;
