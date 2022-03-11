import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
    clear: (state) => {
      state.token = "";
      state.expiresIn = "";
      state.tokenType = "";
      state.isExpired = false;
      state.loginAt = "";
    },
  },
});

export const {
  setToken, setData, clear,
} = AuthSlice.actions;

export default AuthSlice.reducer;

export const useAuth = () => useSelector((state) => state.auth);
export const useToken = () => useSelector((state) => state.auth.token);

export const logoutAsync = createAsyncThunk(
  "auth/logout",
  async (_, { dispatch }) => {
    localStorage.removeItem("auth_data");
    dispatch(clear());
  }
);
