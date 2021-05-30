import React from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({ currentPath, Icon, path, caption }) => {
	const active = currentPath === path;
	const fillValue = active ? "#2C665D" : "#A6ABB2";
	return (
		<div>
			<li
				className={`pl-8 ${
					active ? "sidebar_active" : "bg-transparent"
				} mobiles:pl-0 mobiles:mb-2 mobiles:flex mobiles:justify-center py-4 mb-2`}
			>
				<Link className="flex mobiles:justify-center items-center">
					<Icon fill={fillValue} />
					<span
						className={`pl-3 transition-colors ${
							active ? "font-bold t_black" : ""
						} t_gray mobiles:hidden`}
					>
						{caption}
					</span>
				</Link>
			</li>
		</div>
	);
};

export default SidebarItem;
