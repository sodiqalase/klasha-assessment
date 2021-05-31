import React from "react";
import Table from "./Table";
import TableRow from "./TableRow";

const Tablecomponent = () => {
	return (
		<div className="max-w-full">
			<Table tableHeading={["Payout Id", "Source", "Date", "Amount"]}>
				<TableRow />
				<TableRow />
				<TableRow />
				<TableRow />
			</Table>
		</div>
	);
};

export default Tablecomponent;
