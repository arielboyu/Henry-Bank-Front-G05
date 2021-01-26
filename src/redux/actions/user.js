import axios from 'axios';

export const CREATE_USER = "CREATE_USER";

const createUser = (user) => {
  return {
    type: CREATE_USER,
    user
  };
};



export const createNewUser = (newUser) => {
  return async (dispatch) => {
    try {

      const res = await axios.post(`http://localhost:3001/user`, { newUser });

      dispatch(createUser(res.data));
      alert(`User ${res.data.firstName} created successfully`);
    } catch (err) {
      console.log(err);
    }
  };
};