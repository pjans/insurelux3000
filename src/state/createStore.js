import { createStore as reduxCreateStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { FETCH_BRANDS_SUCCESS } from "../actions/types";
import thunk from "redux-thunk";

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_BRANDS_SUCCESS:
      return {
        ...state,
        brands: action.payload
      };
    default:
      return state;
  }
};

const initialState = {
  brands: []
};

const createStore = () =>
  reduxCreateStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );

export default createStore;
