import React from "react";

const Navbar = () => {
	return (
		<nav className="flex justify-between items-center sticky">
			<div>
				<h3 className="t_black font-bold mb-1">Balances</h3>
				<p className="t_gray text-sm">Today, 19th October 2020</p>
			</div>
			<div className="flex items-center">
				<img
					src={require("../assets/svgs/notification.svg").default}
					alt="notification"
					className="w-12 mobiles:w-10 mr-4"
				/>
				<img
					src={require("../assets/svgs/profile picture.svg").default}
					alt="profile picture"
					className="w-12 mobiles:w-10"
				/>
			</div>
		</nav>
	);
};

export default Navbar;
