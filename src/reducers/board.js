import produce from "../util/produce";
export const initialState = {
  addBoardLoading: false,
  addBoardDone: false,
  addBoardError: null,
  boardLists: [],
};

export const ADD_BOARD_REQUEST = "ADD_BOARD_REQUEST";
export const ADD_BOARD_SUCCESS = "ADD_BOARD_SUCCESS";
export const ADD_BOARD_FAILURE = "ADD_BOARD_FAILURE";

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_BOARD_REQUEST:
        draft.addBoardLoading = true;
        draft.addBoardError = null;
        draft.addBoardDone = false;
        break;
      case ADD_BOARD_SUCCESS:
        draft.addBoardLoading = false;
        draft.addBoardDone = true;
        break;
      case ADD_BOARD_FAILURE:
        draft.addBoardLoading = false;
        draft.addBoardError = action.error;
        break;
      default:
        return state;
    }
  });
};

export default reducer;
