import { all, fork, takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  ADD_BOARD_REQUEST,
  ADD_BOARD_SUCCESS,
  ADD_BOARD_FAILURE,
} from "../reducers/board";

function addBoardAPI(data) {
  return axios.post("/board/add", data);
}

function* addBoard(action) {
  try {
    const result = yield call(addBoardAPI, action.data);
    yield put({
      type: ADD_BOARD_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_BOARD_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchAddBoard() {
  yield takeLatest(ADD_BOARD_REQUEST, addBoard);
}

export default function* boardSaga() {
  yield all([fork(watchAddBoard)]);
}
