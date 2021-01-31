import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet,
   Text,
    View,
    Platform,
    TouchableOpacity,
    Image,
    ImageBackground
   } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import logo from '../assets/logo.png'
import * as Animatable from 'react-native-animatable'
import { createNewUser, getUsers } from '../src/redux/actions/user'
import { TextInput, Button, } from 'react-native-paper';

export default function Register({navigation}) {

  const [data,setData] = useState({
    email:'',
    password:'',
    check_TextImputChange:false,
    secureTextEntry:true,
    isValidUser: true,
    isValidPassword: true,
  })

  const textInputChange = (val) => {
      if(val.length != 0){
        setData({
          ...data,
          email:val,
          check_TextImputChange:true
        })
      } else {
        setData({
          ...data,
          email:val,
          check_TextImputChange:false
        })
      }
  }

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password:val
    })
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    })
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  });


  const onSubmit = (user) => {
    dispatch(createNewUser(user));

  };

  return (
    <View style={styles.container}>
    <ImageBackground
    style={{width:20,height:20}}
    source={
      {uri:
      "https://media.metrolatam.com/2018/02/16/appsveinteac3b1era660x650-1200x800.jpg"}}
     style={{width:'115%', height: '100%'}}>
    <View >
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
    <View style={styles.icon_pw1}>
    <FontAwesome
       name='lock'
       color='#edfff8'
       size={30}
    />
    </View>
    <View style={styles.input_email}>
    <TextInput
    label="email"
    selectionColor="white"
    style={{height:45,backgroundColor:'transparent',color:'white'}}
    />
    </View>
    <View style={styles.input_password}>
    <TextInput
    label="password"
    selectionColor="white"
    style={{height:45,backgroundColor:'transparent'}}
    />
    </View>
    <View style={styles.input_password1}>
    <TextInput
    label="password"
    selectionColor="white"
    style={{height:45,backgroundColor:'transparent'}}
    />
    </View>
    </View>
    <View style={{position:'relative',
    top:160,
    left:10,
    width:340,
    paddingHorizontal:100
    }}>
      <Button
       mode="contained"
       onPress={()=>{onSubmit(data),navigation.navigate('VerifyScrenn')}}
       style={{
        backgroundColor:'#57A130',
        opacity:0.6,
     }}>
     Registrarse</Button>
    </View>
    <View style={styles.logo}>
    <Image
      style={styles.image}
      source={logo}
    />
    <Text style={styles.text_tree} > Tree</Text>
    </View>
    </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
container: {
  flex: 1,

},

icon_email: {
  position:'relative',
  top:190,
  left:20,
},
icon_pw: {
  position:'relative',
  top:225,
  left:22,
},
icon_pw1: {
  position:'relative',
  top:255,
  left:22,
},
input_email: {
  position:'relative',
  top:100,
  left:60,
  backgroundColor: '#fa6a94',
  opacity:0.6,
  borderRadius:60,
  width:250,
  height:40
},

input_password: {
  position:'relative',
  top:120,
  left:60,
  backgroundColor: '#fa6a94',
  opacity:0.6,
  borderRadius:100,
  width:250,
  height:40

},
input_password1: {
  position:'relative',
  top:140,
  left:60,
  backgroundColor: '#fa6a94',
  opacity:0.6,
  borderRadius:100,
  width:250,
  height:40

},
logo: {
  flex:1,
  justifyContent:'flex-end',
  paddingHorizontal:24,
  paddingTop:50,
  position:'relative',
  top:-400,
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
