import React from 'react';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';

import store from './src/redux/Index';
import Index from './Index';

export default function App() {

	return (
	<Provider store={store}>
		<PaperProvider>
      		<Index/>
	  	</PaperProvider>
    </Provider>
	);
}
