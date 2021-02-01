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
import { TextInput, Button, } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
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
  <ImageBackground
  style={{width:20,height:20}}
  source={
    {uri:
    "https://soytecno.com/wp-content/uploads/2016/10/using-touchscreen.jpg"}}
   style={{width:'100%', height: '100%'}}>
  <View style={styles.input}>
  <View style={styles.icon_email}>
  <FontAwesome
   name='user-o'
   color='#edfff8'
   size={28}
  />
  </View>
  <View style={styles.icon_pw}>
  <FontAwesome
     name='lock'
     color='#edfff8'
     size={30}
  />
  </View>
  <View style={styles.input_email}>
  <TextInput
  textColor="black"
  label="email"
  style={{height:45,backgroundColor:'transparent',paddingLeft:5,flex:1}}
  selectionColor="white"
  />
  </View>
  <View style={styles.input_password}>
  <TextInput
  label="password"
  selectionColor="white"
  style={{height:45,backgroundColor:'transparent',paddingLeft : 5,flex:1}}
  />
  </View>
  </View>
  <View style={{position:'relative',
  top:210,
  paddingHorizontal:100
  }}>
    <Button
     mode="contained"
     onPress={handleLogin}
     style={{
      backgroundColor:'#57A130',
      opacity:0.6,
   }}>
   Ingresar</Button>
  </View>
  <View style={{marginTop:12}}>
   <Text style={{fontSize:12,
     position:'relative',
     top:125,color:'blue',
     alignSelf:'center',
     backgroundColor: '#7fffd4',
     opacity:0.4,
     borderRadius:100,}}
  >Olvidó su Contraseña?</Text>
  </View>
  <View style={styles.logo}>
  <Image
    style={styles.image}
    source={logo}
  />
  <Text style={styles.text_tree} > Tree</Text>
     </View>
     <View style={styles.register} >
     <Button
      mode="outlined"
      style={{
      backgroundColor:'#57A130',
      opacity:0.6,
      }}
      color='#f8f8ff'
      onPress={()=>{navigation.navigate('RegisterScreen')}}
      >
      Crear Cuenta</Button>
      </View>
  </ImageBackground>
  </View>
  )
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#F1F4FF',
},

icon_email: {
  position:'relative',
  top:205,
  left:40,
},
icon_pw: {
  position:'relative',
  top:250,
  left:42,
},
input_email: {
  position:'relative',
  top:140,
  left:90,
  backgroundColor: '#dffff4',
  opacity:0.7,
  borderRadius:60,
  width:200,
  height:50,
  color: 'white'
},

input_password: {
  position:'relative',
  top:160,
  left:90,
  backgroundColor: '#e0ffff',
  opacity:0.7,
  borderRadius:100,
  width:200,
  height:50

},
logo: {
  flex:1,
  justifyContent:'flex-end',
  paddingHorizontal:24,
  paddingTop:50,
  position:'relative',
  top:-370,
  left:100,

},
register: {
  position:'relative',
  top:-110,
  left:-5,
  marginLeft:10,
  paddingHorizontal:94,
},
text_bank: {
  color:'black',
  borderRadius:10,
  fontSize: 35,
  paddingBottom:2,
  backgroundColor: '#E4DC65',
  width:100


},
text_tree: {
  color:'black',
  borderRadius:10,
  marginBottom:5,
  marginTop:-10,
  fontSize: 35,
  paddingBottom:2,
  backgroundColor: '#E4DC65',
  width:90,
},
image: {
  marginLeft:10,
  marginBottom:15,
  height:65,
  width:65,
  backgroundColor: '#F1F4FF',
  borderRadius:10
},
});




// #F1F4FF
// #006A34 verde oscuro
// #57A130  claro
// #E4DC65  amarillo
//https://i.blogs.es/84e437/viajar-movil/1366_2000.jpg
// monedas https://resource.lendingpoint.com/wp-content/uploads/2018/05/money-growing-1.jpg
// cafe https://media.metrolatam.com/2018/02/16/appsveinteac3b1era660x650-1200x800.jpg"
