import React from 'react';
import {Provider} from 'react-redux';
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
//Coponentes/Screens
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import MainScreen from './screens/MainScreen'
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import Icon from 'react-native-vector-icons/Ionicons'

const store = Store();
const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
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
            component={MainScreen}
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
          <Stack.Screen
            name="MainScreen" 
            component={MainScreen}
            options={{title:'Principal'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
