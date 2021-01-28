import axios from 'axios';

export const CREATE_USER = "CREATE_USER";
export const GET_ALL_USERS ="GET_ALL_USERS"

const createUser = (user) => {
  return {
    type: CREATE_USER,
    user
  };
};

const getAllUsers = (user) => {
  return {
    type: GET_ALL_USERS,
    user
  };
};



export const createNewUser = (user) => {
  return async (dispatch) => {
    try {

      const res = await axios.post(`http://localhost:3001/user`,  user);
      dispatch(createUser(res.data));
      if(res.data.email){
      const email = res.data.email;
      await axios.post(`http://localhost:3001/email`, { email });
      }
      
    } catch (err) {
      console.log(err);
    }
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    try {

      const res = await axios.get(`http://localhost:3001/user`);

      dispatch(getAllUsers(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};


