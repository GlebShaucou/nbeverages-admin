import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';

export default function configureStore({ preloadedState, middlewares = [] }) {
	const allMiddlewares = [...middlewares];
	const middlewareEnhancer = applyMiddleware(...allMiddlewares);

	const enhancers = [middlewareEnhancer];
	const composedEnhancers = composeWithDevTools(...enhancers);

	return createStore(rootReducer, preloadedState, composedEnhancers);
}
