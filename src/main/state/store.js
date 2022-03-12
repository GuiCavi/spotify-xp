import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "../../redux/slices/Auth";
import PlayerReducer from "../../redux/slices/Player";
import SearchReducer from "../../redux/slices/Search";

export const reducer = {
  auth: AuthReducer, search: SearchReducer, player: PlayerReducer,
};

export default configureStore({ reducer });
