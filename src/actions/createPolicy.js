import XHR from "../api/axios";
import {
  CREATE_POLICY_INIT,
  CREATE_POLICY_SUCCESS,
  CREATE_POLICY_FAILURE
} from "./types";

const createPolicy = ({ modelId, period: { start, end }, owners, kilometers }) => {
  return dispatch => {
    dispatch(createPolicyInit());

    const params = {
      modelId,
      period: { start, end },
      owners,
      kilometers
    }

    XHR
      .post(`/policy`, params)
      .then(res => dispatch(createPolicySuccess(res.data)))
      .catch(err => dispatch(createPolicyFailure(err.message)));
  };
};

const createPolicySuccess = data => ({
  type: CREATE_POLICY_SUCCESS,
  payload: data
});

const createPolicyInit = () => ({
  type: CREATE_POLICY_INIT
});

const createPolicyFailure = error => ({
  type: CREATE_POLICY_FAILURE,
  payload: error
});

export default createPolicy;
