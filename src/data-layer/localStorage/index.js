/* global window */
const { localStorage } = window;

const getItem = (key) => {
	try {
		const serilizedState = localStorage.getItem(key);

		return serilizedState === null ? undefined : JSON.parse(serilizedState);
	} catch (e) {
		throw e;
	}
};

const setItem = (key, value) => {
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch (e) {
		throw e;
	}
};

const removeItem = (key) => {
	try {
		localStorage.removeItem(key);
	} catch (e) {
		throw e;
	}
};

const clear = () => {
	try {
		localStorage.clear();
	} catch (e) {
		throw e;
	}
};

export default {
	getItem,
	setItem,
	removeItem,
	clear,
};
