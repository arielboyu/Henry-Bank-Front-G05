import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Platform, TextInput, TouchableOpacity, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import logo from '../assets/logo.png';
import * as Animatable from 'react-native-animatable';
import { useDispatch } from 'react-redux';
import { getUsers, login } from '../src/redux/actions/user';

export default function Login({ navigation }) {
	const dispatch = useDispatch();
	useEffect(() => {
		// dispatch(getUsers());
	}, []);

	const [ data, setData ] = useState({
		email                 : '',
		password              : '',
		check_TextImputChange : false,
		secureTextEntry       : true,
		isValidUser           : true,
		isValidPassword       : true
	});

	const textInputChange = (val) => {
		if (val.length != 0) {
			setData({
				...data,
				email                 : val,
				check_TextImputChange : true
			});
		} else {
			setData({
				...data,
				email                 : val,
				check_TextImputChange : false
			});
		}
	};

	const handlePasswordChange = (val) => {
		setData({
			...data,
			password : val
		});
	};

	const updateSecureTextEntry = () => {
		setData({
			...data,
			secureTextEntry : !data.secureTextEntry
		});
	};

	const handleLogin = () => {
		if (data.isValidUser && data.isValidPassword) {
			dispatch(login(data));
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image style={{ height: 60, width: 60, alignSelf: 'center' }} source={logo} />
				<Text style={styles.text_header}>Bienvenido!</Text>
			</View>
			<View style={styles.footer}>
				<Text style={styles.text_footer}>Email/Telefóno</Text>
				<View style={styles.action}>
					<FontAwesome name="user-o" color="#05375a" size={20} />
					<TextInput
						placeholder="ingrese e-mail o telefóno"
						style={styles.text_input}
						autoCapitalize="none"
						onChangeText={(val) => textInputChange(val)}
					/>
					{data.check_TextImputChange ? <Feather name="check-circle" color="green" size={20} /> : null}
				</View>
				<Animatable.View animation="fadeInLeft">
					<Text style={styles.errorMsg}>Debe colocar un email o telefóno validos</Text>
				</Animatable.View>
				<Text style={{ color: '#05375a', fontSize: 18, marginTop: 30 }}>Contraseña</Text>
				<View style={styles.action}>
					<FontAwesome name="lock" color="#05375a" size={20} paddingLeft={10} />
					<TextInput
						placeholder="ingrese contraseña"
						secureTextEntry={data.secureTextEntry ? true : false}
						style={styles.text_input}
						autoCapitalize="none"
						onChangeText={(val) => handlePasswordChange(val)}
					/>
					<TouchableOpacity onPress={updateSecureTextEntry}>
						{data.secureTextEntry ? (
							<Feather name="eye-off" color="grey" size={20} />
						) : (
							<Feather name="eye" color="grey" size={20} />
						)}
					</TouchableOpacity>
				</View>
				<View>
					<TouchableOpacity style={{ marginTop: 10 }}>
						<Text style={{ fontSize: 12, color: 'blue', alignSelf: 'center' }}>Olvidó su Contraseña?</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.button}>
					<TouchableOpacity
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
						<Text style={([ styles.textSing ], { color: 'black' })} onPress={handleLogin}>
							Iniciar Sesión
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.button}>
					<TouchableOpacity
						onPress={() => navigation.navigate('RegisterScreen')}
						style={
							([ styles.singIn ],
							{
								marginTop         : -30,
								backgroundColor   : 'grey',
								borderRadius      : 40,
								paddingVertical   : 10,
								paddingHorizontal : 14
							})
						}>
						<Text style={([ styles.textSing ], { color: 'black' })}>Registrarse</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container   : {
		flex            : 1,
		backgroundColor : 'lightgreen'
	},
	header      : {
		flex              : 1,
		justifyContent    : 'flex-end',
		paddingHorizontal : 20,
		paddingBottom     : 50,
		alignItems        : 'center'
	},
	footer      : {
		flex                 : 3,
		backgroundColor      : '#fff',
		borderTopLeftRadius  : 30,
		borderTopRightRadius : 30,
		paddingHorizontal    : 20,
		paddingVertical      : 30
	},
	text_header : {
		color      : 'white',
		fontWeight : 'bold',
		fontSize   : 30
	},

	text_footer : {
		color    : '#05375a',
		fontSize : 18
	},
	action      : {
		flexDirection     : 'row',
		marginTop         : 10,
		borderBottomWidth : 1,
		borderBottomColor : '#f2f2f2',
		paddingBottom     : 5
	},
	text_input  : {
		flex        : 1,
		paddingLeft : 15,
		color       : 'black'
	},
	button      : {
		alignItems : 'center',
		marginTop  : 50
	},
	singIn      : {
		width          : '100%',
		height         : 80,
		justifyContent : 'center',
		alignItems     : 'center',
		borderRadius   : 10
	},
	textSing    : {
		fontSize   : 18,
		fontWeight : 'bold'
	},
	errorMsg    : {
		fontSize : 12,
		color    : 'red'
	}
});
