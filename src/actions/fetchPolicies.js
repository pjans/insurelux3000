import XHR from "../api/axios";
import {
  FETCH_POLICIES_INIT,
  FETCH_POLICIES_SUCCESS,
  FETCH_POLICIES_FAILURE
} from "./types";

const fetchPolicies = (page, size) => {
  return dispatch => {
    dispatch(fetchPoliciesInit());

    XHR
      .get(`/policy?page=${page}&size=${size}`)
      .then(res => dispatch(fetchPoliciesSuccess(res.data)))
      .catch(err => dispatch(fetchPoliciesFailure(err.message)));
  };
};

const fetchPoliciesSuccess = data => ({
  type: FETCH_POLICIES_SUCCESS,
  payload: data
});

const fetchPoliciesInit = () => ({
  type: FETCH_POLICIES_INIT
});

const fetchPoliciesFailure = error => ({
  type: FETCH_POLICIES_FAILURE,
  payload: error
});

export default fetchPolicies;
