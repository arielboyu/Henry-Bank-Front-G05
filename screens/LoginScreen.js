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

export default function Login({ navigation }) {
	const dispatch = useDispatch();
	useEffect(() => {
  dispatch(getUsers());
	});

export default function Login({navigation}) {
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
      label="ingresa e-mail"
      onChangeText={text => textInputChange(text)}
      selectionColor="black"
      style={{height:48,
        paddingLeft:5,
        width:210,
        position: 'relative',
        left:100,
        top:30

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
        left:100,
        top:-90}}
      />
      </View>
      <View style={{
      position: 'relative',
      top:-50}} >
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
     width:150,
		 position:'relative',
		 top:100
   }}>
   INICIAR SESIóN</Button>
  </View>
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
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#F1F4FF"
  },

icon_email: {
  position:'relative',
  top:65,
  left:60,
},
icon_pw: {
  position:'relative',
  top:-55,
  left:62,
},
register: {
position:'relative',
top:120,
left:125,
marginLeft:10,
width:150
},
  logo: {
     alignItems:'center',
     marginTop:30,
  },
  boton: {
     alignItems:'center',
     marginTop:5,
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
