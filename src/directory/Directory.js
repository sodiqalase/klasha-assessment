import React from "react";
import AppLayout from "../layout/AppLayout";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const Directory = () => {
	return (
		<AppLayout>
			{/* <Router> */}
			<Switch>
				<Route path="/" component={Dashboard} />
			</Switch>
			{/* </Router> */}
		</AppLayout>
	);
};

export default Directory;
