/** @format */

const Loader = ({ loading }) => {
	return (
		loading && (
			<div className="flex justify-center my-8 ">
				<div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center animate-ping">
					<div className="bg-white w-8 h-8 rounded-full flex items-center justify-center animate-ping">
						<div className="bg-slate-600 w-6 h-6 rounded-full flex items-center justify-center animate-ping">
							<div className="bg-white w-4 h-4 rounded-full flex items-center justify-center animate-ping">
								<div className="bg-slate-600 w-2 h-2 rounded-full animate-ping" />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	)
}

export default Loader
