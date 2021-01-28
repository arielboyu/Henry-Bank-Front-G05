import axios from 'axios';

export const CREATE_USER = 'CREATE_USER';
export const DISCHARGE_USER = 'DISCHARGE_USER';

const createUser = (user) => {
	return {
		type : CREATE_USER,
		user
	};
};

const dischargeUser = (user) => {
	return {
		type : DISCHARGE_USER,
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

export const dischargeNewUser = (updateUser) => {
	return async (dispatch) => {
		try {
			const res = await axios.put(`http://localhost:3001/user/alta/${updateUser.id}`, {
				firstName    : updateUser.first_name,
				lastName     : updateUser.last_name,
				mobile       : updateUser.phone_number,
				street       : 'Bs As',
				streetNumber : '299 y Calle Colonia',
				city         : 'Junin',
				province     : 'Mendoza',
				country      : 'Argentina',
				birthdate    : '2021-01-27',
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
