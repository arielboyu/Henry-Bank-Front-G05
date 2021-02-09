import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View, Platform, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import logo from '../assets/logo.png';
import * as Animatable from 'react-native-animatable';
import { createNewUser, getUsers, login } from '../src/redux/actions/user';
import { Divider, Headline, Paragraph, TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
	const dispatch = useDispatch();
  	useEffect(() => {
		dispatch(getUsers());
    getUser()
	},[]); 

  let storageUser= "";
   // Trae el usuario guardado en asyncStorage, en forma de objeto.
   const getUser = async () => {  
    try {
      const jsonData = await AsyncStorage.getItem('USER')
      console.log("JSON DATA ", jsonData)
      storageUser = jsonData;
      return jsonData != null ? JSON.parse(jsonData) : null;
     
    } catch(e) {
      // error reading value
    }
  } 

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

	/* const updateSecureTextEntry = () => {
		setData({
			...data,
			secureTextEntry : !data.secureTextEntry
		});
	}; */

	/* const onSubmit = (user) => {
		dispatch(createNewUser(user));
	}; */

	const handleLogin = () => {
		if (data.isValidUser && data.isValidPassword) {
			dispatch(login(data));
      storeUser(data)
		} 
	};

  //Guarda el user que se loguea en asyncStorage.
   const storeUser = async (data) => {
        try {
      const jsonData = JSON.stringify(data)
      await AsyncStorage.setItem('USER', jsonData);
    } catch(e){
      console.log(e);
    }
  } 



	return (
		<View style={styles.container}>
			<View style={styles.logo}>
				<ImageBackground style={{ width: 140, height: 140 }} source={require('../assets/LogoVector.png')} />
			</View>
			<View style={styles.icon_email}>
				<FontAwesome name="user-o" color="black" size={28} />
			</View>
			<View>
				<TextInput
					label="Correo electrónico"
					onChangeText={(text) => textInputChange(text)}
					selectionColor="black"
					type= 'outlined'
					style={{
						height      : 48,
						paddingLeft : 5,
						width       : 210,
						marginTop:30,
						marginLeft:100
					}}
				/>
			</View>
			<View
				style={{
					position : 'relative',
					top      : 50
				}}>
				<View
					style={{
						marginTop:40
					}}>
					<View style={styles.icon_pw}>
						<FontAwesome name="lock" color="black" size={30} />
					</View>
					<View>
						<TextInput
							label="Contraseña"
							secureTextEntry={true}
							type= 'outlined'
							onChangeText={(text) => handlePasswordChange(text)}
							selectionColor="black"
							style={{
								height      : 48,
								paddingLeft : 5,
								width       : 210,
								position    : 'relative',
								left        : 100,
								top         : -90
							}}
						/>
						{/* <TouchableOpacity onPress={updateSecureTextEntry}>
							{data.secureTextEntry ? (
								<Feather name="eye-off" color="grey" size={20} />
							) : (
								<Feather name="eye" color="grey" size={20} />
							)}
						</TouchableOpacity> */}
					</View>
					<View
						style={{marginTop:-60
						}}>
						<Divider />
						<Divider />
					</View>
				</View>
			</View>
			<View style={styles.botones}>
				<View style={styles.boton}>
						<Button
							mode="contained"
							onPress={handleLogin}
							style={{
								backgroundColor : '#006A34',
								width           : '100%',
							}}>
							INICIAR SESIóN
						</Button>
				</View>
        		<View style={styles.boton}>
						<Button
							mode="contained"
							onPress={handleLogin}
							style={{
								backgroundColor : '#006A34',
								width           : '100%',
							}}>
							INICIAR SESIóN
						</Button>
				</View>
			</View>

		</View>
	);
}

const styles = StyleSheet.create({
	container   : {
		backgroundColor : '#FFF',
		height: '100%'
	},

	icon_email  : {
		top      : 65,
		left     : 60
	},
	icon_pw     : {
		top      : -55,
		left     : 62
	},
	botones    : {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		marginTop: 170
	},
	logo        : {
		alignItems : 'center',
		marginTop  : 30
	},
	boton       : {
		alignItems : 'center',
		marginTop  : -100,
		marginLeft : 10
	},
	iconButtons : {
		marginBottom : 10,
		borderRadius : 20,
		marginTop    : 25,
		width        : 15,
		marginLeft   : -12
	},
	heading     : {
		fontSize   : 35,
		alignItems : 'center'
	}
});
