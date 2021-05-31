import React from "react";
import Dropdown from "./Dropdown";

const Funds = () => {
	return (
		<section className="h-64 mobiles:h-auto mobiles:flex-col funds_width flex rounded-lg border border-gray-200 mt-12">
			<div className="w-1/2 mobiles:w-full mobiles:pb-6 p-4 mobiles:px-2 ">
				<div className="flex h-16 pb-5 border-b border-gray-200 justify-between items-center">
					<p className="font-semibold text-lg" style={{ color: "#3D8F83" }}>
						Total Account Balance
					</p>
					<Dropdown />
				</div>
				<h2 className="mt-5 font-bold text-5xl">$5,332.18</h2>
				<p className="mt-4 t_gray">1 USD = 381.97 NGN</p>
			</div>
			<div
				style={{ background: "#F5F5F5" }}
				className="w-1/2 mobiles:w-full mobiles:pb-10 rounded-lg p-4"
			>
				<div className=" pb-5 h-16 flex items-center border-b border-gray-200 ">
					<p className="t_black font-semibold">Funds on hold</p>
				</div>
				<h2 className="mt-5 font-bold text-5xl">$5,332.18</h2>
			</div>
		</section>
	);
};

export default Funds;
