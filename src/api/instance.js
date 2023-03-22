/** @format */

import axios from "axios"

const instance = axios.create({
	baseURL: "https://images-api.nasa.gov",
})
export default instance
