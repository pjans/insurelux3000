import {
  FETCH_BRANDS_INIT,
  FETCH_BRANDS_SUCCESS,
  FETCH_BRANDS_FAILURE,
  FETCH_POLICIES_INIT,
  FETCH_POLICIES_SUCCESS,
  FETCH_POLICIES_FAILURE,
  PREMIUM_CALCULATION_INIT,
  FETCH_MODELS_INIT,
  FETCH_MODELS_SUCCESS,
  FETCH_MODELS_FAILURE,
  CREATE_POLICY_INIT,
  CREATE_POLICY_FAILURE,
  PREMIUM_CALCULATION_FAILURE,
} from "../actions/types";

const reducer = (state, action) => {
  switch (action.type) {
    case PREMIUM_CALCULATION_INIT:
    case FETCH_POLICIES_INIT:
    case CREATE_POLICY_INIT:
    case FETCH_MODELS_INIT:
    case FETCH_BRANDS_INIT:
      return {
        ...state,
        isLoading: true
      };
    case PREMIUM_CALCULATION_FAILURE:
    case FETCH_POLICIES_FAILURE:
    case CREATE_POLICY_FAILURE:
    case FETCH_BRANDS_FAILURE:
    case FETCH_MODELS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case FETCH_BRANDS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        brands: action.payload
      };
    case FETCH_POLICIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        policies: action.payload
      };
    case FETCH_MODELS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        models: action.payload
      };
    default:
      return state;
  }
};

export default reducer;