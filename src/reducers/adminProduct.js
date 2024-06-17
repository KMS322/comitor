import produce from "../util/produce";

export const initialState = {
  uploadProductLoading: false,
  uploadProductDone: false,
  uploadProductError: null,
  products: null,
};

export const UPLOAD_PRODUCT_REQUEST = "UPLOAD_PRODUCT_REQUEST";
export const UPLOAD_PRODUCT_SUCCESS = "UPLOAD_PRODUCT_SUCCESS";
export const UPLOAD_PRODUCT_FAILURE = "UPLOAD_PRODUCT_FAILURE";

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case UPLOAD_PRODUCT_REQUEST:
        draft.uploadProductLoading = true;
        console.log("BB");
        draft.uploadProductError = null;
        draft.uploadProductDone = false;
        console.log("CC");
        break;
      case UPLOAD_PRODUCT_SUCCESS:
        draft.uploadProductLoading = false;
        draft.uploadProductDone = true;
        break;
      case UPLOAD_PRODUCT_FAILURE:
        draft.uploadProductLoading = false;
        draft.uploadProductError = action.error;
        break;
      default:
        return state;
    }
  });
};

export default reducer;
