/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { useQuery } from 'react-query';
import Sidebar from 'components/Sidebar';
import Table from './Table';

const fetchPhotos = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/photos');
	return response.json();
};

export default function HomePage() {
	const columns = React.useMemo(
		() => [
			{
				Header: 'Album ID',
				accessor: 'albumId', // accessor is the "key" in the data
			},
			{
				Header: 'ID',
				accessor: 'id',
			},
			{
				Header: 'Thumbnail URL',
				accessor: 'thumbnailUrl',
			},
			{
				Header: 'Title',
				accessor: 'title',
			},
			{
				Header: 'URL',
				accessor: 'url',
			},
		],
		[],
	);

	const { data, status } = useQuery('photos', fetchPhotos);

	return (
		<div id="HomePage">
			<Sidebar pageWrapId="page-wrap" outerContainerId="HomePage" />
			<div id="page-wrap" className="container mx-auto">
				{status === 'error' && <div>Error fetching data</div>}
				{status === 'loading' && <div>Loading ....</div>}
				{status === 'success' && <Table columns={columns} data={data} />}
			</div>
		</div>
	);
}
