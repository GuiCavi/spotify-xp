import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const AuthSlice = createSlice({
  name: "auth",
  initialState: { token: localStorage.getItem("token") || null },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = AuthSlice.actions;

export default AuthSlice.reducer;

export const useToken = () => useSelector((state) => state.auth.token);
