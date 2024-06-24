import { combineReducers } from "redux";
import user from "./user";
import adminProduct from "./adminProduct";
import cart from "./cart";
import order from "./order";
import board from "./board";
import banner from "./banner";

const rootReducer = combineReducers({
  user,
  adminProduct,
  cart,
  order,
  board,
  banner,
});

export default rootReducer;
