import React, { useEffect, useState } from 'react';
import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { Button, RadioButton, Headline, Paragraph, Portal, Dialog, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Transfer from 'react-native-vector-icons/MaterialCommunityIcons';
import { getUserByID } from '../src/redux/actions/user'
import { getAllAccounts } from '../src/redux/actions/account'
import Header from '../src/components/Header';

const dataAccount = [
	{
		balance: 1500,
		tipo: 'Pesos',
		cvu: '222222000022222',
		img: '2'
	}, 
	{
		balance: 45,
		tipo: 'Dolares',
		cvu: '333333111133333',
		img: '1'
	}
]

const dataMovements = {
	pesos: {
		tipo: 'Pesos',
		ingresos: 1300,
		gastos: 250
	},
	dolares: {
		tipo: 'Dolares',
		ingresos: 20,
		gastos: 0
	},
}
//Mi posición consolidada
const MainScreen = ({changeScreen}) => {
	const dispatch = useDispatch();

	//Card seleccionada (pesos o dolares)
	const [selectedCard, setSelectedCard] = useState('Pesos');

	//Se utiliza en el selector de periodo
  	const [periodShows, setPeriodShows] = useState(false);
	const [periodChecked, setPeriodChecked] = useState("");

	const user = useSelector(state => state.user);
	const account = useSelector(state => state.account.userAccounts);

 	useEffect(() => {
		// dispatch(getUserByID(user.user.id.id));
		// dispatch(getAllAccounts(user.user.id.email));
		console.log(user.loggedUser.email)
	}, []);

	const { firstName, lastName } = user.loggedUser;

	const card = ({item, index}) => (
		<View>
			<ImageBackground
				source={require(`../assets/backgroundCard2.jpeg`)}
				style={styles.mainCard}
				imageStyle={{ borderRadius: 15 }}>
				<View>
					<Paragraph>Balance actual</Paragraph>
					<Text style={styles.bigText}>
						{`${item.tipo === 'dolares' ? 'US$' : '$'}${item.balance}`}
					</Text>
				</View>
				<View style={styles.cardInfo}>
					<Paragraph style={styles.cardText}>
						{`${firstName} ${lastName}`}
					</Paragraph>
					<Paragraph style={styles.cardText}>
						{`******************${item.tipo === 'dolares' ? item.cvuUS.slice(item.cvuUS.length - 4, item.cvuUS.length) : item.cvu.slice(item.cvu.length - 4, item.cvu.length)} | ${item.tipo.charAt(0).toUpperCase() + item.tipo.slice(1)}`}
					</Paragraph>
				</View>
			</ImageBackground>
		</View>
	);

	const setAccount = (e) => {
		let offset = e.nativeEvent.contentOffset.x;
		let index = parseInt(offset / 304); //Flatlist width
		index === 0 ? setSelectedCard('Pesos') : setSelectedCard('Dolares')
		//Si index es cero la card que se esta mostrando es la de pesos
	}

	const keyExtractor = (item, index) => index.toString();

	return (
		<View style={styles.container}>
			{
				<>
					<View style={styles.balance}>
						<Header title={`Hola, ${firstName}...`}/>
						<FlatList
							keyExtractor={keyExtractor}
							onScroll={setAccount}
							data={account}
							pagingEnabled={true}
							decelerationRate='fast'
							horizontal={true}
							extraData={user.loggedUser}
							renderItem={card}
							showsHorizontalScrollIndicator={false}
							style={styles.scroll}
						/>
					</View>

					{/* General */}

					<View style={styles.general}>
						<View style={[styles.generalCont1, {justifyContent: 'space-between', alignItems: 'center'}]}>
							<Headline>General...</Headline>
							<Text style={{marginRight: 10}}>{selectedCard}</Text>
						</View>
				
						<View style={styles.generalCont1}>

							<View style={styles.generalSection}>
								<View style={styles.cardCont}>
									<View style={styles.generalSection1}>
										<Icon name="plus" size={30} color="#F7F7F9" />
									</View>
									<View style={styles.generalSection2}>
										<Paragraph style={styles.white}>Ingresos</Paragraph>
										<Headline style={styles.numbers}>{`${selectedCard === 'Pesos' ? '$' + dataMovements.pesos.ingresos : 'US$ ' + dataMovements.dolares.ingresos}`}</Headline>
									</View>
								</View>
							</View>

							<View style={styles.generalSection}>
								<View style={styles.cardCont}>
									<View style={styles.generalSection1}>
										<Icon name="minus" size={30} color="#F7F7F9" />
									</View>
									<View style={styles.generalSection2}>
										<Paragraph style={styles.white}>Gastos</Paragraph>
										<Headline style={styles.numbers}>{`${selectedCard === 'Pesos' ? '$' + dataMovements.pesos.gastos : 'US$ ' + dataMovements.dolares.gastos}`}</Headline>
									</View>
								</View>
							</View>

						</View>
					</View>

					<Divider/>

					<View style={[styles.generalCont1, {justifyContent: 'center'}]}>
						<Button 
							mode="text"
							onPress={() => setPeriodShows(true)}
						>
							SELECCIONAR PERíODO
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
								onPress={() => changeScreen('change')}
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
 		width: 250,
 		height: 150,
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
 		justifyContent: "space-between",
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
		height: 100,
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
		width: '48%',
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
