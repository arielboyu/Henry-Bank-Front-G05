import React from 'react';
import {Provider} from 'react-redux';
import Store from './src/redux/Index'

import { StyleSheet} from 'react-native';

let store = Store();

export default App = () => (
  <Provider store={store}>
     <TapBarComponent/>
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
