
// React
import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application';

// style
import '../scss/style.scss';

// React hot loader
import 'react-hot-loader/patch';
import { AppContainer } from 'react-hot-loader';

// render
ReactDOM.render(<AppContainer><Application /></AppContainer>, document.getElementById('root'));
