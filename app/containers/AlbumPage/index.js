/**
 *
 * AlbumPage
 *
 */

import React, { memo } from 'react';
import { compose } from 'redux';
import Sidebar from 'components/Sidebar';

export function AlbumPage() {
	return (
		<div id="AlbumPage">
			<Sidebar pageWrapId="page-wrap" outerContainerId="AlbumPage" />
			<div id="page-wrap" className="container mx-auto">
				<div>Album Page</div>
			</div>
		</div>
	);
}

export default compose(memo)(AlbumPage);
