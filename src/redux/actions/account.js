import axios from 'axios';

import { 
	GET_ACCOUNT_BY_ID
} from '../constants/index'

import IP from './ip';

const getAccount = (account) => {
	return {
		type: GET_ACCOUNT_BY_ID,
		account
	};
};

export const getOneAccount = (email, dni) => {
	return async (dispatch) => {
		try {
			const res = await axios.get(`http://${IP}:3001/account/${email}/${dni}`);
			dispatch(getAccount(res.data));
			console.log(res.data)
		} catch (err) {
			console.log(err);
		}
	};
};
