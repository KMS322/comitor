import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  UPLOAD_PRODUCT_REQUEST,
  UPLOAD_PRODUCT_SUCCESS,
  UPLOAD_PRODUCT_FAILURE,
} from "../reducers/adminProduct";

function uploadProductAPI(data) {
  console.log("data : ", data);
  return axios.post("/adminProduct/upload", data);
}

function* uploadProduct(action) {
  try {
    console.log("AAA");
    const result = yield call(uploadProductAPI, action.data);
    yield put({
      type: UPLOAD_PRODUCT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UPLOAD_PRODUCT_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchUploadProduct() {
  yield takeLatest(UPLOAD_PRODUCT_REQUEST, uploadProduct);
}

export default function* adminProductSaga() {
  yield all([fork(watchUploadProduct)]);
}
