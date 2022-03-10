import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    expires_in: "",
    token_type: "",
  },
  reducers: {
    initAuth: (state) => {
      const authData = localStorage.getItem("auth_data");
      if (authData) {
        const parsedAuthData = JSON.parse(authData);
        state.token = parsedAuthData.access_token;
        state.expires_in = parsedAuthData.expires_in;
        state.token_type = parsedAuthData.token_type;
      }
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setData: (state, action) => {
      state.token = action.payload.access_token;
      state.expires_in = action.payload.expires_in;
      state.token_type = action.payload.token_type;
    },
  },
});

export const {
  setToken, setData, initAuth,
} = AuthSlice.actions;

export default AuthSlice.reducer;

export const useToken = () => useSelector((state) => state.auth.token);
