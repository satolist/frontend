/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import Sidebar from './Sidebar';

export default function HomePage() {
  return (
    <div id="HomePage">
      <Sidebar pageWrapId="page-wrap" outerContainerId="HomePage" />
      <div id="page-wrap">
        <div>Hello World</div>
      </div>
    </div>
  );
}
