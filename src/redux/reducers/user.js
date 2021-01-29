import {
  CREATE_USER,
  GET_ALL_USERS,
  DISCHARGE_USER
} from "../actions/user";

import { LOGIN } from '../constants/index';


const initialState = {
  user: {},
  users: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        user: [state.user, action.user]
      };
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.user
      };
    case DISCHARGE_USER:
      return {
        ...state,
        user: [ state.user, action.user ]
      };
    case LOGIN:
      return {
        ...state,
        user: {
          token: action.user,
          logged: true
        }
      };
    default:
    return state;
  };
};



export default userReducer;
