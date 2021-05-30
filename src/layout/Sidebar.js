import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Balances from "../assets/svgs/balances.js";
import Analytics from "../assets/svgs/Analytics";
import Customers from "../assets/svgs/Customers";
import Wallet from "../assets/svgs/Wallet";
import Team from "../assets/svgs/Team";
import Settings from "../assets/svgs/Settings";
import Logout from "../assets/svgs/Logout";
import Contact from "../assets/svgs/Contact";
import SidebarItem from "./SidebarItem.js";
// import { ReactComponent as Balances } from "./../assets/svgs/balances.svg";

const Sidebar = () => {
	const [currentLocation, setCurrentLoacation] = useState("/");

	const history = useHistory();

	const { location } = history;

	useEffect(() => {
		setCurrentLoacation(location.pathname);
	});

	return (
		<section className="h-screen max-h-screen sidebar sidebar_bg bg-red-400 pt-8 overflow-y-auto overflow-x-hidden">
			<h1 className="mb-3 mobiles:px-1 mobiles:w-full pl-8">
				<img src={require("../assets/svgs/klasha logo.svg").default} className="" alt="" />
			</h1>
			<div>
				<h6 className="mt-6 mobiles:px-2 mb-6 t_black font-bold mobiles:text-xs pl-8">
					Main Pages
				</h6>
				<ul className="">
					<SidebarItem
						currentPath={currentLocation}
						Icon={Balances}
						path="/description"
						caption="Description"
					/>
					<SidebarItem
						currentPath={currentLocation}
						Icon={Wallet}
						path="/"
						caption="Balances"
					/>
					<SidebarItem
						currentPath={currentLocation}
						Icon={Customers}
						path="/customers"
						caption="Customers"
					/>
					<SidebarItem
						currentPath={currentLocation}
						Icon={Analytics}
						path="/analytics"
						caption="Analytics"
					/>
				</ul>
			</div>
			<div className="mt-8">
				<h6 className="mt-6 mobiles:px-2 mb-6 t_black font-bold mobiles:text-xs pl-8">
					General
				</h6>
				<ul className="">
					<SidebarItem
						currentPath={currentLocation}
						Icon={Settings}
						path="/settings"
						caption="Settings"
					/>
					<SidebarItem
						currentPath={currentLocation}
						Icon={Team}
						path="/team"
						caption="Team"
					/>
					<SidebarItem
						currentPath={currentLocation}
						Icon={Contact}
						path="/contact"
						caption="Contact"
					/>
					<SidebarItem
						currentPath={currentLocation}
						Icon={Logout}
						path="/logout"
						caption="Logout"
					/>
				</ul>
			</div>
		</section>
	);
};

export default Sidebar;
