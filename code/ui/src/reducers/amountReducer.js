import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function amountReducer(state = initialState, action) {
  switch (action.type) {
    case types.BALANCE_SUCCESS:
      return Object.assign({}, state, { totalamount: {
        balance:action.balance,
        income:action.income,
        expense:action.expense} });
    default:
      return state;
  }
}
