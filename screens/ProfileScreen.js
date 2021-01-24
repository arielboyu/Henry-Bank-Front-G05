import React from 'react'
import {View,Text,Button,StyleSheet} from 'react-native'


export default function ProfileScreen({navigation}) {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Text>Mi Perfil</Text>
    <Button
      title='volver a Inicio '
      onPress={() => navigation.navigate('Home')}
    ></Button>
    </View>
  );
}
