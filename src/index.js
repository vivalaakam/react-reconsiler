import React from 'react';
import { render } from './reconciler';
import './index.css';
import { App } from './App';

React.createElement(App);

render(<App/>, document.getElementById('root'));