import React, { useRef } from "react";

const Calender = () => {
	// const calRef = useRef();

	return (
		<div className="relative mobiles:mb-4 ml-5 px-1 rounded-md mobiles:ml-0 mobiles:w-full items-center border border-gray-200 flex h-10 w-32">
			<input
				type="date"
				style={{ zIndex: "3" }}
				className="h-full w-full appearance-none opacity-0 top-0 right-0 bottom-0 left-0 absolute"
				name=""
				id=""
			/>
			<p className="h-full flex items-center t_gray text-sm flex-1">March, 2020</p>
			<div className="h-full relative z-0 flex w-4 justify-center items-center">
				<img src={require("../assets/svgs/calender.svg").default} className="w-4" alt="" />
			</div>
		</div>
	);
};

export default Calender;
