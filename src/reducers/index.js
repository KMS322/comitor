import { combineReducers } from "redux";
import user from "./user";
import adminProduct from "./adminProduct";
import cart from "./cart";
import order from "./order";

const rootReducer = combineReducers({
  user,
  adminProduct,
  cart,
  order,
});

export default rootReducer;
