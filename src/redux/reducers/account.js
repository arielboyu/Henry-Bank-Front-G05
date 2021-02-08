import {
  GET_ACCOUNT_BY_ID
} from '../constants/index';
  
  const initialState = {
    userAccounts: {}
  };
  
  const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ACCOUNT_BY_ID:
          return {
            ...state,
            userAccounts: action.account
          };
      default:
      return state;
    };
  };
  
  
  export default accountReducer;
  