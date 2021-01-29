import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Divider, Headline, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
const accounts = {
  usd  : '6384636',
  peso : '4520065'
};

const transactions = [
  {
    name: "Mc Donald's",
    ammount: 400,
    movement: "payment",
    icon: "hamburger",
    account: accounts.peso,
    date: "25/01/20",
    hour: "13:34"
  },
  {
    name: "Zara",
    ammount: 3000,
    movement: "payment",
    icon: "shopping-bag",
    account: accounts.peso,
    date: "22/01/20",
    hour: "17:03",
  },
  {
    name: "Transferencia a Carlos",
    ammount: 860,
    movement: "payment",
    icon: "money-bill-wave",
    account: accounts.usd,
    date: "22/01/20",
    hour: "13:28"
  },
  {
    name: "Burger King",
    ammount: 520,
    movement: "payment",
    icon: "hamburger",
    account: accounts.peso,
    date: "19/01/20",
    hour: "19:34"
  },
  {
    name: "Supermercado Estrella",
    ammount: 3200,
    movement: "payment",
    icon: "shopping-cart",
    account: accounts.peso,
    date: "17/01/20",
    hour: "10:51"
  },
  {
    name: "Carga",
    ammount: 6000,
    movement: "collection",
    icon: "donate",
    account: accounts.peso,
    date: "15/01/20",
    hour: "15:28"
  },
  {
    name: "Bar la tentación",
    ammount: 220,
    movement: "payment",
    icon: "cocktail",
    account: accounts.peso,
    date: "13/01/20",
    hour: "00:28"
  },

];

const TransactionsScreen = () => {

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Headline>Mis transacciones...</Headline>
			</View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {
          transactions.map(transaction => (
            <View style={styles.generalCont1}>
              <View style={styles.cardContainer}>
                <View style={styles.section1}>
                  <Icon name={transaction.icon} size={30} color="#F7F7F9" />
                </View>
                <View style={styles.section2}>
                  <View style={styles.section3}>
                    <Text style={styles.text}>{transaction.name}</Text>
                    <Text style={styles.information}>{`#${transaction.account} | ${transaction.date} - ${transaction.hour}`}</Text>
                  </View>
                  <View style={styles.section4}>
                    <Text style={
                      transaction.movement === "collection" 
                      ? styles.blueNumbers 
                      : styles.redNumbers}
                    >
                      {`${transaction.movement === "collection" ? "+" : "-"}$${transaction.ammount}`}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ))
        }
      </ScrollView>		
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
 		padding: 20,
 		backgroundColor: "#F1F4FF"
  },
  	header: {
		display: "flex",
 		alignItems: "flex-start",
 		width: "100%",
 		marginBottom: 10,
 		fontSize: 35
  },
  cardContainer: {
		display: "flex",
		flexDirection: "row",
		marginTop: 5,
		borderRadius: 10,
		borderWidth: 1,
		width: "100%",
		overflow: "hidden"
	},
  	generalCont1: {
 		display: "flex",
 		flexDirection: "column",
 		justifyContent: "space-around",
 		width: "100%",
 		marginTop: 10,
    marginBottom: 10,
    height: 100
	},
	section1: {
		width: '20%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 7,
		borderRightWidth: 1,
		backgroundColor: '#006A34'
	},
	section2: {
		width: '80%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
		paddingLeft: 10,
		paddingRight: 12,
		backgroundColor: 'rgba(87, 161, 48, 0.8)'
  },
  section3: {
    width: '70%'
  },
  section4: {
    display: 'flex',
    alignItems: 'flex-end',
    width: '30%'
  },
	blueNumbers: {
		color: "#192BC2",
		fontWeight: "100",
		fontSize: 30
  },
	redNumbers: {
		color: "#FF4242",
		fontWeight: "100",
		fontSize: 30
  },
  text: {
		color: "white",
		fontWeight: "300",
		fontSize: 20
  },
  information: {
    display: 'flex',
    color: "#2D3A3A",
    fontSize: 13,
    fontWeight: '300',
    marginTop: 20
  }
});

export default TransactionsScreen;