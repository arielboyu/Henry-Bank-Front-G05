import React from 'react';
import { ImageBackground,Image, StyleSheet, Text, View } from 'react-native';
import { Button, Divider, Headline, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import logo from '../assets/logo.png'


export default function ChargeMoney() {
	return (
    <View style={styles.container}>
    <View style={styles.heading}>
        <Headline>Cargar Dinero</Headline>
      </View>
    <View style={styles.logo}>
    <ImageBackground
    style={{width:160,height:160}}
    source={require('../assets/LogoVector.png')}
    >
    </ImageBackground>
    </View>
			<View>
			<Text style={{width:120,position:'relative',top:5,left:120}} >Puedes usar este código para cargar dinero a tu cuenta</Text>
			</View>
			<View style={{alignItems:'center',
      backgroundColor:'#006A34',
      width:150,
      position:'relative',
      top:20,
      left:100,
      height:36,
      }}>
      <Divider/>
      <Divider/>
			<Headline style={{color:'white'}}>88333 44526</Headline>
			</View>
			<View style={{position:'relative',top:50,left:20}} >
      <ImageBackground
      style={{width:30,height:30,position:'relative',left:135,top:-20}}
      source={require('../assets/pagofacil.png')}
      >
      </ImageBackground>
      <ImageBackground
      style={{width:120,height:30,position:'relative',left:90,top:-20}}
      source={require('../assets/rapi.png')}
      >
      </ImageBackground>
			<Text style={{width:150,position:'relative',left:90,top:-20}} >Para cargar presenta este Código al cajero </Text>
			</View>
      <View style={{position:'relative',top:50}} >
			<Divider/>
			<Divider/>
      </View>
			<View style={styles.boton}>
				<View >
					<Button style={styles.iconButtons}>
						<Icon name="donate" size={30} color="#fff" />
					</Button>
					<Paragraph style={{fontWeight: '700'}}>Confirmar Recarga</Paragraph>
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
logo: {
   alignItems:'center',
   marginTop:30,
},
boton: {
   alignItems:'center',
   marginTop:40,
},
iconButtons: {
  backgroundColor: '#006A34',
  marginBottom: 10,
  borderRadius: 20,
  marginTop: 25,
  width:15,
  marginLeft:25
},
  	heading: {
 		fontSize: 35,
    position:'relative',
    top:20,
    left:-100,
    alignItems:'center'
  	},
});
