import React from "react";
import Sidebar from "./Sidebar";

const AppLayout = ({ children }) => {
	return (
		<div style={{ maxWidth: "100vw" }} className="h-screen max-h-screen w-screen flex">
			<Sidebar />
			<main className="h-screen max-h-screen p-4 flex-1 overflow-y-auto">{children}</main>
		</div>
	);
};

export default AppLayout;
