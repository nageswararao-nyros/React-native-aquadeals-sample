import React from 'react';
import Home from './screens/Home';
import Navigator from './config/routes';
import { Provider } from 'react-redux';
import store from './config/store';

export default () =>(
	<Provider store={store}>
		<Navigator onNavigationStateChange={null} />
	</Provider>
)
