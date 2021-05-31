import React from "react";
import Funds from "../components/Funds";
import HeaderSearchBar from "../components/HeaderSearchBar";
import Navbar from "../components/Navbar";
import ShowMore from "../components/ShowMore";
import Tablecomponent from "../components/Tablecomponent";

const Dashboard = () => {
	return (
		<div>
			<Navbar />
			<Funds />
			<HeaderSearchBar />
			<Tablecomponent />
			<ShowMore />
		</div>
	);
};

export default Dashboard;
