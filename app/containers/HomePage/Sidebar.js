import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => (
  <Menu {...props}>
    <a className="menu-item" href="/">
      List of Items
    </a>

    <a className="menu-item" href="/another-page">
      Another Page
    </a>

    <a className="menu-item" href="/another-page-2">
      Another Page 2
    </a>
  </Menu>
);
