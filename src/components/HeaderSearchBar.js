import React from "react";
import Calender from "./Calender";
import SearchInput from "./SearchInput";

const HeaderSearchBar = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div className="mt-14 flex mobiles:block justify-between items-center">
			<h4 className="font-semibold mobiles:text-lg mobiles:mb-2">Payout table</h4>
			<div>
				<form onSubmit={handleSubmit} className="flex mobiles:block items-center">
					<SearchInput />
					<Calender />
					<button
						style={{ background: "#3D8F83" }}
						className="h-10 mobiles:ml-0 mobiles:block mobiles:w-full text-center px-5 text-white rounded-md ml-5"
					>
						Payout
					</button>
				</form>
			</div>
		</div>
	);
};

export default HeaderSearchBar;
