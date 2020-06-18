import * as types from './actionTypes';
const axios = require('axios').default;

export function amount_Success(balance,income,expense) {
  return { 
    type: types.BALANCE_SUCCESS, 
    balance:balance,
    income:income,
    expense:expense
   };
}
export function getAmount() {
    return function (dispatch) {
      return axios.get("http://localhost:3004/api/balance")
        .then(function (res) {
            dispatch(amount_Success(res.data[0].amount,res.data[1].amount,res.data[2].amount));
        });
    };
  }