import {
	call,
	put,
	takeLatest,
} from 'redux-saga/effects';
import actions from '../actions';

const { errorsActions } = actions;

export default function makeSimpleSaga({
	request,
	onSuccessAction,
	onFailureAction,
	handleResponse,
}, {
	watchedActionType, sagaHelperEffect = takeLatest,
}) {
	const workerSagaGenerator = function* workerSaga(action) {
		try {
			const { query } = action;
			let response = yield call(request, query);

			if (typeof handleResponse === 'function') {
				response = handleResponse(response);
			}

			yield put(onSuccessAction(response, query));

			const error = response ? response.error : '';

			yield put(errorsActions.setErrors(error));
		} catch (error) {
			const errorMessage = error.message || error;

			if (onFailureAction) {
				yield put(onFailureAction(errorMessage));
			}

			yield put(errorsActions.setErrors(errorMessage));
		}
	};

	const watcherSagaGenerator = function* watcherSaga() {
		yield sagaHelperEffect(watchedActionType, workerSagaGenerator);
	};

	return { workerSagaGenerator, watcherSagaGenerator };
}
