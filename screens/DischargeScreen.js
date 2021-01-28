import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import logo from '../assets/logo.png';
import { dischargeNewUser, getUsers } from '../src/redux/actions/user';

export default function dischargeScreen({ navigation, user }) {
	/* const userId = useSelector((state) => state.user.user[1].id); */
	const userId = 1;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUsers());
	});

	const [ data, setData ] = useState({
		form : {
			id              : userId,
			typeID          : 'DNI',
			document_number : '',
			first_name      : '',
			last_name       : '',
			prefix_code     : '+54',
			country         : 'Argentina',
			phone_number    : '',
			birthday_date   : ''
		}
		/* check_TextInputChange : {
			typeID          : false,
			document_number : false,
			first_name      : false,
			last_name       : false,
			prefix_code     : false,
			number          : false,
			birthday_date            : false
		},
		secureTextEntry       : true,
		isValidUser           : true,
		isValidPassword       : true */
	});

	const [ isDatePickerVisible, setDatePickerVisibility ] = useState(false);
	const [ selectedImage, setSelectedImage ] = useState(null);

	/* Selección Imagen*/
	let openImgPictureAsync = async () => {
		let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

		if (permissionResult.granted === false) {
			alert('Permission to access your files is required');
			return;
		}

		const pickerResult = await ImagePicker.launchImageLibraryAsync();

		if (pickerResult.cancelled === true) return;

		setSelectedImage({ localUri: pickerResult.uri });
	};

	const handleChange = (val) => {
		let newCountry;
		if (val.type === 'prefix_code') {
			if (val.value === '+54') newCountry = 'Argentina';
			if (val.value === '+57') newCountry = 'Colombia';
			setData({
				...data,
				form : {
					...data.form,
					[val.type]: val.value,
					['country'] : newCountry
				}
			});
		} else {
			setData({
				...data,
				form : {
					...data.form,
					[val.type]: val.value
				}
			});
		}
		console.log('Data', data);
	};

	const setUpdateUser = (updateUser) => {
		let today = new Date();
		var fechaNace = new Date(data.form.birthday_date);
		let age = Math.floor((today - fechaNace) / (1000 * 60 * 60 * 24) / 365);
		if (age >= 16) {
			console.log('Screen', updateUser);
			dispatch(dischargeNewUser(updateUser));
			navigation.navigate('LoginScreen');
		} else {
			alert('Please Change your Birthday Date');
		}
	};

	const showDatePicker = () => {
		setDatePickerVisibility(!isDatePickerVisible);
	};

	const handleConfirm = (date) => {
		//console.warn('A date has been picked: ', date);
		let today = new Date();
		let age = Math.floor((today - date) / (1000 * 60 * 60 * 24) / 365);
		let dd = date.getDate();
		let mm = date.getMonth() + 1;
		const yy = date.getFullYear();
		if (dd < 10) {
			dd = '0' + dd;
		}

		if (mm < 10) {
			mm = '0' + mm;
		}
		const newDate = yy + '-' + mm + '-' + dd;
		if (age >= 16) {
			setData({
				...data,
				form : {
					...data.form,
					['birthday_date'] : newDate
				}
			});
			showDatePicker();
		} else {
			alert('Debes ser Mayor de 16 años, Selecciona otra fecha');
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image style={{ height: 60, width: 60, alignSelf: 'center' }} source={logo} />
				<Text style={styles.text_header}>Completa tus Datos!</Text>
			</View>
			<View style={styles.footer}>
				<View style={styles.action}>
					<TouchableOpacity style={styles.button_image} onPress={openImgPictureAsync}>
						<Image
							source={{
								uri : selectedImage !== null ? selectedImage.localUri : 'https://picsum.photos/200/200'
							}}
							style={styles.image}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.action}>
					<Picker
						selectedValue={data.form.typeID}
						style={styles.picker_input}
						onValueChange={(val) => handleChange({ value: val, type: 'typeID' })}>
						<Picker.Item label="DNI" value="DNI" />
						<Picker.Item label="Pasaporte" value="Pasaporte" />
					</Picker>
				</View>
				<View style={styles.action}>
					<TextInput
						placeholder="ingrese numero de documento"
						style={styles.text_input}
						keyboardType="decimal-pad"
						onChangeText={(val) => handleChange({ value: val, type: 'document_number' })}
					/>
				</View>
				<View style={styles.action}>
					<TextInput
						placeholder="Nombres"
						style={styles.text_input}
						autoCapitalize="none"
						onChangeText={(val) => handleChange({ value: val, type: 'first_name' })}
					/>
				</View>
				<View style={styles.action}>
					<TextInput
						placeholder="Apellidos"
						style={styles.text_input}
						autoCapitalize="none"
						onChangeText={(val) => handleChange({ value: val, type: 'last_name' })}
					/>
				</View>
				<View style={styles.action}>
					<Picker
						selectedValue={data.form.prefix_code}
						style={styles.picker_prefix}
						onValueChange={(val) => handleChange({ value: val, type: 'prefix_code' })}>
						<Picker.Item label="+54" value="+54" />
						<Picker.Item label="+57" value="+57" />
					</Picker>
					<TextInput
						placeholder="Telefono Celular"
						style={styles.text_input}
						keyboardType="decimal-pad"
						onChangeText={(val) => handleChange({ value: val, type: 'phone_number' })}
					/>
				</View>
				<View style={styles.action}>
					{/* <FontAwesome name="user-o" color="#05375a" size={20} /> */}
					<TextInput
						placeholder="Fecha de Nacimiento(YYYY-MM-DD)"
						style={styles.text_input}
						autoCapitalize="none"
						//onSubmitEditing={showDatePicker}
						onFocus={showDatePicker}
						value={data.form.birthday_date}
						onChangeText={(val) => handleChange({ value: val, type: 'birthday_date' })}
					/>
					<DateTimePickerModal
						isVisible={isDatePickerVisible}
						mode="date"
						onConfirm={handleConfirm}
						onCancel={showDatePicker}
					/>
				</View>
				<Animatable.View animation="fadeInLeft">
					<Text style={styles.errorMsg}>Recuerda Debes ser mayor a 16 años</Text>
				</Animatable.View>
				<View style={styles.button}>
					<TouchableOpacity
						onPress={() => {
							setUpdateUser(data.form);
						}}
						style={
							([ styles.singIn ],
							{
								marginTop         : -25,
								backgroundColor   : 'green',
								borderRadius      : 40,
								paddingVertical   : 10,
								paddingHorizontal : 14
							})
						}>
						<Text style={([ styles.textSing ], { color: 'black' })}>Finalizar Registro</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container     : {
		flex            : 1,
		backgroundColor : 'lightgreen'
	},
	header        : {
		flex              : 1,
		justifyContent    : 'flex-end',
		paddingHorizontal : 20,
		paddingBottom     : 50,
		alignItems        : 'center'
	},
	footer        : {
		flex                 : 3,
		backgroundColor      : '#fff',
		borderTopLeftRadius  : 30,
		borderTopRightRadius : 30,
		paddingHorizontal    : 20,
		paddingVertical      : 30
	},
	text_header   : {
		color      : 'white',
		fontWeight : 'bold',
		fontSize   : 30
	},

	text_footer   : {
		color    : '#05375a',
		fontSize : 18
	},
	action        : {
		flexDirection     : 'row',
		marginTop         : 10,
		borderBottomWidth : 1,
		borderBottomColor : '#f2f2f2',
		paddingBottom     : 5
	},
	text_input    : {
		flex        : 1,
		paddingLeft : 15,
		color       : 'black'
	},
	picker_input  : {
		flex        : 1,
		height      : 20,
		width       : 100,
		paddingLeft : 15,
		color       : 'black'
	},
	picker_prefix : {
		height      : 'auto',
		width       : 100,
		paddingLeft : 15,
		color       : 'black'
	},
	image         : {
		height       : 100,
		width        : 100,
		borderRadius : 100,
		resizeMode   : 'contain'
	},
	button        : {
		alignItems : 'center',
		marginTop  : 50
	},
	button_image  : {
		flex           : 1,
		justifyContent : 'center',
		alignItems     : 'center'
	},
	singIn        : {
		width          : '100%',
		height         : 80,
		justifyContent : 'center',
		alignItems     : 'center',
		borderRadius   : 10
	},
	textSing      : {
		fontSize   : 18,
		fontWeight : 'bold'
	},
	errorMsg      : {
		fontSize : 12,
		color    : 'red'
	}
});
