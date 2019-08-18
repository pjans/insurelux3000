import instance from "../api/axios";
import {
  FETCH_BRANDS_INIT,
  FETCH_BRANDS_SUCCESS,
  FETCH_BRANDS_FAILURE
} from "../state/types";

const fetchBrands = () => {
  return dispatch => {
    dispatch(fetchBrandsInit());

    instance
      .get("/car/brands")
      .then(res => {
        dispatch(fetchBrandsSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchBrandsFailure(err.message));
      });
  };
};

const fetchBrandsSuccess = data => ({
  type: FETCH_BRANDS_SUCCESS,
  payload: data
});

const fetchBrandsInit = () => ({
  type: FETCH_BRANDS_INIT
});

const fetchBrandsFailure = error => ({
  type: FETCH_BRANDS_FAILURE,
  payload: error
});

export default fetchBrands;
