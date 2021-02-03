import React from 'react';
import { Provider } from 'react-redux';

import store from './src/redux/Index';
import Index from './Index';

export default function App() {

	return (
		<Provider store={store}>
      <Index/>
    </Provider>
	);
}
