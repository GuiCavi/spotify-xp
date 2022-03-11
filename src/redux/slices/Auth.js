import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const getTheTimeItExpires = (duration, fromDate) => {
  const date = new Date(fromDate);
  date.setSeconds(date.getSeconds() + parseInt(duration, 10));
  return date;
};

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    expiresIn: "",
    tokenType: "",
    isExpired: false,
    loginAt: "",
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setData: (state, action) => {
      const expirationTime = getTheTimeItExpires(
        action.payload.expires_in,
        action.payload.login_at
      );

      state.token = action.payload.access_token;
      state.expiresIn = action.payload.expires_in;
      state.tokenType = action.payload.token_type;

      state.isExpired = new Date() > expirationTime;
      state.loginAt = action.payload.login_at;
    },
  },
});

export const { setToken, setData } = AuthSlice.actions;

export default AuthSlice.reducer;

export const useAuth = () => useSelector((state) => state.auth);
export const useToken = () => useSelector((state) => state.auth.token);
