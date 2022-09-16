import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user-chat_me",
  initialState: {
    isUserLoggedIn: false,
    userInfo: {},
    currentUserSelected: {},
    usersLists: [],
    currentUserChat: {},
  },
  reducers: {
    login: (state, action) => {
      state.isUserLoggedIn = true;
      state.userInfo = action.payload;
      localStorage.setItem("chat_me_user", action.payload);
    },
    currentChatUser: (state, action) => {
      state.currentUserSelected = action.payload.responseData;
      state.usersLists.push(action.payload.responseData);
    },
    onChatUser: (state, action) => {
      state.currentUserChat = action.payload;
    },

    logout: (state, action) => {
      state.isUserLoggedIn = false;
      state.userInfo = {};
      localStorage.removeItem("chat_me_user");
    },
  },
});

export const userReducer = userSlice.reducer;
export const { login, currentChatUser, onChatUser, logout } = userSlice.actions;
