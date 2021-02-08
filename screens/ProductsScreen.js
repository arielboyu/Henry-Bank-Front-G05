import React from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Headline } from 'react-native-paper';
import Header from '../src/components/Header';

const ProductsScreen = () => {

	return (
		<View style={styles.container}>
			<Header title="Mis productos..."/>
      <View style={styles.container2}>
        <TouchableOpacity style={[styles.btnCard, styles.darkGreen]}>
          <Text style={styles.cardText}>
            Mis tarjetas
          </Text>
          <ImageBackground
            style={styles.images}
            source={require('../assets/MyCards.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnCard, styles.lightGreen]}>
          <Text style={styles.cardText}>
            Mis cuentas
          </Text>
          <ImageBackground
            style={styles.images}
            source={require('../assets/MyAccounts.png')}
          />
        </TouchableOpacity>
      </View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
 		padding: 20,
 		backgroundColor: "#FFFF"
  },
  container2: {
    height: '90%',
    justifyContent: 'space-evenly'
  },
  header: {
		display: "flex",
 		alignItems: "flex-start",
 		width: "100%",
    marginBottom: 10,
    marginTop: 10,
 		fontSize: 35
  },
  btnCard: {
    width: '100%',
    height: '100%',
    padding: 20,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.50,
    shadowRadius: 10,
    elevation: 15,
  },
  cardText: {
     fontWeight: '500',
     fontSize: 25,
     color: '#ffbf34'
  },
  images: {
    width: 201,
    height: 136,
    position: 'relative',
    bottom: -40,
    right: -95
  },
  lightGreen: {
    backgroundColor: '#5DB11F'
  },
  darkGreen: {
    backgroundColor: '#097934'
  }
});

export default ProductsScreen;
