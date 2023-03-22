/** @format */

import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { useStoreContext } from "../hooks/app.store"
import { useNavigate } from "react-router-dom"

export default function BasicTable({ rows }) {
	const { updateStore } = useStoreContext()
	const navigate = useNavigate()

	const _handlePress = (data = {}) => {
		updateStore("activeCollection", data)
		navigate("/show")
	}

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead className=" bg-slate-600">
					<TableRow>
						<TableCell>
							<p className="text-white font-bold"> Thumbnail</p>
						</TableCell>
						<TableCell align="center">
							<p className="text-white font-bold">Title</p>
						</TableCell>
						<TableCell align="center">
							<p className="text-white font-bold">Location</p>
						</TableCell>
						<TableCell align="center">
							<p className="text-white font-bold">
								Photographers Name
							</p>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map(({ href, data, links }) => (
						<TableRow
							key={href}
							sx={{
								"&:last-child td, &:last-child th": {
									border: 0,
								},
							}}
							onClick={() =>
								_handlePress({
									images: href,
									...data[0],
									thumbnail: links ? links[0]?.href : null,
								})
							}
						>
							<TableCell component="th" scope="row">
								{links && (
									<img
										src={links[0]?.href}
										alt="thumbnail"
										className="w-10 h-10"
									/>
								)}
							</TableCell>
							<TableCell align="center">
								<p className=" text-ellipsis">
									{data[0]?.title || "-"}
								</p>
							</TableCell>
							<TableCell align="center">
								{data[0]?.location || "-"}
							</TableCell>
							<TableCell align="center">
								{data[0]?.photographer || "-"}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
