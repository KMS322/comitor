import produce from "../util/produce";

export const initialState = {
  addOrderLoading: false,
  addOrderDone: false,
  addOrderError: null,
  loadOrderLoading: false,
  loadOrderDone: false,
  loadOrderError: null,
  orders: [],
};

export const ADD_ORDER_REQUEST = "ADD_ORDER_REQUEST";
export const ADD_ORDER_SUCCESS = "ADD_ORDER_SUCCESS";
export const ADD_ORDER_FAILURE = "ADD_ORDER_FAILURE";

export const LOAD_ORDER_REQUEST = "LOAD_ORDER_REQUEST";
export const LOAD_ORDER_SUCCESS = "LOAD_ORDER_SUCCESS";
export const LOAD_ORDER_FAILURE = "LOAD_ORDER_FAILURE";

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_ORDER_REQUEST:
        draft.addOrderLoading = true;
        draft.addOrderError = null;
        draft.addOrderDone = false;
        break;
      case ADD_ORDER_SUCCESS:
        draft.addOrderLoading = false;
        draft.addOrderDone = true;
        break;
      case ADD_ORDER_FAILURE:
        draft.addOrderLoading = false;
        draft.addOrderError = action.error;
        break;
      case LOAD_ORDER_REQUEST:
        draft.loadOrderLoading = true;
        draft.loadOrderError = null;
        draft.loadOrderDone = false;
        break;
      case LOAD_ORDER_SUCCESS:
        draft.loadOrderLoading = false;
        draft.loadOrderDone = true;
        draft.orders = draft.orders.concat(action.data);
        break;
      case LOAD_ORDER_FAILURE:
        draft.loadOrderLoading = false;
        draft.loadOrderError = action.error;
        break;
      default:
        return state;
    }
  });
};

export default reducer;
