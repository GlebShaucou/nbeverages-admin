import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routes from './routes';
import NotificationContainer from '../NotificationContainer';
import Header from '../Header';

const App = () => (
	<div className="application">
		<NotificationContainer />
		<BrowserRouter>
			<div className="application__router">
				<Header />
				<Switch>
					{routes.map(route => (
						<Route key={route} {...route} />
					))}
				</Switch>
			</div>
		</BrowserRouter>
	</div>
);

export default App;
