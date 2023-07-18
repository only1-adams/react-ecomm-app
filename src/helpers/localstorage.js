function saveToLocalStorage(name, value) {
	localStorage.setItem(name, value);
}

function getFromLocalStorage(name) {
	return localStorage.getItem(name);
}

const localStorageHelper = {
	saveToLocalStorage,
	getFromLocalStorage,
};

export default localStorageHelper;
