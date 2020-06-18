import * as types from './actionTypes';
const axios = require('axios').default;
import * as amountActions from "./amountActions";

export function transactionSuccess(transactions) {
  return { 
    type: types.GET_TRANSACTION_SUCCESS, 
    transactions:transactions
   };
}
export function getAllTransaction(StartDate,EndDate) {
    return function (dispatch) {
      return axios.get("http://localhost:3004/api/transaction?startday="+StartDate+"&endday="+EndDate)
        .then(function (res) {
            dispatch(transactionSuccess(res.data.TransactionModel));
        });
    };
  }
  export function AddTransaction(body) {
    return function (dispatch) {
      return axios.post("http://localhost:3004/api/transaction",body)
        .then(function (res) {
          dispatch(amountActions.getAmount());
        });
    };
  }