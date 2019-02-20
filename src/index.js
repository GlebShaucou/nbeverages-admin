import '@babel/polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import './assets';

import { App } from './components';
import configureStore from './data-layer/store';
import rootSaga from './data-layer/saga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
	middlewares: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app'),
);
