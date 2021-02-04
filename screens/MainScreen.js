import React, { useEffect, useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { Avatar, Button, RadioButton, Headline, Paragraph, Portal, Dialog, Divider, Modal } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Transfer from 'react-native-vector-icons/MaterialCommunityIcons';
import { getUserByID } from '../src/redux/actions/user'
import Header from '../src/components/Header';

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

	const [periodShows, setPeriodShows] = useState(false)
	const [periodChecked, setPeriodChecked] = useState("")
	const [accountShows, setAccountShows] = useState(false)
	const [accountChecked, setAccountChecked] = useState("")

	useEffect(() => {
		dispatch(getUserByID(user.user.id));
	}, [])

	const { income, expenses, dollar, peso, accounts } = data;
	const { firstName, lastName } = user.user;

	return (
		<View style={styles.container}>
 			{/* firstName &&*/ <>					
					<View style={styles.balance}>
						<Header title={`Hola, ${firstName}...`}/>
						<ScrollView 
							horizontal={true} 
							pagingEnabled={true}
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
					<Divider/>
					<View style={styles.generalCont1}>
						<Button 
							mode="text"
							onPress={() => setPeriodShows(true)}
						>
							PERíODO
						</Button>
						<Portal>
							<Dialog visible={periodShows} onDismiss={() => setPeriodShows(false)}>
								<Dialog.Title>Selecciona el período</Dialog.Title>
								<Dialog.Content>
									<View style={styles.row}>
										<RadioButton
											value="1d"
											status={ periodChecked === '1d' ? 'checked' : 'unChecked' }
											onPress={() => setPeriodChecked('1d')}
										/>
										<Text style={{fontSize: 18, marginLeft: 5}}>
											Hoy
										</Text>
									</View>
									<View style={styles.row}>
										<RadioButton
											value="3d"
											status={ periodChecked === '3d' ? 'checked' : 'unChecked' }
											onPress={() => setPeriodChecked('3d')}
										/>
										<Text style={{fontSize: 18, marginLeft: 5}}>
											Tres días
										</Text>
									</View>
									<View style={styles.row}>
										<RadioButton
											value="1s"
											status={ periodChecked === '1s' ? 'checked' : 'unChecked' }
											onPress={() => setPeriodChecked('1s')}
										/>
										<Text style={{fontSize: 18, marginLeft: 5}}>
											Una semana</Text>
									</View>
									<View style={styles.row}>
										<RadioButton
											value="2s"
											status={ periodChecked === '2s' ? 'checked' : 'unChecked' }
											onPress={() => setPeriodChecked('2s')}
										/>
										<Text style={{fontSize: 18, marginLeft: 5}}>
											Dos semanas
										</Text>
									</View>
									<View style={styles.row}>
										<RadioButton
											value="1m"
											status={ periodChecked === '1m' ? 'checked' : 'unChecked' }
											onPress={() => setPeriodChecked('1m')}
										/>
										<Text style={{fontSize: 18, marginLeft: 5}}>
											Un mes
										</Text>
									</View>
									<View style={styles.row}>
										<RadioButton
											value="3m"
											status={ periodChecked === '3m' ? 'checked' : 'unChecked' }
											onPress={() => setPeriodChecked('3m')}
										/>
										<Text style={{fontSize: 18, marginLeft: 5}}>
											Tres meses
										</Text>
									</View>
									<View style={styles.row}>
										<RadioButton
											value="6m"
											status={ periodChecked === '6m' ? 'checked' : 'unChecked' }
											onPress={() => setPeriodChecked('6m')}
										/>
										<Text style={{fontSize: 18, marginLeft: 5}}>
											Seis meses
										</Text>
									</View>
									<View style={styles.row}>
										<RadioButton
											value="1a"
											status={ periodChecked === '1a' ? 'checked' : 'unChecked' }
											onPress={() => setPeriodChecked('1a')}
										/>
										<Text style={{fontSize: 18, marginLeft: 5}}>
											Un año
										</Text>
									</View>
								</Dialog.Content>
								<Dialog.Actions>
									<Button onPress={() => setPeriodShows(false)}>Seleccionar</Button>
								</Dialog.Actions>
							</Dialog>
						</Portal>

						<Button 
							mode="text"
							onPress={() => setAccountShows(true)}
						>
							CUENTA
						</Button>
						<Portal>
							<Dialog visible={accountShows} onDismiss={() => setAccountShows(false)}>
								<Dialog.Title>Selecciona la cuenta</Dialog.Title>
								<Dialog.Content>
									<View style={styles.row}>
										<RadioButton
											value={accounts.peso}
											status={ accountChecked === accounts.peso ? 'checked' : 'unChecked' }
											onPress={() => setAccountChecked(accounts.peso)}
										/>
										<Text style={{fontSize: 18, marginLeft: 5}}>
											{`Cuenta #${accounts.peso} (Pesos)`}
										</Text>
									</View>
									<View style={styles.row}>
										<RadioButton
											value={accounts.usd}
											status={ accountChecked === accounts.usd ? 'checked' : 'unChecked' }
											onPress={() => setAccountChecked(accounts.usd)}
										/>
										<Text style={{fontSize: 18, marginLeft: 5}}>
											{`Cuenta #${accounts.usd} (Dolares)`}
										</Text>
									</View>
								</Dialog.Content>
								<Dialog.Actions>
									<Button onPress={() => setAccountShows(false)}>Seleccionar</Button>
								</Dialog.Actions>
							</Dialog>
						</Portal>
					</View>
					<Divider/>

					{/* Buttons */}

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
	row: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},
	sideBar: {
		backgroundColor: '#FFFF',
		width: '60%',
		height: '100%',
		padding: 10
	}
});

export default MainScreen;
