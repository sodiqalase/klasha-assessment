import React from "react";

const SearchInput = () => {
	return (
		<div className="relative h-10 search_width">
			<input
				type="search"
				placeholder="Search Something..."
				className="h-full placeholder-gray-300 focus:outline-none border border-gray-200 rounded-md appearance-none pl-4 w-full"
				name=""
				id=""
			/>
			<div
				style={{ right: "5%" }}
				className="h-full absolute flex justify-center items-center top-0 bottom-0"
			>
				<img src={require("../assets/svgs/search.svg").default} className="w-4" alt="" />
			</div>
		</div>
	);
};

export default SearchInput;
