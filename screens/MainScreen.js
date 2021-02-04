import React, { useEffect, useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View, Picker } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { Button, Divider, Headline, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Transfer from 'react-native-vector-icons/MaterialCommunityIcons';
//import Picker from '@react-native-community/picker'
import { getUserByID } from '../src/redux/actions/user'

import SendMoney from './SendMoney';
import ChargeMoney from './ChargeMoneyScreen';

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
const MainScreen = ({changeScreen}) => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.user);

	//const [screen, changeScreen] = useState("main")

	useEffect(() => {
		dispatch(getUserByID(user.user.id));
	}, [])

	const { income, expenses, dollar, peso, accounts } = data;
	const { firstName, lastName } = user.user;

/* 	const logout = () => {
		localStorage.setItem("logged", "false");
		localStorage.removeItem("id");
		location.reload();
	}; */

	return (
		<View style={styles.container}>
 			{/* firstName &&*/ <>
					<View style={styles.greeting}>
						<Headline>{`Hola, ${firstName}...`}</Headline>
						{/* <Button onPress={logout}>Cerrar</Button> */}
					</View>
					<View style={styles.balance}>
						<ScrollView 
							horizontal={true} 
							showsHorizontalScrollIndicator={false} 
							style={styles.scroll}
						>
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
										<Paragraph style={styles.cardText}>{`${firstName} ${lastName}`}</Paragraph>
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
										<Paragraph style={styles.cardText}>{`${firstName} ${lastName}`}</Paragraph>
										<Paragraph style={styles.cardText}>{`Nº #${accounts.usd} | Dólares`}</Paragraph>
									</View>
								</ImageBackground>
							</View>
						</ScrollView>
					</View>

					{/* General */}

					<View style={styles.general}>
						{/* <Headline>General...</Headline> */}
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
					<View style={styles.center}>
						<Text>CUENTA</Text>
					</View>
					<View style={styles.generalCont1}>
						
							<Button mode="text">{`#${accounts.peso} (Pesos)`}</Button>
							<Button mode="text">{`#${accounts.usd} (Dólares)`}</Button>
					</View>

					{/* Period */}
					<View style={styles.center}>
						<Text>PERIODO</Text>
					</View>
					<View style={styles.generalCont1}>

{/* 						<View style={styles.selectorsCont2}>
							<Text>PERíODO</Text>
							<Picker
								//selectedValue={selectedValue}
								style={{ height: 30, width: 150 }}
								//onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
							>	
								<Picker.Item label="1 Día" value="1d" />
								<Picker.Item label="3 Días" value="3d" />
								<Picker.Item label="1 Semana" value="1s" />
								<Picker.Item label="1 Mes" value="1m" />
								<Picker.Item label="3 Meses" value="3m" />
								<Picker.Item label="6 Meses" value="6m" />
								<Picker.Item label="1 Año" value="1a" />
     	 					</Picker>
						</View>
						<View style={styles.selectorsCont2}>
							<Text>CUENTA</Text>
							<Picker
								//selectedValue={selectedValue}
								style={{ height: 30, width: 150 }}
								//onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
							>	
								<Picker.Item label={`#${accounts.peso} (Pesos)`} value="java" />
								<Picker.Item label={`#${accounts.usd} (Dólares)`} value="js" />
     	 					</Picker>
						</View> */}
						<Button mode="text">3 D</Button>
						<Button mode="text">1 S</Button>
						<Button mode="text">2 S</Button>
						<Button mode="text">1 M</Button>
						<Button mode="text">3 M</Button>
						<Button mode="text">6 M</Button>
					</View>


					<View style={styles.generalCont2}>
						<View style={styles.center}>
							<Button 
								style={styles.iconButtons}
								onPress={() => changeScreen('charge')}
							>
								<Icon name="donate" size={30} color="#fff" />
							</Button>
							<Paragraph style={styles.buttonDesc}>Cargar</Paragraph>
						</View>
						<View style={styles.center}>
							<Button 
								style={styles.iconButtons}
								onPress={() => changeScreen('main')}
							>
								<Icon name="exchange-alt" size={30} color="#fff" />
							</Button>
							<Paragraph style={styles.buttonDesc}>Cambiar</Paragraph>
						</View>
						<View style={styles.center}>
							<Button 
								style={styles.iconButtons}
								onPress={() => changeScreen('send')}
							>
								<Transfer name="send" size={30} color="#fff" />
							</Button>
							<Paragraph style={styles.buttonDesc}>Enviar</Paragraph>
						</View>
					</View>
				</>
			}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
 		padding: 20,
 		backgroundColor: "#FFFF"
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
  	greeting: {
		display: "flex",
 		alignItems: "flex-start",
 		width: "100%",
		marginBottom: 10,
		marginTop: 10,
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
 		marginTop: 2,
 		marginBottom: 2,
	},
	generalCont2: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
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
		backgroundColor: '#097934',
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
		backgroundColor: '#097934'
	},
	generalSection2: {
		width: '75%',
		display: 'flex',
		justifyContent: 'center',
		paddingLeft: 10,
		paddingRight: 12,
		backgroundColor: '#5DB12F'
	},
	numbers: {
		color: "white",
		fontWeight: "300",
		fontSize: 20
	}, 
	selectorsCont: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%'
	},
	selectorsCont2: {
		display: 'flex',
		alignItems: 'center'
	},
	selector: {

	}
});

export default MainScreen;
