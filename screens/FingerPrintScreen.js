import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Alert,
  Image,
} from 'react-native';
import Constants from 'expo-constants';
import DropdownAlert from 'react-native-dropdownalert';
import * as LocalAuthentication from 'expo-local-authentication'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { login } from '../src/redux/actions/user';

export default function fingerPrint({ navigation }) {

  const [ state, setState ] = useState({
		compatible : false,
    loggedUser: {}
	});

  const dispatch = useDispatch();
  useEffect( () => {
    let mounted = true;
   if(mounted) checkDeviceForHardware();
   // getUser()
   mounted = false;
  }, []);



  //Busca el user guardado en AsyncStorage para hacer el login.
  const getUser = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('USER')
      console.log("JSON DATA ", jsonData)
     setState({compatible: true, loggedUser: JSON.parse(jsonData) })

     /*  return jsonData != null ? JSON.parse(jsonData) : null; */

    } catch (e) {
      // error reading value
    }
  }

  var loggedUser = state.loggedUser;

  //Checkea si el telefono es compatible 
  const checkDeviceForHardware = async () => {
    let compatible = await LocalAuthentication.hasHardwareAsync();
     setState({ compatible });
     getUser();
    if (!compatible) {
      showIncompatibleAlert();
    }
  };

  //Error si no es compatible.
  const showIncompatibleAlert = () => {
    dropdown.alertWithType(
      'error',
      'Dispositivo no compatible',
      'Su dispositivo no es compatible con escaneo de huella dactilar.'
    );
  };

  //Busca que haya huellas guardadas.
  const checkForBiometrics = async () => {
    let biometricRecords = await LocalAuthentication.isEnrolledAsync();
    if (!biometricRecords) {
      dropdown.alertWithType(
        'Atención',
        'No tiene huellas guardadas',
        'Asegurese que su dispositivo tenga huellas guardadas'
      );
    } else {
      handleLoginPress();
    }
  };

  const handleLoginPress = () => {
    if (Platform.OS === 'android') {
      showAndroidAlert();
    } else {
      scanBiometrics();
    }
  };

  const showAndroidAlert = () => {
  /*   Alert.alert('Fingerprint Scan', 'Coloque su huella sobre el sensor.'); */
    scanBiometrics();
  };

  const scanBiometrics = async () => {
    let result = await LocalAuthentication.authenticateAsync();
    if (result.success) {
      dropdown.alertWithType(
        'success',
        'You are you!',
        'Bio-Authentication succeeded.'
      );
      handleLogin();
    } else {
      dropdown.alertWithType(
        'error',
        'Uh oh!',
        'Bio-Authentication failed or canceled.'
      );
    }
  };

  const handleLogin = () => {
/*     console.log("loggedUSER >>", loggedUser)
    if (loggedUser.isValidUser && loggedUser.isValidPassword) { */
      dispatch(login(loggedUser));
   /*  } */
  };



  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
      />
      <TouchableOpacity
        onPress={
          state.compatible
            ? checkForBiometrics
            : showIncompatibleAlert
        }
        style={styles.button}>
        <Text style={styles.buttonText}>
          Bio Login
          </Text>
      </TouchableOpacity>
      <DropdownAlert
        ref={ref => (dropdown = ref)}
        closeInterval={5000}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#056ecf',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 60,
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: '#fff',
  },
  buttonText: {
    fontSize: 30,
    color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.30)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  logo: {
    height: 128,
    width: 128,
  },
});