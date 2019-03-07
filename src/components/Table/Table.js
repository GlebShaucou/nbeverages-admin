import React from 'react';
import ReactTable from 'react-table';

const Table = (props) => {
	const {
		data,
		columns,
	} = props;

	return (
		<div className="custom-table__wrapper">
			<ReactTable
				data={data}
				columns={columns}
				filterable
				className="custom-table"
				resizable={false}
			/>
		</div>
	);
};

export default Table;
