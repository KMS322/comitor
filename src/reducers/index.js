import { combineReducers } from "redux";
import user from "./user";
import adminProduct from "./adminProduct";

const rootReducer = combineReducers({
  user,
  adminProduct,
});

export default rootReducer;
