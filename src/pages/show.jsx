/** @format */

import { useEffect, useState } from "react"
import Layout from "../components/layout"
import { useStoreContext } from "../hooks/app.store"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import moment from "moment"

const ShowPage = () => {
	const navigate = useNavigate()
	const { activeCollection } = useStoreContext()

	const [extraImages, setExtraImages] = useState([])
	const {
		thumbnail,
		title,
		location,
		description,
		keywords,
		images,
		date_created,
	} = activeCollection || {}

	useEffect(() => {
		if (!activeCollection) return navigate("/")
		axios.get(images).then(({ data }) => {
			const prefix = thumbnail.split("~")[0].split("//")[1]
			const serialized = data.filter(
				(img) => !img.includes("json") && !img.includes(prefix)
			)
			setExtraImages(serialized)
		})

		//eslint-disable-next-line
	}, [activeCollection, images])
	return !activeCollection ? null : (
		<Layout back title={activeCollection.title}>
			<div className="flex space-x-2">
				<img src={thumbnail} alt="thumbnail" className="w-1/2" />
				<div>
					<ul className="space-y-4">
						<li className="text-sm">
							<span className="font-bold capitalize">title:</span>{" "}
							{title || "-"}
						</li>
						<li className="text-sm">
							<span className="font-bold capitalize">
								description:
							</span>{" "}
							{description || "-"}
						</li>
						<li className="text-sm">
							<span className="font-bold capitalize">
								location:
							</span>{" "}
							{location || "-"}
						</li>
						<li className="text-sm">
							<span className="font-bold capitalize">
								keywords:
							</span>{" "}
							{keywords?.join(",") || "-"}
						</li>
						<li className="text-sm">
							<span className="font-bold capitalize">date:</span>{" "}
							{date_created
								? moment(date_created).format("DD/MM/YYYY")
								: "-"}
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-wrap mt-4">
				{extraImages?.map((image, index) => (
					<img
						src={image}
						key={index}
						alt="images"
						className="w-52 mr-4"
					/>
				))}
			</div>
		</Layout>
	)
}

export default ShowPage
