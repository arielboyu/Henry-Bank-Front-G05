import React from 'react';
import { ImageBackground,Image, StyleSheet, Text, View } from 'react-native';
import { Divider, Headline, Paragraph,TextInput, Button, } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import logo from '../assets/logo.png'
import Transfer from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CvuScreen({changeScreen}) {
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
    <Headline>CVU</Headline>
    </View>
    <View style={styles.logo}>
    <ImageBackground
    style={{width:46,height:46}}
    source={require('../assets/LogoVector.png')}
    >
    </ImageBackground>
    </View>
    <View style={styles.card}>
    <ImageBackground
    style={{width:380,height:220}}
    source={require('../assets/backgroundCard1.jpeg')}
    >
    </ImageBackground>
    </View>
			<View style={{alignItems:'center',
      width:300,
      position:'relative',
      top:-146,
      left:35,
      height:36,
      }}>
			<Headline style={{color:'white'}}>CVU: 000000543290784315763</Headline>
		  </View>
      <View style={{alignItems:'center',
      width:300,
      position:'relative',
      top:-106,
      left:-75,
      height:36,
      }}>
      <Headline style={{color:'white'}}>Valentín</Headline>
      </View>
      <View style={{position:'relative',
      top:50
      }}>
      <View style={{position:'relative',
      top:60,
      }}>
      <View style={{
      position: 'relative',
      top:-80}} >
      <Divider/>
      <Divider/>
      </View>
      </View>
      </View>
      <View style={styles.botonAsociar}>
      <View>
      <Button style={styles.iconButtons}>
      <Transfer name="plus-circle" size={30} color="#fff" />
      </Button>
      <Paragraph style={{fontWeight: '700'}}>Asociar</Paragraph>
      </View>
      </View>
			<View style={styles.botonCompartir}>
			<View>
			<Button style={styles.iconButtons}>
			<Transfer name="share" size={30} color="#fff" />
			</Button>
			<Paragraph style={{fontWeight: '700'}}>Compartir</Paragraph>
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
   marginTop:-60,
},
card: {
   alignItems:'center',
   marginTop:30,
},
botonAsociar: {
   alignItems:'center',
   marginTop:45,
   marginLeft:-200
},
botonCompartir: {
   alignItems:'center',
   marginTop:-105,
   marginLeft:160
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
