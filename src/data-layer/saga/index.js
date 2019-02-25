import {
	fork,
	takeLatest,
	put,
} from 'redux-saga/effects';

import makeRequestSaga from './makeRequestSaga';
import * as requests from '../requests';
import actions from '../actions';
import localStorage from '../localStorage';

import * as utils from '../../utils';
import * as constants from '../../constants';

const {
	beverageActions,
	userActions,
} = actions;

const {
	NBEVERAGES_TOKEN,
} = constants;

const {
	watcherSagaGenerator: watchFetchBeverages,
} = makeRequestSaga({
	request: requests.getBeverages,
	onSuccessAction: beverageActions.fetchBeveragesSucceded,
	onFailureAction: beverageActions.fetchBeveragesFailed,
}, {
	watchedActionType: beverageActions.FETCH_BEVERAGES,
});

const {
	watcherSagaGenerator: watchDeleteBeverages,
} = makeRequestSaga({
	request: requests.deleteBeverages,
	onSuccessAction: beverageActions.deleteBeverageSucceded,
	onFailureAction: beverageActions.deleteBeverageFailed,
}, {
	watchedActionType: beverageActions.DELETE_BEVERAGE,
});

const {
	watcherSagaGenerator: watchAddBeverage,
} = makeRequestSaga({
	request: requests.createBeverage,
	onSuccessAction: beverageActions.addNewBeverageSucceeded,
	onFailureAction: beverageActions.addNewBeverageFailed,
}, {
	watchedActionType: beverageActions.ADD_NEW_BEVERAGE,
});

const {
	watcherSagaGenerator: watchUpdateBeverage,
} = makeRequestSaga({
	request: requests.updateBeverage,
	onSuccessAction: beverageActions.updateBeverageSucceeded,
	onFailureAction: beverageActions.updateBeverageFailed,
}, {
	watchedActionType: beverageActions.UPDATE_BEVERAGE,
});

const handleLoginResponse = (response) => {
	const { token } = response;

	localStorage.setItem(NBEVERAGES_TOKEN, token);

	const decoded = utils.decodeJwtToken(token);

	return {
		user: { ...decoded },
	};
};

const {
	watcherSagaGenerator: watchUserLogin,
} = makeRequestSaga({
	request: requests.userLogin,
	onSuccessAction: userActions.userLoginSucceded,
	onFailureAction: userActions.userLoginFailed,
	handleResponse: handleLoginResponse,
}, {
	watchedActionType: userActions.USER_LOGIN,
});

function* userLogout() {
	try {
		localStorage.removeItem(NBEVERAGES_TOKEN);

		yield put(userActions.userLogoutSucceded());
	} catch (error) {
		yield put(userActions.userLogoutFailed(error));
	}
}

function* watchLogout() {
	yield takeLatest(userActions.USER_LOGOUT, userLogout);
}

export default function* rootSaga() {
	yield fork(watchFetchBeverages);
	yield fork(watchDeleteBeverages);
	yield fork(watchAddBeverage);
	yield fork(watchUpdateBeverage);

	yield fork(watchUserLogin);
	yield fork(watchLogout);
}
