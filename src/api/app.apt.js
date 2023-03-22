/** @format */

import instance from "./instance"

export const appApi = {
	search: (query, year_start, year_end) =>
		instance.get(
			`/search?q=${query}${
				year_start ? `&year_start=${year_start}` : ""
			}${year_end ? `&year_end=${year_end}` : ""}`
		),
}
