import React from 'react';
import {Provider} from 'react-redux';
import Store from './src/redux/Index'

import { StyleSheet} from 'react-native';
import MiPosicionConsolidada from './src/components/MiPosicionConsolidada';

let store = Store();

const App = () => (
  <Provider store={store}>
    <MiPosicionConsolidada/> //Remplazar por componente en producción
  </Provider>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;