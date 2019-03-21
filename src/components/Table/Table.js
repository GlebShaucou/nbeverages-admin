import React from 'react';
import ReactTable from 'react-table';

import Context from '../Context';
import * as constants from '../../constants';

const Table = (props) => {
	const {
		data,
		columns,
	} = props;

	return (
		<div className="custom-table__wrapper">
			<Context.Consumer>
				{({ intl: { getTranslation } }) => (
					<ReactTable
						data={data}
						columns={columns}
						filterable
						className="custom-table"
						resizable={false}
						previousText={getTranslation({ id: constants.TABLE_BUTTON_PREV })}
						nextText={getTranslation({ id: constants.TABLE_BUTTON_NEXT })}
						noDataText={getTranslation({ id: constants.TABLE_NO_DATA_TEXT })}
						ofText={getTranslation({ id: constants.TABLE_OF_TEXT })}
						rowsText={getTranslation({ id: constants.TABLE_ROWS_TEXT })}
						pageText={getTranslation({ id: constants.TABLE_PAGE_TEXT })}
					/>
				)}
			</Context.Consumer>
		</div>
	);
};

export default Table;
