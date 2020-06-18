import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function transactionReducers(state = initialState, action) {
  switch (action.type) {
    case types.GET_TRANSACTION_SUCCESS:
      return Object.assign({}, state, { transactions: action.transactions });
    default:
      return state;
  }
}
