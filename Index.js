import React from 'react';
import { useSelector } from 'react-redux';

//Navigation
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//Componentes/Screens
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import Main from './src/components/Main';
import ProductsScreen from './screens/ProductsScreen'
import TransactionsScreen from './screens/TransactionsScreen'
import StatisticsScreen from './screens/StatisticsScreen'
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen';
import DischargeScreen from './screens/DischargeScreen';
import Icon from 'react-native-vector-icons/AntDesign'
import VerifyScrenn from './screens/VerifyScrenn'
import { cos } from 'react-native-reanimated';


const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const Index = () => {
    const user = useSelector(state => state.user);
  const logged = true//user.user.logged;
  
	return (
        <>
            {logged
            //Si esta logueado
            ? <NavigationContainer>
                <Tab.Navigator
                initialRouteName="Inicio"
                activeColor="#fff"
                tabBarOptions={{
                    style: {backgroundColor: '#fff'},
                    keyboardHidesTabBar: true
                }}
                >
                    <Tab.Screen
                        name="Inicio"
                        component={Main}
                        
                        options={{
                            tabBarIcon: ({ color }) => (
                                <Icon
                                    name="home"
                                    color={color}
                                    size={23}
                                />
                            ),
                            tabBarColor: "#5FA743"
                        }}
                    />
                    <Tab.Screen
                        name="Transacciones"
                        component={TransactionsScreen}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <Icon
                                    name="swap"
                                    color={color}
                                    size={23}
                                />
                            ),
                            tabBarColor: "#006A34"
                        }}
                    />
                    <Tab.Screen
                        name="Estadísticas"
                        component={StatisticsScreen}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <Icon
                                    name="linechart"
                                    color={color}
                                    size={23}
                                />
                            ),
                            tabBarColor: "#007f5f"
                        }}
                    />

                <Tab.Screen
                    name="Productos"
                    component={ProductsScreen}

                    options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                        name="wallet"
                        color={color}
                        size={23}
                        />
                    ),
                    tabBarColor: "#279152"
                    }}

                />
{/*                 <Tab.Screen
                    name="Cerrar Sesión"
                    component={Main}
                    onPress={()=>navigation.navigate('Login')}
                    options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                        name="logout"
                        color={color}
                        size={23}
                        />
                    ),
                    }}
                /> */}
                </Tab.Navigator>
            </NavigationContainer>

            //Si no esta logueado
            : <NavigationContainer>
                <Stack.Navigator
                screenOptions={{
                    headerStyle:{
                        backgroundColor: '#F1F4FF',
                    },
                    headerTintColor: 'black',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    }
                    }}>
                    <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{title:'Inicio'}}
                    />
                    <Stack.Screen
                        name="LoginScreen"
                        component={LoginScreen}
                        options={{title:'Iniciar Sesión'}}
                    />
                    <Stack.Screen
                        name="DischargeScreen"
                        component={DischargeScreen}
                        options={{title:'Alta de Ususario'}}
                    />
                    <Stack.Screen
                        name="RegisterScreen"
                        component={RegisterScreen}
                        options={{title:'Registrarse'}}
                    />
                    <Stack.Screen
                        name="VerifyScrenn"
                        component={VerifyScrenn}
                        options={{title:'Verificar su e-mail'}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
            }
        </>
    );
};

export default Index;
