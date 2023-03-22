/** @format */
import { useState } from "react"
import BasicTable from "../components/Table"
import Layout from "../components/layout"
import { TextField } from "@mui/material"
import { Search } from "@mui/icons-material"
import { useStoreContext } from "../hooks/app.store"
import Loader from "../components/loader"
import { appApi } from "../api/app.apt"
import { toast } from "react-toastify"

const SearchPage = () => {
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)
	const { query, startYear, endYear, searchResult, updateStore } =
		useStoreContext()

	const _handleSearch = async () => {
		if (!query || query.length === 0) return setError(true)
		setLoading(true)
		try {
			const { data } = await appApi.search(query, startYear, endYear)
			updateStore("searchResult", data?.collection?.items)
		} catch (error) {
			const message = error?.response?.data?.message || error?.message
			toast.error(message)
		}
		setLoading(false)
	}
	const _handleChange = (e) => {
		const { name, value } = e.target
		updateStore(name, value)
	}
	return (
		<Layout title="Search">
			<div className="space-x-4 mb-4 flex flex-row items-center justify-center">
				<div className="space-x-4">
					<TextField
						id="outlined-basic"
						label="search"
						variant="outlined"
						error={error}
						helperText={
							error ? "a search query is required" : undefined
						}
						name="query"
						value={query || ""}
						onChange={_handleChange}
						onFocus={() => setError(false)}
					/>
					<TextField
						id="outlined-basic"
						label="Start Year"
						variant="outlined"
						name="startYear"
						value={startYear || ""}
						onChange={_handleChange}
					/>
					<TextField
						id="outlined-basic"
						label="End Year"
						variant="outlined"
						name="endYear"
						value={endYear || ""}
						onChange={_handleChange}
					/>
				</div>
				<Search onClick={_handleSearch} className="cursor-pointer" />
			</div>

			<Loader loading={loading} />

			{searchResult.length > 0 && <BasicTable rows={searchResult} />}
		</Layout>
	)
}

export default SearchPage
