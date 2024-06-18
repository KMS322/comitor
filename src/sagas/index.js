import { all, fork } from "redux-saga/effects";
import axios from "axios";
import userSaga from "./user";
import adminProductSaga from "./adminProduct";
import cartSaga from "./cart";

import { API_URL } from "../constants";

axios.defaults.baseURL = API_URL;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(userSaga), fork(adminProductSaga), fork(cartSaga)]);
}
