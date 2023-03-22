/** @format */

const initialStoreState = {
	searchResult: [],
	activeCollection: null,
	query: null,
	startYear: null,
	endYear: null,
}

const persistState = (state = initialStoreState) =>
	localStorage.setItem("STORE", JSON.stringify(state))

const getPersistedState = () => {
	const stateString = localStorage.getItem("STORE")
	if (!stateString) return initialStoreState
	return JSON.parse(stateString)
}

export { persistState, getPersistedState }
