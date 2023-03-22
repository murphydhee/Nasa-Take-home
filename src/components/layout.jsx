/** @format */
import { ArrowBack } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"

const Layout = ({ children, back, title }) => {
	const navigate = useNavigate()
	const _handleBack = () => navigate("/")
	return (
		<div className="pb-8">
			<div className="h-20 shadow bg-slate-600 flex flex-row items-center justify-between px-8">
				<ArrowBack
					onClick={_handleBack}
					className={`text-white ${back ? "visible" : "invisible"} `}
				/>
				<p className="font-bold text-white w-[70%]  text-center truncate">
					{" "}
					{title}
				</p>
				<div />
			</div>
			<div className="lg:px-20 px-8 mt-8 lg:mt-20">{children}</div>
		</div>
	)
}

export default Layout
