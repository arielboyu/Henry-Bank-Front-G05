import React, { useEffect } from 'react'
import {View,Text,Button,StyleSheet, Image, StatusBar, TouchableOpacity} from 'react-native'
import  * as Animatable  from 'react-native-animatable'




export default function HomeScreen({navigation}) {

  useEffect(() => {
    getStoredUser()
  }); 


   // Trae el usuario guardado en asyncStorage, en forma de objeto.
   const getStoredUser = async () => {  
    try {
      const jsonData = await AsyncStorage.getItem('USER')
      //console.log("JSON DATA ", jsonData)
      return jsonData != null ? JSON.parse(jsonData) : null;
     
    } catch(e) {
      // error reading value
    }
  } 

  return (
    <View style={style.container}>
      <StatusBar backgroundColor='green' barStyle="light-content"/>
      <View style={style.header}>
        <Animatable.Image
          animation="bounceIn"
          duration={2000}
          source = {require('../assets/logo-wo-title.png')}
          style = {style.logo}
          resizeMode="stretch"
        />
      </View>

      <Animatable.View
        style={[style.footer, {
          backgroundColor: "rgba(255, 191, 52, 0.3)"
      }]}
      animation="fadeInUpBig"
      >

      <Text
        style={style.title}
      >Bienvenido a...
      </Text>
      <Text style={style.textcontainer}>
      <Text style={style.text1}>Tree</Text>
      <Text style={style.text2}>Bank</Text>
      </Text>

      <View style={style.button} >
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          // color={'#08d4c4', '#01ab9d'}
          style={style.signIn}
          >
          <Text style={style.textSign}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('RegisterScreen')}
          // color={'#08d4c4', '#01ab9d'}
          style={style.signIn2}
          >
          <Text style={style.textSign}>Registrarse</Text>
        </TouchableOpacity>
      </View>
      </Animatable.View>
    </View>
  );
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
},
footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30
},
logo: {
  width: 250,
  height: 250
},
title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
},
textcontainer:{
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    marginTop:'5%',
    marginBottom:'5%'
},
text1: {
    color: '#ecaf06',
    marginTop:5,
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center'

},
text2: {
  color: '#007a2a',
  marginTop:5,
  fontSize: 60,
  fontWeight: 'bold',
  textAlign: 'center'

},
button: {
   flexDirection: 'row',
    marginTop: 20,
    color:'#5db12f',
    display: 'flex',
    justifyContent: 'center'

},
signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#097934',

},
signIn2: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft:10,
    backgroundColor: '#097934',

},
textSign: {
    color: 'black',
    //fontWeight: 'bold',
    color:'#ffffff',
    fontSize:20,

}
});
