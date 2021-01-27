import React from 'react';
import { Provider } from 'react-redux';
import Store from './src/redux'
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

//Navigation
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//Componentes / Screens
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import MainScreen from './screens/MainScreen'
import ProductsScreen from './screens/ProductsScreen'
import TransactionsScreen from './screens/TransactionsScreen'
import StatisticsScreen from './screens/StatisticsScreen'
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import Icon from 'react-native-vector-icons/AntDesign'

const store = Store();
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {

  const logged = true; //Cambia dependiendo de si el usuario esta logeado

  return (
    <Provider store={store}>
      
      {logged
        //Si esta logueado
        ? <NavigationContainer>
            <Tab.Navigator
              initialRouteName="Principal"
              activeColor="#fff"
              barStyle={{ width: "100%" }}
            >
              <Tab.Screen 
                name="Principal"
                component={MainScreen}
                options={{
                  tabBarIcon: ({ color }) => (
                    <Icon 
                      name="home" 
                      color={color} 
                      size={23} 
                      style={{MarginBottom: 15}}/>
                  ),
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
                    style={{marginBottom: 15}}/> 
                  ),
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
                      style={{marginBottom: 15}}/>
                  ),
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
                      style={{marginBottom: 15}}/>
                  ),
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>

        //Si no esta logueado  
        : <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle:{
              backgroundColor: 'green',
            },
            headerTintColor: 'white',
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
              name="RegisterScreen" 
              component={RegisterScreen}
              options={{title:'Registrarse'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      }
      
    </Provider>
  )
}
