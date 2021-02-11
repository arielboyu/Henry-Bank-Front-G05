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

	function handlePasswordChange(val) {
	  if (/^[a-zA-Z0-9]{8,20}$/i.test(val)){
			setData({
					...data,
					password: val,
					isValidPassword: true
			});
	  } else {
			setData({
					...data,
					password: val,
					isValidPassword: false
			});
	  }
	}


			function textInputChange(val) {
			  if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i.test(val)){
					setData({
							...data,
							email: val,
							check_textInputChange: true,
							isValidUser: true
					});
			  } else {
					setData({
							...data,
							email: val,
							check_textInputChange: false,
							isValidUser: false
					});
			  }
			}


	const updateSecureTextEntry = () => {
			setData({
					...data,
					secureTextEntry: !data.secureTextEntry
			});
	}

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
		<ImageBackground style={{ width: 140, height: 140 }}
		source={require('../assets/LogoVector.png')} />
		</View>
		<View style={styles.action}>
		<FontAwesome
		 name="user-o"
		 size={28}
		 style={{marginRight:5,marginTop:5}}
		 />
		 <TextInput
		 placeholder="Correo Electrónico"
		 autoCapitalize="none"
		 onChangeText={(val) => textInputChange(val)}
		 // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
		 style={{
		 height:48,
		 paddingLeft:5,
		 width:210,
		 }}
		 />
		 {data.check_textInputChange ?
		 <Animatable.View animation="bounceIn">
		 <Feather
		 name="check-circle"
		 color="green"
		 size={20}
		 style={{marginTop:15}}
		 />
		 </Animatable.View>
		 : null}
		 </View>
		 { data.isValidUser ? null :
		 <Animatable.View animation="fadeInLeft" duration={500}>
		 <Text style={styles.errorMsg}>Ingresar e-mail</Text>
		 </Animatable.View>
		 }
		 <View style={styles.action}>
		 <Feather
		 name="lock"
		 size={28}
		 style={{marginRight:5,marginTop:5}}
		 />
		 <TextInput
		 placeholder="Contraseña"
		 secureTextEntry={data.secureTextEntry ? true : false}
		 autoCapitalize="none"
		 onChangeText={(val) => handlePasswordChange(val)}
		 style={{
		 height:48,
		 paddingLeft:5,
		 width:210,
		 }}
		 />
		 <TouchableOpacity
		 onPress={updateSecureTextEntry}
		 >
		 {data.secureTextEntry ?
		 <Feather
		 name="eye-off"
		 color="grey"
		 size={20}
		 style={{marginTop:15}}
		 />
		 :
		 <Feather
		 name="eye"
		 color="grey"
		 size={20}
		 style={{marginTop:15}}
		 />
		 }
		 </TouchableOpacity>
		 </View>
		 <View
		 style={{marginTop:60
		 }}>
		 <Divider />
		 <Divider />
		 <View style={styles.botones}>
		 <View style={styles.boton}>
		 <Button
		 mode="contained"
		 onPress={handleLogin}
		 style={{
		 backgroundColor : '#006A34',
		 }}>
		 INICIAR SESIóN
		 </Button>
		 </View>
		 </View>
		 { storageUser ? true :
			 <Button
			 mode="contained"
			 onPress={()=>{}}
			 style={{
				 borderRadius:5,
				 marginTop: 25,
				 marginLeft:130,
				 width: 150,
			 backgroundColor : '#006A34',
			 }}>
			 Usar Huella
			 </Button>
		 }
	 </View>
	</View>
	);
};


const styles = StyleSheet.create({
container: {
	backgroundColor:'#FFF',
	height:'100%'
},
boton: {
	alignItems: 'center',
	marginTop:50,
	marginLeft:10
},
iconButtons: {
	marginBottom: 10,
	borderRadius: 20,
	marginTop: 25,
	width: 15,
	marginLeft: -12
},
logo: {
	alignItems:'center',
	marginTop:30
},
	action: {
			flexDirection:'row',
			marginTop:20,
			marginLeft:60,
			paddingBottom:5
	},
	errorMsg: {
			color: '#FF0000',
			fontSize: 14,
			marginLeft:100
	},
});
