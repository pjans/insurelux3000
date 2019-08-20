import XHR from "../api/axios";
import {
   PREMIUM_CALCULATION_INIT,
   PREMIUM_CALCULATION_SUCCESS,
   PREMIUM_CALCULATION_FAILURE
} from "./types";

const premiumCalculation = ({ modelId, periodStart, periodEnd, owners, kilometers }) => {

   return dispatch => {
      dispatch(premiumCalculationInit());
      const start = new Intl.DateTimeFormat('en-US').format(periodStart);
      const end = new Intl.DateTimeFormat('en-US').format(periodEnd);

      const url = `calculator/premium?modelId=${modelId}&period.start=${start}&period.end=${end}&kilometers=${kilometers}&owners=${owners}`

      XHR
         .get(url)
         .then(res => dispatch(premiumCalculationSuccess(res.data)))
         .catch(err => dispatch(premiumCalculationFailure(err.message)));
   };
};

const premiumCalculationSuccess = data => ({
   type: PREMIUM_CALCULATION_SUCCESS,
   payload: data
});

const premiumCalculationInit = () => ({
   type: PREMIUM_CALCULATION_INIT
});

const premiumCalculationFailure = error => ({
   type: PREMIUM_CALCULATION_FAILURE,
   payload: error
});

export default premiumCalculation;
