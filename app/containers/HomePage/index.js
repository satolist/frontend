/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import { useQuery } from 'react-query';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
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
	const [photo, setPhoto] = useState(null);

	const getDynamicHtml = () => `
		<p>${photo.title}</p>
		<img src="${photo.url}"/>
	`;

	const onClick = selectedPhoto => {
		setPhoto(selectedPhoto);
	};

	return (
		<div id="HomePage">
			<Sidebar pageWrapId="page-wrap" outerContainerId="HomePage" />
			<div id="page-wrap" className="container mx-auto">
				{status === 'error' && <div>Error fetching data</div>}
				{status === 'loading' && <div>Loading ....</div>}
				{!photo && status === 'success' && (
					<Table onClick={onClick} columns={columns} data={data} />
				)}
				{photo && (
					<div>
						<CKEditor editor={ClassicEditor} data={getDynamicHtml()} />
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
							type="button"
							onClick={() => setPhoto(null)}
						>
							Back
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
