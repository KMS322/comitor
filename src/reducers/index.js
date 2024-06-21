import { combineReducers } from "redux";
import user from "./user";
import adminProduct from "./adminProduct";
import cart from "./cart";
import order from "./order";
import board from "./board";

const rootReducer = combineReducers({
  user,
  adminProduct,
  cart,
  order,
  board,
});

export default rootReducer;
