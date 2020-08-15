/**
 *
 * UsersPage
 *
 */

import React, { memo } from 'react';
import { compose } from 'redux';
import Sidebar from 'components/Sidebar';

export function UsersPage() {
	return (
		<div id="UsersPage">
			<Sidebar pageWrapId="page-wrap" outerContainerId="UsersPage" />
			<div id="page-wrap" className="container mx-auto">
				<div>Users Page</div>
			</div>
		</div>
	);
}

export default compose(memo)(UsersPage);
