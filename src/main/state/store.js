import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "../../redux/slices/Auth";

export const reducer = { auth: AuthReducer };

export default configureStore({ reducer });
