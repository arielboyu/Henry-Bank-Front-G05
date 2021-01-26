import {
  CREATE_USER
} from "../actions/user";


const initialState = {
  user: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        user: [...state.user, action.user]
      };
      default:
      return state;
  }
};

export default userReducer;