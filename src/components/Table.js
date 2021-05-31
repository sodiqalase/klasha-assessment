import React from "react";

const Table = ({ tableHeading = [], children }) => {
	return (
		<div className="w-full mobiles:overflow-x-scroll">
			<table class={`refactored-table max-w-full w-full`}>
				<thead>
					<tr class="text-gray-500  text-sm">
						{tableHeading.map((each) => {
							return <th className="font-bold t_black">{each}</th>;
						})}
					</tr>
				</thead>
				<tbody>{children}</tbody>
			</table>
		</div>
	);
};

export default Table;
