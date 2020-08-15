import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

export default props => (
	<Menu {...props}>
		<Link className="menu-item" to="/">
			List of Photos
		</Link>

		<Link className="menu-item" to="/users">
			List of Users
		</Link>

		<Link className="menu-item" to="/albums">
			List of Albums
		</Link>
	</Menu>
);
