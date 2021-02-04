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
import { Divider, Headline, Paragraph,TextInput, Button, } from 'react-native-paper';
import { login } from '../src/redux/actions/user';


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
    <View style={styles.heading}>
    <Headline>Registrar Datos</Headline>
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
      label="ingresa e-mail"
      onChangeText={text => textInputChange(text)}
      selectionColor="black"
      style={{height:48,
        paddingLeft:5,
        width:210,
        position: 'relative',
        left:110,
        top:-10
      }}/>
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
      <View>
      <TextInput
      label="password"
      onChangeText={text => handlePasswordChange(text)}
      selectionColor="black"
      style={{height:48,
        paddingLeft:5,
        width:210,
        position: 'relative',
        left:110,
        top:-140}}
      />
      </View>
      <View style={styles.icon_pw2}>
      <FontAwesome
      name='lock'
      color='black'
      size={30}
      />
      </View>
      <View >
      <TextInput
      label="confirmar password"
      onChangeText={text => handlePasswordChange(text)}
      selectionColor="black"
      style={{height:48,
        paddingLeft:5,
        width:210,
        position: 'relative',
        left:110,
        top:-155,
      }}/>
      </View>
      <View style={{
      position: 'relative',
      top:-100}} >
      <Divider/>
      <Divider/>
      </View>
      </View>
      </View>
      <View style={styles.boton}>
      <View>
      <Button
     mode="contained"
     onPress={()=>{onSubmit(data),navigation.navigate('VerifyScrenn')}}
     style={{
     backgroundColor: '#006A34',
     width:150
   }}>
   CONFIRMAR</Button>
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

icon_email: {
  position:'relative',
  top:20,
  left:70,
},
icon_pw: {
  position:'relative',
  top:-105,
  left:72,
},
icon_pw2: {
  position:'relative',
  top:-115,
  left:72,
},
  logo: {
     alignItems:'center',
     marginTop:30,
  },
  boton: {
     alignItems:'center',
     marginTop:40,
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
    left:-100,
    alignItems:'center'
  },
});
