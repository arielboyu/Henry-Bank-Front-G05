import React from 'react';
import { ImageBackground,Image, StyleSheet, Text, View } from 'react-native';
import { Divider, Headline, Paragraph,TextInput, Button, } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import logo from '../assets/logo.png'
import Transfer from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SendMoney({changeScreen}) {
	return (
    <View style={styles.container}>
    <View style={styles.heading}>
    <Icon.Button 
						name="arrow-left" 
						size={25}
						color="black"
						backgroundColor="#FFFF"
						onPress={() => changeScreen('main')}
					/>
    <Headline>Enviar Dinero</Headline>
    </View>
    <View style={styles.logo}>
    <ImageBackground
    style={{width:160,height:160}}
    source={require('../assets/LogoVector.png')}
    >
    </ImageBackground>
    </View>
      <View >
      <TextInput
      label="Nombre o e-mail"
      mode="outlined"
      selectionColor="black"
      style={{height:40,
        paddingLeft:5,
        width:210,
        position: 'relative',
        left:80,
        top:20
      }}/>
      </View>
			<View style={{alignItems:'center',
      backgroundColor:'#006A34',
      width:80,
      position:'relative',
      top:36,
      left:145,
      height:36,
      }}>
			<Headline style={{color:'white'}}>$0</Headline>
		  </View>
			<View style={{position:'relative',
      top:50,
      left:20
      }}>
			<Text style={{width:350,
        position:'relative',
        left:10,
        top:70
      }}>
      Acepto usar la sección de amigo solo con fines personales,
      no comerciales </Text>
			</View>
      <View style={{position:'relative',
      top:50
      }}>
      <View style={{position:'relative',
      top:60,
      }}>
      <View style={styles.input_password}>
      <TextInput
      label="Enviar mensaje"
      mode="outlined"
      selectionColor="black"
      style={{height:40,
        paddingLeft:5,
        width:210,
        position: 'relative',
        left:80,
        top:-90}}
      />
      </View>
      <View style={{
      position: 'relative',
      top:-20}} >
      <Divider/>
      <Divider/>
      </View>
      </View>
      </View>
			<View style={styles.boton}>
			<View >
			<Button style={styles.iconButtons}>
			<Transfer name="send" size={30} color="#fff" />
			</Button>
			<Paragraph style={{fontWeight: '700'}}>Enviar</Paragraph>
			</View>
			</View>
  </View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
 		padding: 20,
 		backgroundColor: "#FFFF"
  	},
logo: {
   alignItems:'center',
   marginTop:30,
},
boton: {
   alignItems:'center',
   marginTop:75,
   marginLeft:20
},
iconButtons: {
  backgroundColor: '#006A34',
  marginBottom: 10,
  borderRadius: 20,
  marginTop: 25,
  width:15,
  marginLeft:-12
},
  heading: {
    marginBottom: 10,
    marginTop: 10,
 		fontSize: 35,
		alignItems : 'center',
		display: 'flex',
		flexDirection: 'row'
}
});
