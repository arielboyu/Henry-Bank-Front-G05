import React from 'react'
import {View,Text,Button,StyleSheet, Image, StatusBar, TouchableOpacity} from 'react-native'
import  * as Animatable  from 'react-native-animatable'


export default function HomeScreen({navigation}) {
  return (
    <View style={style.container}>
      <StatusBar backgroundColor='green' barStyle="light-content"/>
      <View style={style.header}>
        <Animatable.Image 
          animation="bounceIn"
          duration={2000}
          source = {require('../assets/logo.png')}
          style = {style.logo}
          resizeMode="stretch"
        />
      </View> 
      
      <Animatable.View
        style={[style.footer, {
          backgroundColor: "#F3FF6F"
      }]}
      animation="fadeInUpBig"
      >

      <Text
        style={style.title}
      >Bienvenido a...
      </Text>
      <Text style={style.text}>TreeBank</Text>
      
      
      <View style={style.button} >
        <TouchableOpacity 
          onPress={() => navigation.navigate('LoginScreen')}
          // color={'#08d4c4', '#01ab9d'}
          style={style.signIn}
          >
          <Text style={style.textSign}>Iniciar</Text> 
        </TouchableOpacity>
      </View>
      </Animatable.View>
    </View>
  );
}


const style = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#F1F3F2'
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
  width: 300,
  height: 300
},
title: {
    color: '#015C1A',
    fontSize: 20,
    fontWeight: 'bold'
},
text: {
    color: '#01890B',
    marginTop:5,
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center'
    
},
button: {
    alignItems: 'flex-end',
    marginTop: 30,
    color:'green'
},
signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    backgroundColor: '#01890B',
    
},
textSign: {
    color: 'black',
    fontWeight: 'bold',
    color:'#F3FF6F'
}
});