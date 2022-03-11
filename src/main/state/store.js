import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "../../redux/slices/Auth";
import SearchReducer from "../../redux/slices/Search";

export const reducer = { auth: AuthReducer, search: SearchReducer };

export default configureStore({ reducer });
