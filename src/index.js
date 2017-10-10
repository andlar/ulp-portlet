/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import actions from './actions/';

store.dispatch(actions.getPatients());

ReactDOM.render(
    <Provider store={store}>
      <App
         todos={[]}
         patients={[]}
         deletedTodos={[]}
         />
    </Provider>,
    document.getElementById('root'),
);

registerServiceWorker();
