import React, { useEffect } from 'react'
import { StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ImageBackground
   } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useDispatch } from 'react-redux'
import logo from '../assets/logo.png'
import { getUsers } from '../src/redux/actions/user'
import { TextInput, Button, } from 'react-native-paper'



export default function VerifyScrenn({navigation}) {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  });


  return (
    <View style={styles.container}>
    <ImageBackground
    style={{width:20,height:20}}
    source={
      {uri:
      "https://resource.lendingpoint.com/wp-content/uploads/2018/05/money-growing-1.jpg"}}
     style={{width:'100%', height: '100%'}}>
    <View style={styles.input}>
    <View style={styles.icon_code}>
    <FontAwesome
     name='lock'
     color='#edfff8'
     size={28}
    />
    </View>
    <View style={styles.input_code}>
    <TextInput
    label="Ingresar Código"
    style={{height:30}}
    selectionColor="white"
    style={{height:45,backgroundColor:'transparent'}}
    />
    </View>
    </View>
    <View style={{position:'relative',
    top:220,
    left:16,
    width:330,
    paddingHorizontal:100
    }}>
      <Button
       mode="contained"
       onPress={()=> {navigation.navigate('DischargeScreen')}}
       style={{
        backgroundColor:'#57A130',
        opacity:0.6,
     }}>
     CONFIRMAR</Button>
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
  backgroundColor: '#F1F4FF',
},

icon_code: {
  position:'relative',
  top:235,
  left:80,
},
input_code: {
  position:'relative',
  top:200,
  left:110,
  backgroundColor: '#ffda40',
  opacity:0.5,
  borderRadius:60,
  width:160,
  height:40
},
logo: {
  flex:1,
  justifyContent:'flex-end',
  paddingHorizontal:24,
  paddingTop:50,
  position:'relative',
  top:-410,
  left:100,

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
  backgroundColor: 'black',
  borderRadius:10
},
});
