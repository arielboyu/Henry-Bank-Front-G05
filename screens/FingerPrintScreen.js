import React, { Component } from 'react';
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

export default class App extends Component {
  state = {
    compatible: false,
  };
 
  componentDidMount =  async () => {
   await this.checkDeviceForHardware(); 
   await this.getUser();
  }

  checkDeviceForHardware = async () => {
    let compatible = await LocalAuthentication.hasHardwareAsync();
    this.setState({ compatible });
    if (!compatible) {
      this.showIncompatibleAlert();
    }
  }; 

  showIncompatibleAlert = () => {
    this.dropdown.alertWithType(
      'error',
      'Dispositivo no compatible',
      'Su dispositivo no es compatible con escaneo de huella dactilar.'
    );
  };

  checkForBiometrics = async () => {
    let biometricRecords = await LocalAuthentication.isEnrolledAsync();
    if (!biometricRecords) {
      this.dropdown.alertWithType(
        'Atención',
        'No tiene huellas guardadas',
        'Asegurese que su dispositivo tenga huellas guardadas'
      );
    } else {
      this.handleLoginPress();
    }
  };
  
  handleLoginPress = () => {
    if (Platform.OS === 'android') {
      this.showAndroidAlert();
    } else {
      this.scanBiometrics();
    }
  };

  showAndroidAlert = () => {
    Alert.alert('Fingerprint Scan', 'Coloque su huella sobre el sensor.');
    this.scanBiometrics();
  };

  scanBiometrics = async () => {
    let result = await LocalAuthentication.authenticateAsync('Biometric Scan.');
    if (result.success) {
      this.dropdown.alertWithType(
        'success',
        'You are you!',
        'Bio-Authentication succeeded.'
      );
    } else {
      this.dropdown.alertWithType(
        'error',
        'Uh oh!',
        'Bio-Authentication failed or canceled.'
      );
    }
  };

   getUser = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('USER')
      console.log("JSON DATA ", jsonData)
      return jsonData != null ? JSON.parse(jsonData) : null;
     
    } catch(e) {
      // error reading value
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/logo.png')}
        />
        <TouchableOpacity
          onPress={
            this.state.compatible
              ? this.checkForBiometrics
              : this.showIncompatibleAlert
          }
          style={styles.button}>
          <Text style={styles.buttonText}>
            Bio Login
          </Text>
        </TouchableOpacity>
        <DropdownAlert
          ref={ref => (this.dropdown = ref)}
          closeInterval={5000}
        />
      </View>
    );
  }
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