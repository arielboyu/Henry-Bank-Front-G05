import React from 'react'
import {View,Text,Button,StyleSheet} from 'react-native'




export default function HomeScreen({navigation}) {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Text>Este es el Home</Text>
    <View style={{marginTop:30}} >
    <Button
      title='Iniciar Sesión'
      onPress={() => navigation.navigate('LoginScreen')}
    ></Button>
        <Button
      title='Main'
      onPress={() => navigation.navigate('MainScreen')}
    ></Button>
    </View>
    </View>
  );
}
