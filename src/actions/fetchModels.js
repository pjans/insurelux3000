import XHR from "../api/axios";
import {
  FETCH_MODELS_INIT,
  FETCH_MODELS_SUCCESS,
  FETCH_MODELS_FAILURE
} from "./types";

const fetchModels = (brandId) => {
  return dispatch => {
    dispatch(fetchModelsInit());

    XHR
      .get(`car/models/${brandId}`)
      .then(res => dispatch(fetchModelsSuccess(res.data)))
      .catch(err => dispatch(fetchModelsFailure(err.message)));
  };
};

const fetchModelsSuccess = data => ({
  type: FETCH_MODELS_SUCCESS,
  payload: data
});

const fetchModelsInit = () => ({
  type: FETCH_MODELS_INIT
});

const fetchModelsFailure = error => ({
  type: FETCH_MODELS_FAILURE,
  payload: error
});

export default fetchModels;
