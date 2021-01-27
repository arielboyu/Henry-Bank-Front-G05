import React from 'react'
import { StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableOpacity,
    Image,
   } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import logo from '../assets/logo.png'


// import VerifyScrenn from './screens/VerifyScrenn'
// <Stack.Screen
//   name="VerifyScrenn"
//   component={VerifyScrenn}
//   options={{title:'Verificar su e-mail'}}
// />



export default function VerifyScrenn({navigation}) {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
    <Image
      style={{height:60,width:60,alignSelf:'center'}}
      source={logo}
    />
    <Text style={styles.text_header} >Tree</Text>
    </View>
    <View style={styles.footer}>
    <Text style={styles.text_footer} >Ingresar Código de Verificación</Text>
    <View style={styles.action}>
    <FontAwesome
      name='lock'
      color='#05375a'
      size={20}
      paddingLeft={10}
      />
   <TextInput
   placeholder='ingrese su código '
   style={styles.text_input}
   autoCapitalize='none'
   />
   </View>
   <View style={styles.button}>
   <TouchableOpacity onPress={()=>{onSubmit(data),navigation.navigate('VerifyScrenn')}}
    style={[styles.singIn], {marginTop:50,backgroundColor: 'green',borderRadius:40,paddingVertical:10,paddingHorizontal:14}}
    onPress={() => navigation.navigate('DischargeScreen')}
   >
    <Text style={[styles.textSing],{color:'black'}} >Confirmar</Text>
   </TouchableOpacity>
   </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',

  },
  header: {
    flex:1,
    justifyContent:'flex-end',
    paddingHorizontal:20,
    paddingBottom:50,
    alignItems:'center',

  },
  footer: {
    flex:3,
    backgroundColor:'#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal:20,
    paddingVertical:30,
  },
  text_header: {
    color:'white',
    fontWeight:'bold',
    fontSize: 30,

  },

  text_footer: {
    color:'#05375a',
    fontSize:18
  },
  action:{
    flexDirection:'row',
    marginTop:10,
    borderBottomWidth:1,
    borderBottomColor:'#f2f2f2',
    paddingBottom:5,

  },
  text_input: {
    flex:1,
    paddingLeft:15,
    color:'black'
  },
  button: {
    alignItems:'center',
    marginTop:50
  },
})
