import React from "react";
import Sidebar from "./Sidebar";

const AppLayout = ({ children }) => {
	return (
		<div
			style={{ maxWidth: "100vw" }}
			className="h-screen max-h-screen overflow-x-hidden w-screen flex"
		>
			<Sidebar />
			<main className="h-screen mobiles:p-4 max-w-full w-full overscroll-x-hidden max-h-screen p-8 flex-1 overflow-y-auto">
				{children}
			</main>
		</div>
	);
};

export default AppLayout;
