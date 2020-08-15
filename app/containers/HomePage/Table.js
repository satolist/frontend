/* eslint-disable react/prop-types */
import React from 'react';
import { useTable, usePagination } from 'react-table';
import MaUTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function Table({ columns, data, onClick }) {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		prepareRow,

		canPreviousPage,
		canNextPage,
		pageOptions,
		pageCount,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,
		state: { pageIndex, pageSize },
	} = useTable(
		{
			columns,
			data,
			initialState: { pageIndex: 1 },
		},
		usePagination,
	);

	return (
		<>
			<MaUTable {...getTableProps()}>
				<TableHead>
					{headerGroups.map(headerGroup => (
						<TableRow {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map(column => (
								<TableCell {...column.getHeaderProps()}>
									{column.render('Header')}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableHead>
				<TableBody {...getTableBodyProps()}>
					{page.map(row => {
						prepareRow(row);
						return (
							<TableRow {...row.getRowProps()}>
								{row.cells.map(cell => (
									<TableCell
										onClick={() => onClick(row.original)}
										{...cell.getCellProps()}
									>
										{cell.render('Cell')}
									</TableCell>
								))}
							</TableRow>
						);
					})}
				</TableBody>
			</MaUTable>

			<div className="pagination">
				<button
					type="button"
					onClick={() => gotoPage(0)}
					disabled={!canPreviousPage}
				>
					{'<<'}
				</button>{' '}
				<button
					type="button"
					onClick={() => previousPage()}
					disabled={!canPreviousPage}
				>
					{'<'}
				</button>{' '}
				<button
					type="button"
					onClick={() => nextPage()}
					disabled={!canNextPage}
				>
					{'>'}
				</button>{' '}
				<button
					type="button"
					onClick={() => gotoPage(pageCount - 1)}
					disabled={!canNextPage}
				>
					{'>>'}
				</button>{' '}
				<span>
					Page{' '}
					<strong>
						{pageIndex + 1} of {pageOptions.length}
					</strong>{' '}
				</span>
				<span>
					| Go to page:{' '}
					<input
						type="number"
						defaultValue={pageIndex + 1}
						onChange={e => {
							const selectedPage = e.target.value
								? Number(e.target.value) - 1
								: 0;
							gotoPage(selectedPage);
						}}
						style={{ width: '100px' }}
					/>
				</span>{' '}
				<select
					value={pageSize}
					onChange={e => {
						setPageSize(Number(e.target.value));
					}}
				>
					{[10, 20, 30, 40, 50].map(pageSizeOptions => (
						<option key={pageSizeOptions} value={pageSizeOptions}>
							Show {pageSizeOptions}
						</option>
					))}
				</select>
			</div>
		</>
	);
}

export default Table;
