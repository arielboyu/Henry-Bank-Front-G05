import React from 'react';
import {Provider} from 'react-redux';
import Store from './src/redux/Index'
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
// import MiPosicionConsolidada from './src/components/MiPosicionConsolidada';
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import Icon from 'react-native-vector-icons/Ionicons'
// let store = Store();
//
// const App = () => (
//   <Provider store={store}>
//     // <MiPosicionConsolidada/> //Remplazar por componente en producción
//   </Provider>
// )

const Stack = createStackNavigator()





export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerStyle:{
      backgroundColor:'green',
    },
    headerTintColor:'white',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
    }} >
      <Stack.Screen name="Home" component={HomeScreen}
      options={{title:'Home'}}
      />
      <Stack.Screen name="LoginScreen" component={LoginScreen}
      options={{title:'Iniciar Sesión'}}
      />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen}
      options={{title:'Registrarse'}}
      />
    </Stack.Navigator>
    </NavigationContainer>

  )
}
