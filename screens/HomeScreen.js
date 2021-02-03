import React from 'react'
import {View,Text,Button,StyleSheet, Image} from 'react-native'




export default function HomeScreen({navigation}) {
  return (
    <View style={{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#76FF03',
      }}>
      <Image
        source= {require("../assets/logo.png")}
      />
    {/* <Text>Este es el Home</Text> */}
    <View style={{marginTop:30}} >
    <Button
      title='Iniciar Sesión'
      onPress={() => navigation.navigate('LoginScreen')}
    ></Button>
    </View>
    </View>
  );
}
