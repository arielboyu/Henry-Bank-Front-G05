import React, { useEffect, useState } from 'react'
import { StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ImageBackground
   } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../assets/logo.png'
import { getUsers, verifyNewUser} from '../src/redux/actions/user'
import { Divider, Headline, Paragraph,TextInput, Button, } from 'react-native-paper';



export default function VerifyScrenn({navigation}) {

  const userId = useSelector(state => state.user.user.id);

  const [data,setData] = useState({
    validationNumber:'',
  })

  const handleCodeChange = (code) => {
    setData({
      ...data,
      validationNumber: code
    })
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  },[]);

  const onSubmit = (code, userId) => {
    dispatch(verifyNewUser(code, userId));

  };

  return (
    <View style={styles.container}>
    <View style={styles.heading}>
    <Headline>Ingresar Código</Headline>
    </View>
    <View style={styles.logo}>
    <ImageBackground
    style={{width:140,height:140}}
    source={require('../assets/LogoVector.png')}
    >
    </ImageBackground>
    </View>
      <View style={{position:'relative',
      top:50
      }}>
      <View style={{position:'relative',
      top:80,
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
      label="ingresar código"
      onChangeText={code => handleCodeChange(code)}
      selectionColor="black"
      style={{height:48,
        paddingLeft:5,
        width:210,
        position: 'relative',
        left:110,
        top:-80}}
      />
      </View>
      <View style={{
      position: 'relative',
      top:-30}} >
      <Divider/>
      <Divider/>
      </View>
      </View>
      </View>
      <View style={styles.boton}>
      <View>
      <Button
     mode="contained"
     onPress={()=>(onSubmit(data, userId), navigation.navigate('DischargeScreen'))}
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
icon_pw: {
  position:'relative',
  top:-45,
  left:62,
},
  logo: {
     alignItems:'center',
     marginTop:30,
  },
  boton: {
     alignItems:'center',
     marginTop:135,
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
