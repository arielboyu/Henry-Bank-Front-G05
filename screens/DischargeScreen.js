import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, Platform } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import logo from '../assets/LogoVector.png';
import { dischargeNewUser, getUsers } from '../src/redux/actions/user';
import { TextInput, Button } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function dischargeScreen({ navigation, user }) {
	const userId = useSelector((state) => state.user.user[1].id);
	//const userId = 1;
	let today = new Date();
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
			alert('Los permisos de Acceso a us archivos son requeridos');
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

	const onChangeDate = (e) => {
		setData({
			...data,
			form : {
				...data.form,
				['birthday_date'] : e.target.value
			}
		});
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
			alert('Debes ser Mayor de 16 años, Selecciona otra fecha');
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
			<View style={styles.imagenview} />
			<View style={styles.imageaction}>
				<TouchableOpacity style={styles.button_image} onPress={openImgPictureAsync}>
					<Image
						source={{
							uri : selectedImage !== null ? selectedImage.localUri : 'https://picsum.photos/200/200'
						}}
						style={styles.image}
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.form}>
				<View />
				<Picker
					style={{
						color        : 'black',
						position     : 'relative',
						top          : 235,
						left         : 50,
						width        : 122,
						marginTop    : 2,
						borderRadius : 60
					}}
					selectedValue={data.form.typeID}
					onValueChange={(val) => handleChange({ value: val, type: 'typeID' })}>
					<Picker.Item label="DNI" value="DNI" />
					<Picker.Item label="PAS" value="PASAPORTE" />
				</Picker>
				<View>
					<View style={styles.nro}>
						<TextInput
							style={{
								height      : 45,
								color       : 'white',
								paddingLeft : 5,
								marginTop   : 2,
								width       : 200
							}}
							placeholder="Número Documento"
							placeholderTextColor="black"
							keyboardType="decimal-pad"
							onChangeText={(val) => handleChange({ value: val, type: 'document_number' })}
						/>
					</View>
				</View>
				<View style={styles.nombres}>
					<TextInput
						style={{
							height      : 45,
							color       : 'black',
							paddingLeft : 5,
							marginTop   : 2
						}}
						placeholder="Nombres"
						placeholderTextColor="black"
						autoCapitalize="none"
						onChangeText={(val) => handleChange({ value: val, type: 'first_name' })}
					/>
				</View>
				<View style={styles.apellidos}>
					<TextInput
						placeholder="Apellidos"
						placeholderTextColor="black"
						style={{
							height      : 45,
							paddingLeft : 5
						}}
						autoCapitalize="none"
						onChangeText={(val) => handleChange({ value: val, type: 'last_name' })}
					/>
				</View>
				<View>
					<View style={styles.picker_tel}>
						<Picker
							selectedValue={data.form.prefix_code}
							style={{
								color        : 'black',
								position     : 'relative',
								top          : 180,
								left         : 50,
								width        : 70,
								borderRadius : 60
							}}
							onValueChange={(val) => handleChange({ value: val, type: 'prefix_code' })}>
							<Picker.Item label="+54" value="+54" />
							<Picker.Item label="+57" value="+57" />
						</Picker>
					</View>
					<View style={styles.telefono}>
						<TextInput
							placeholder="Télefono Celular"
							placeholderTextColor="black"
							style={{
								height      : 45,
								paddingLeft : 5
							}}
							keyboardType="decimal-pad"
							onChangeText={(val) => handleChange({ value: val, type: 'phone_number' })}
						/>
					</View>
				</View>
				<View style={styles.fecha}>
					{Platform.OS === 'web' ? (
						<input
							type="date"
							style={{
								height      : 45,
								paddingLeft : 5,
								marginTop   : 2,
								fontSize    : 11
							}}
							onChange={onChangeDate}
						/>
					) : (
						<TextInput
							placeholder="Fecha de Nacimiento(YYYY-MM-DD)"
							placeholderTextColor="black"
							style={{
								height      : 45,
								paddingLeft : 5,
								marginTop   : 2,
								fontSize    : 11
							}}
							autoCapitalize="none"
							//onSubmitEditing={showDatePicker}
							onFocus={showDatePicker}
							value={data.form.birthday_date}
							onChangeText={(val) => handleChange({ value: val, type: 'birthday_date' })}
						/>
					)}
					{/* <FontAwesome name="user-o" color="#05375a" size={20} /> */}
					<View>
						<DateTimePickerModal
							isVisible={isDatePickerVisible}
							mode="date"
							onConfirm={handleConfirm}
							onCancel={showDatePicker}
						/>
					</View>
				</View>
				<Animatable.View animation="fadeInLeft">
					<Text style={styles.errorMsg}>Recuerda Debes ser mayor a 16 años</Text>
				</Animatable.View>
			</View>
			<View style={styles.guardar}>
				<Button
					mode="outlined"
					style={{
						backgroundColor : '#006A34'
					}}
					color="white"
					onPress={() => {
						setUpdateUser(data.form);
					}}>
					GUARDAR
				</Button>
			</View>
			<View style={styles.logo}>
				<Image style={styles.imagelogo} source={logo} />
				<Text />
				<FontAwesome
					name="camera"
					color="black"
					size={25}
					style={{
						position : 'relative',
						top      : 40,
						left     : -60
					}}
				/>
				<View
					style={{
						position        : 'relative',
						top             : -50,
						left            : -140,
						height          : 1.5,
						backgroundColor : 'black'
					}}
				/>
				<View
					style={{
						position        : 'relative',
						top             : -108,
						left            : -60,
						height          : 48,
						width           : 1.5,
						backgroundColor : '#006A34'
					}}>
					<Text>y</Text>
				</View>
				<View>
					<Text
						style={{
							width    : 140,
							height   : 60,
							position : 'relative',
							top      : -148,
							left     : -35,
							fontSize : 23
						}}>
						Cargar Datos!
					</Text>
					<ImageBackground
						style={{
							width    : 80,
							height   : 50,
							position : 'relative',
							top      : -216,
							left     : 130
						}}
						source={require('../assets/backgroundCard2.jpeg')}
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container    : {
		flex            : 1,
		backgroundColor : '#F1F4FF'
	},
	text_tree    : {
		color           : 'black',
		borderRadius    : 10,
		marginTop       : -12,
		fontSize        : 20,
		paddingBottom   : 2,
		paddingLeft     : 3,
		backgroundColor : '#E4DC65',
		width           : 60,
		position        : 'relative',
		left            : -65,
		top             : -40
	},
	logo         : {
		position : 'relative',
		top      : -495,
		left     : 140
	},
	imagelogo    : {
		marginLeft   : 10,
		marginBottom : 15,
		height       : 55,
		width        : 55,
		borderRadius : 10,
		position     : 'relative',
		top          : 3,
		left         : -140
	},
	imageaction  : {
		flexDirection : 'row',
		position      : 'relative',
		top           : 100,
		left          : 115,
		width         : 120
	},
	image        : {
		height       : 100,
		width        : 100,
		borderRadius : 100,
		resizeMode   : 'contain'
	},

	button_image : {
		flex           : 1,
		justifyContent : 'center',
		alignItems     : 'center'
	},
	errorMsg     : {
		fontSize : 10,
		color    : 'red',
		position : 'relative',
		top      : 140,
		left     : 120
	},
	guardar      : {
		position          : 'relative',
		top               : 30,
		left              : 5,
		marginLeft        : 10,
		paddingHorizontal : 120
	},
	picker_tel   : {
		position : 'relative',
		top      : 4,
		width    : 70
	},
	form         : {
		position : 'relative',
		top      : -120
	},
	nro          : {
		position     : 'relative',
		top          : 185,
		left         : 100,
		borderRadius : 60,
		width        : 200
	},
	nombres      : {
		position     : 'relative',
		top          : 185,
		left         : 100,
		borderRadius : 60,
		width        : 200,
		marginTop    : 5
	},
	apellidos    : {
		position     : 'relative',
		top          : 185,
		left         : 100,
		borderRadius : 60,
		width        : 200,
		marginTop    : 5
	},
	telefono     : {
		position     : 'relative',
		top          : 134,
		left         : 100,
		borderRadius : 60,
		width        : 200,
		marginTop    : 5
	},
	fecha        : {
		position     : 'relative',
		top          : 134,
		left         : 100,
		borderRadius : 60,
		width        : 203,
		height       : 40,
		marginTop    : 5
	}
});
