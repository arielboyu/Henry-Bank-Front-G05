import axios from 'axios';

export const CREATE_USER = 'CREATE_USER';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const DISCHARGE_USER = 'DISCHARGE_USER';

const createUser = (user) => {
	return {
		type : CREATE_USER,
		user
	};
};

const getAllUsers = (user) => {
	return {
		type : GET_ALL_USERS,
		user
	};
};

const dischargeUser = (user) => {
	return {
		type : DISCHARGE_USER,
		user
	};
};

export const createNewUser = (user) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(`http://localhost:3001/user`, user);
			dispatch(createUser(res.data));
			if (res.data.email) {
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

export const dischargeNewUser = (updateUser) => {
	return async (dispatch) => {
		try {
			const res = await axios.put(`http://localhost:3001/user/alta/${updateUser.id}`, {
				firstName    : updateUser.first_name,
				lastName     : updateUser.last_name,
				mobile       : updateUser.phone_number,
				street       : 'Bs As',
				streetNumber : 299,
				city         : 'Junin',
				province     : 'Mendoza',
				country      : updateUser.country,
				birthdate    : updateUser.birthday_date,
				typeDNI      : updateUser.typeID,
				DNI          : updateUser.document_number
			});
			dispatch(dischargeUser(res.data));
			console.log('Action', res.data);
			alert(`User Update successfully`);
		} catch (err) {
			console.log(err);
		}
	};
};
