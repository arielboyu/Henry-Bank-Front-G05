import {
  CREATE_USER,
  GET_ALL_USERS
} from "../actions/user";


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
      default:
      return state;
  }
};

export default userReducer;