import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Headline, Paragraph,TextInput, Button, } from 'react-native-paper';
import { ButtonGroup } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function ChangeMoney ({changeScreen}) {

    const [selected, setSelected] = useState(0)

    const updateSelected = (selected) => {
        setSelected(selected);
    }

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
            <Headline>Cambiar Dinero</Headline>
        </View>
        <View style={styles.logo}>
            <ImageBackground
                style={{width:160,height:160}}
                source={require('../assets/LogoVector.png')}
            />
        </View>
        <View style={styles.mainCont}>
            <TextInput
                label="Monto a cambiar"
                placeholder={`Ingrese monto en ${selected === 0 ? "Pesos" : "Dolares"}`}
                keyboardType="numeric" 
                mode="outlined"
                selectionColor="black"
                style={{height: 40}}
            />
            <ButtonGroup
                onPress={updateSelected}
                selectedIndex={selected}
                buttons={["Pesos a Dolares", "Dolares a Pesos"]}
                containerStyle={{height: 40, width: 222}}
                selectedButtonStyle={{backgroundColor: '#006A34'}}
            />
        </View>
        <View style={styles.boton}>
            <Button style={styles.iconButtons}>
                <Icon 
                    name="exchange-alt" 
                    size={30} 
                    color="#fff" 
                />
            </Button>
            <Paragraph style={{fontWeight: '700'}}>Cambiar</Paragraph>
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
    mainCont: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    boton: {
        display: 'flex',
        alignItems:'center',
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
    }
});
