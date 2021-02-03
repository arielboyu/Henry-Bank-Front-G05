import React, {useEffect, useState} from 'react'
import { StyleSheet,
    Text,
    View,
    Platform,
    TouchableOpacity,
    Image,
    ImageBackground
   } from 'react-native'
import logo from '../assets/logo.png'
import { useDispatch } from 'react-redux'
import { getUsers, login } from '../src/redux/actions/user'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Divider, Headline, Paragraph,TextInput, Button, } from 'react-native-paper';
import Transfer from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Login({navigation}) {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);


  const handleLogin = () => {
    if (data.isValidUser && data.isValidPassword) {
      dispatch(login(data))
    };
  };

  return (
    <View style={styles.container}>
    <View style={styles.heading}>
    <Headline>Iniciar Sesión</Headline>
    </View>
    <View style={styles.logo}>
    <ImageBackground
    style={{width:140,height:140}}
    source={require('../assets/LogoVector.png')}
    >
    </ImageBackground>
    </View>
    <View style={styles.icon_email}>
    <FontAwesome
      name='user-o'
      color='black'
      size={28}
      />
      </View>
      <View >
      <TextInput
      label="ingresa nombre o e-mail"
      selectionColor="black"
      style={{height:40,
        paddingLeft:5,
        width:210,
        position: 'relative',
        left:80,
        top:-10
      }}/>
      </View>
      <View style={{marginTop:12}}>
      <Text style={{fontSize:12,
      position:'relative',
      top:65,color:'blue',
      alignSelf:'center',
      borderRadius:100,}}
      >Olvidó su Contraseña?</Text>
      </View>
      <View style={{position:'relative',
      top:50
      }}>
      <View style={{position:'relative',
      top:60,
      }}>
      <View style={styles.icon_pw}>
      <FontAwesome
      name='lock'
      color='black'
      size={30}
      />
      </View>
      <View style={styles.input_password}>
      <TextInput
      label="password"
      selectionColor="black"
      style={{height:40,
        paddingLeft:5,
        width:210,
        position: 'relative',
        left:80,
        top:-140}}
      />
      </View>
      <View style={{
      position: 'relative',
      top:-80}} >
      <Divider/>
      <Divider/>
      </View>
      </View>
      </View>
			<View style={styles.boton}>
			<View>
      <Button
     mode="contained"
     onPress={handleLogin}
     style={{
     backgroundColor: '#006A34',
     width:150
   }}>
   Ingresar</Button>
			</View>
      <View style={styles.register} >
<Button
 mode="outlined"
 style={{
 backgroundColor:'#006A34',
 }}
 color='#f8f8ff'
 onPress={()=>{navigation.navigate('RegisterScreen')}}
 >
 Crear Cuenta</Button>
  </View>
  </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#F1F4FF"
  },
  register: {
  position:'relative',
  top:16,
  left:-5,
  marginLeft:10,
  width:150
},

icon_email: {
  position:'relative',
  top:20,
  left:40,
},
icon_pw: {
  position:'relative',
  top:-105,
  left:42,
},
  logo: {
     alignItems:'center',
     marginTop:30,
  },
  boton: {
     alignItems:'center',
     marginTop:45,
     marginLeft:10
  },
  iconButtons: {
    marginBottom: 10,
    borderRadius: 20,
    marginTop: 25,
    width:15,
    marginLeft:-12
  },
    heading: {
   	fontSize: 35,
    position:'relative',
    top:20,
    left:-90,
    alignItems:'center'
  },
});
