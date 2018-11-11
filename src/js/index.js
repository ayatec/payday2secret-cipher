
// React
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// style
import '../scss/style.scss';

// React hot loader
import 'react-hot-loader/patch';
import { AppContainer } from 'react-hot-loader';

// App
import Application from './components/Application';
import store from './store';

// render
ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Application />
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);
