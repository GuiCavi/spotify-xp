import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "../../redux/slices/Auth";

export default configureStore({ reducer: { auth: AuthReducer } });
