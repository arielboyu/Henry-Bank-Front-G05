import {
  GET_ALL_MOVEMENTS,
  GET_ACCOUNT_BY_ID,
  GET_ALL_ACCOUNTS
} from '../constants/index';
  
  const initialState = {
    userAccounts: {},
    movements: []
  };
  
  const accountReducer = (state = initialState, action) => {
    switch (action.type) { 
        case GET_ACCOUNT_BY_ID:
          return {
            ...state,
            movements: action.movement
          };
        case GET_ALL_ACCOUNTS:
          return {
            ...state,
            userAccounts: action.account
          };
        case GET_ALL_MOVEMENTS:
          return {
            ...state,
            movements: action.movement
          };
        default:
          return state;
    };
  };
  
  
  export default accountReducer;
  