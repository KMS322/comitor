import { combineReducers } from "redux";
import user from "./user";
import adminProduct from "./adminProduct";
import cart from "./cart";

const rootReducer = combineReducers({
  user,
  adminProduct,
  cart,
});

export default rootReducer;
