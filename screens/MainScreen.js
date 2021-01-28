import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Divider, Headline, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Transfer from 'react-native-vector-icons/MaterialCommunityIcons';

const data = {
	name  : 'Valentín',
	lastName : 'Nicheglod',
	income: 3320,
	expenses : 1504,
	dollar: '1.300',
	peso  : '25.000',
	accounts : {
		usd  : '6384636',
		peso : '4520065'
	}
};

//Mi posición consolidada
const MainScreen = () => {
	const { name, income, expenses, dollar, peso, accounts, lastName } = data;

	return (
		<View style={styles.container}>
			<View style={styles.greeting}>
				<Headline>{`Hola, ${name}...`}</Headline>
			</View>
			<View style={styles.balance}>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scroll}>
					{/*Card 1*/}

					<View>
						<ImageBackground
							source={require('../assets/backgroundCard2.jpeg')}
							style={styles.mainCard}
							imageStyle={{ borderRadius: 15 }}>
							<View>
								<Paragraph>Balance actual</Paragraph>
								<Text style={styles.bigText}>{`$ ${peso}`}</Text>
							</View>
							<View style={styles.cardInfo}>
								<Paragraph style={styles.cardText}>{`${name} ${lastName}`}</Paragraph>
								<Paragraph style={styles.cardText}>{`Nº #${accounts.peso} | Pesos`}</Paragraph>
							</View>
						</ImageBackground>
					</View>

					{/*Card 2 */}

					<View>
						<ImageBackground
							source={require('../assets/backgroundCard1.jpeg')}
							style={styles.mainCard}
							imageStyle={{ borderRadius: 15 }}>
							<View>
								<Paragraph>Balance actual</Paragraph>
								<Text style={styles.bigText}>{`US$ ${dollar}`}</Text>
							</View>
							<View style={styles.cardInfo}>
								<Paragraph style={styles.cardText}>{`${name} ${lastName}`}</Paragraph>
								<Paragraph style={styles.cardText}>{`Nº #${accounts.usd} | Dólares`}</Paragraph>
							</View>
						</ImageBackground>
					</View>
				</ScrollView>
			</View>

			{/* General */}

			<View style={styles.general}>
				<Headline>General...</Headline>
				<View style={styles.generalCont1}>
					{/* Ingresos */}

					<View style={styles.generalSection}>
						<View style={styles.cardCont}>
							<View style={styles.generalSection1}>
								<Icon name="plus" size={30} color="#F7F7F9" />
							</View>
							<View style={styles.generalSection2}>
								<Paragraph style={styles.white}>Ingresos</Paragraph>
								<Headline style={styles.numbers}>{`$${income}`}</Headline>
							</View>
						</View>
					</View>

					{/* Gastos */}

					<View style={styles.generalSection}>
						<View style={styles.cardCont}>
							<View style={styles.generalSection1}>
								<Icon name="minus" size={30} color="#F7F7F9" />
							</View>
							<View style={styles.generalSection2}>
								<Paragraph style={styles.white}>Gastos</Paragraph>
								<Headline style={styles.numbers}>{`$${expenses}`}</Headline>
							</View>
						</View>
					</View>
				</View>
			</View>
			<Divider />

			{/* Period */}

			<View style={styles.generalCont1}>
				<Button mode="text">3 D</Button>
				<Button mode="text">1 S</Button>
				<Button mode="text">2 S</Button>
				<Button mode="text">1 M</Button>
				<Button mode="text">3 M</Button>
				<Button mode="text">6 M</Button>
			</View>
			<Divider />

			<View style={styles.generalCont2}>
				<View style={styles.center}>
					<Button style={styles.iconButtons}>
						<Icon name="donate" size={30} color="#fff" />
					</Button>
					<Paragraph style={styles.buttonDesc}>Cargar</Paragraph>
				</View>
				<View style={styles.center}>
					<Button style={styles.iconButtons}>
						<Icon name="exchange-alt" size={30} color="#fff" />
					</Button>
					<Paragraph style={styles.buttonDesc}>Cambiar</Paragraph>
				</View>
				<View style={styles.center}>
					<Button style={styles.iconButtons}>
						<Transfer name="send" size={30} color="#fff" />
					</Button>
					<Paragraph style={styles.buttonDesc}>Enviar</Paragraph>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
 		padding: 20,
 		backgroundColor: "#F1F4FF"
  	},
 	mainCard: {
 		width: 310,
 		height: 190,
 		padding: 10,
 		borderRadius: 20,
 		marginTop: 10,
 		marginBottom: 10,
 		marginRight: 10
  	},
  	cards: {
 		borderRadius: 20
  	},
  	greeting: {
		display: "flex",
 		alignItems: "flex-start",
 		width: "100%",
 		marginBottom: 10,
 		fontSize: 35
  	},
  	white: {
 		color: "white"
  	},
  	generalCont1: {
 		display: "flex",
 		flexDirection: "row",
 		justifyContent: "space-around",
 		width: "100%",
 		marginTop: 5,
 		marginBottom: 5,
	},
	generalCont2: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		width: "100%",
		marginTop: 5,
		marginBottom: 5,
	 },
  	cardInfo: {
		marginTop: 15,
		marginLeft: 15
  	},
  	scroll: {
		height: 200,
		width: "100%"
  	},
  	general: {
		marginTop: 10,
		marginBottom: 15
  	},
  	cardCont: {
		display: "flex",
		flexDirection: "row",
		marginTop: 5,
		borderRadius: 10,
		borderWidth: 1,
		width: "100%",
		overflow: "hidden"
	},
	center: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column'
	},
	balance: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		marginBottom: 5
	},
	smallParagraph: {
		fontWeight: "400"
	},
	bigText: {
		fontSize: 40,
		paddingTop: 15,
		marginLeft: 15,
		marginBottom: 5,
		color: '#F7F7F9',
		fontWeight: '400',
		letterSpacing: 2
	},
	iconButtons: {
		backgroundColor: '#006A34',
		marginBottom: 12,
		borderRadius: 20,
		marginTop: 25
	},
	buttonDesc: {
		fontWeight: '700'
	},
	paragraph: {
		marginTop: 5,
		fontSize: 20,
		color: '#fff',
		fontWeight: '600'
	},
	cardText: {
		fontSize: 17,
		color: '#F7F7F9',
		letterSpacing: 1,
		fontWeight: '300'
	},
	generalSection: {
		display: 'flex',
		alignItems: 'center',
		width: '48%'
	},
	generalSection1: {
		width: '25%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 7,
		borderRightWidth: 1,
		backgroundColor: '#006A34'
	},
	generalSection2: {
		width: '75%',
		display: 'flex',
		justifyContent: 'center',
		paddingLeft: 10,
		paddingRight: 12,
		backgroundColor: '#57A130'
	},
	numbers: {
		color: "white",
		fontWeight: "300",
		fontSize: 20
	}
});

export default MainScreen;