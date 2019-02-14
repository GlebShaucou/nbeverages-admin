import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import Root from './components/Root/Root';
import configureStore from './data-layer/store';
import rootSaga from './data-layer/saga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
	middlewares: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Root />
		</BrowserRouter>
	</Provider>,
	document.getElementById('app'),
);
