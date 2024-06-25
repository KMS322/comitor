import { combineReducers } from "redux";
import user from "./user";
import adminProduct from "./adminProduct";
import cart from "./cart";
import order from "./order";
import board from "./board";
import banner from "./banner";
import coupon from "./coupon";

const rootReducer = combineReducers({
  user,
  adminProduct,
  cart,
  order,
  board,
  banner,
  coupon,
});

export default rootReducer;
