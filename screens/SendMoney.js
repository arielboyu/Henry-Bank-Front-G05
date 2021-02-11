import React, {useState} from 'react';
import { ImageBackground,Image, StyleSheet, Text, View,CheckBox, ScrollView } from 'react-native';
import { Divider, Headline, Paragraph,TextInput, Button, } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import logo from '../assets/logo.png'
import Transfer from 'react-native-vector-icons/MaterialCommunityIcons';
import { Picker } from '@react-native-picker/picker';


export default function SendMoney({changeScreen}) {
	const [isSelected, setSelection] = useState(false);

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
	<ScrollView>
    <View style={styles.logo}>
    <ImageBackground
    style={{width:160,height:160}}
    source={require('../assets/LogoVector.png')}
    >
    </ImageBackground>
    </View>
		<View style={styles.action}>
		 <TextInput
		 label="Nombre o e-mail"
		 autoCapitalize="none"
		 mode="outlined"
		 style={{
		 height:40,
		 paddingLeft:5,
		 width:222,
		 }}
		 />
 		 <TextInput
 		 label="Detalle de envio"
		 mode="outlined"
		 placeholder="Opcional"
 		 autoCapitalize="none"
 		 style={{
 		 height:40,
 		 paddingLeft:5,
 		 width:222,
		marginTop: 10
 		 }}
 		 />
 		 </View>
		 <View style={{
		 width: '100%',
		 flex: 1,
		 flexDirection: 'row',
		 justifyContent: 'space-evenly',
		 marginTop: 10
		 }} >
		 <Picker
			 style={{
				 color:'black',
				 width: '35%',
			 }}
			 // selectedValue={data.form.typeID}
			 // onValueChange={(val) => handleChange({ value: val, type: 'typeMoney' })}
			 >
			 <Picker.Item label="Pesos" value="Pesos" />
			 <Picker.Item label="Dolares" value="Dolar" />
		</Picker>
		<TextInput
		 label="Monto"
		 autoCapitalize="none"
		 mode="outlined"
		 keyboardType="decimal-pad"
		 style={{
		 height:40,
		 paddingLeft:5,
		 width:'35%',
		 fontSize:12
		 }}
		 />
		 </View>
		 <View style={styles.checkboxContainer}>
			 <CheckBox
				 value={isSelected}
				 onValueChange={setSelection}
				 style={styles.checkbox}
			 />
			 <Text>Acepto usar la sección amigos sin fin comercial  {isSelected ? "👍" : "👎"}</Text>
		 </View>
		 
		<View>
			<View style={styles.boton}>
				<Button style={styles.iconButtons}>
					<Transfer name="send" size={30} color="#fff" />
				</Button>
				<Paragraph style={{fontWeight: '700'}}>Enviar</Paragraph>
			</View>
		</View>
	 </ScrollView>
  </View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
 		padding: 20,
 		backgroundColor: "#FFFF"
  	},
		action: {
			flex: 1,
			alignItems: 'center',
			marginTop: 20
		},
		monto: {
				flexDirection:'row',
				marginTop:-40,
				marginLeft:190,
				paddingBottom:5
		},
logo: {
   alignItems:'center',
   marginTop:30,
},
boton: {
	display: 'flex',
   alignItems:'center',
   marginTop:15,
   marginLeft:20
},
iconButtons: {
  backgroundColor: '#006A34',
  marginBottom: 10,
  borderRadius: 20,
  width:15,
},
  heading: {
    marginBottom: 10,
    marginTop: 10,
 		fontSize: 35,
		alignItems : 'center',
		display: 'flex',
		flexDirection: 'row'
},
checkboxContainer: {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	marginTop: 20,
	marginBottom: 20
},
boton: {
	display: 'flex',
	alignItems: 'center'
}

});
