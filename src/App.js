/** @format */

import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SearchPage from "./pages/search"
import { AppStoreProvider } from "./hooks/app.store"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ShowPage from "./pages/show"

function App() {
	return (
		<AppStoreProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SearchPage />} />
					<Route path="/show" element={<ShowPage />} />
				</Routes>
			</BrowserRouter>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</AppStoreProvider>
	)
}

export default App
