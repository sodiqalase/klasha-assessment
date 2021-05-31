import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useClickOutside } from "../hooks/useClickOutside";

const Dropdown = () => {
	const [show, setShow] = useState(false);

	const [buttonValue, setButtonValue] = useState("USD");
	const tdc = useRef();
	useClickOutside(tdc, () => {
		setShow(false);
	});

	const handleToggle = () => {
		setShow(!show);
	};

	return (
		<div ref={tdc} style={{ position: "relative", left: "-30px" }} className="w-16 relative">
			<button
				style={{ background: "#F5F5F5" }}
				onClick={handleToggle}
				className="t_black w-full text-center px-7 text-xs flex items-center justify-center py-2 focus:outline-none rounded-md"
			>
				USD
				<span className="rotate-90 t_black transform duration-500 transition-transform ml-2 text-lg font-semibold">
					&rsaquo;
				</span>
			</button>
			{show && (
				<ul
					style={{ top: "120%", left: "-30%", textAlign: "left" }}
					className="bg-white  w-32 border border-gray-200 text-left text-xs rounded absolute shadow-lg"
				>
					<li
						onClick={handleToggle}
						className="hover:bg-gray-100 border-b-2 py-1 font-bold px-2 border-gray-200 pb-2  cursor-pointer"
					>
						<Link to="#">KES</Link>
					</li>
					<li
						onClick={handleToggle}
						className="hover:bg-gray-100 border-b-2 py-1 font-bold px-2 border-gray-200 pb-2  cursor-pointer"
					>
						<Link to="#">NGN</Link>
					</li>
					<li
						onClick={handleToggle}
						className="hover:bg-gray-100 border-b-2 py-1 font-bold px-2 border-gray-200 pb-2 cursor-pointer"
					>
						<Link to="#">GHC</Link>
					</li>
				</ul>
			)}
		</div>
	);
};

export default Dropdown;
