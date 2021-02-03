import React from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import { Headline } from 'react-native-paper';

const ProductsScreen = () => {

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Headline>Mis productos...</Headline>
			</View>
      <View style={{height: '100%'}}>
        <View style={[styles.btnCard, styles.darkGreen]}>
          <Text style={styles.cardText}>
            Mis tarjetas
          </Text>
          <ImageBackground
            style={styles.images}
            source={require('../assets/myCards.png')}
          />
        </View>
        <View style={[styles.btnCard, styles.lightGreen]}>
          <Text style={styles.cardText}>
            Mis cuentas
          </Text>
          <ImageBackground
            style={styles.images}
            source={require('../assets/MyAccounts.png')}
          />
        </View>
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
    height: '42%',
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
