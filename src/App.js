import React from "react";
import Directory from "./directory/Directory";
import "./stylesheets/css/tailwind-output.css";
import "./stylesheets/css/index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import './App.css';

function App() {
	return (
		<Router>
			<Directory />
		</Router>
	);
}
export default App;
