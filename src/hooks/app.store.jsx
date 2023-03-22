/** @format */

import { createContext, useContext, useEffect, useState } from "react"
import { getPersistedState, persistState } from "../helpers/store.helpers"

export const AppStoreContext = createContext(null)

const AppStoreProvider = ({ children }) => {
	const [store, setStore] = useState(getPersistedState())
	const updateStore = (key, value) =>
		setStore((prev) => ({ ...prev, [key]: value }))

	useEffect(() => {
		persistState(store)
	}, [store])
	return (
		<AppStoreContext.Provider value={{ updateStore, ...store }}>
			{children}
		</AppStoreContext.Provider>
	)
}

const useStoreContext = () => useContext(AppStoreContext)

export { AppStoreProvider, useStoreContext }
