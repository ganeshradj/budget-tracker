import {combineReducers} from 'redux';

import amount from './amountReducer';
import transaction from './transactionReducers';

const rootReducer = combineReducers({
  amount,transaction
});

export default rootReducer;