/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
      <App
         todos={[]}
         patients={[
             { id: 0, name: 'John Doe', status: 'active' },
             { id: 1, name: 'James Doe', status: 'active' },
             { id: 2, name: 'Bill Doe', status: 'active' },
             { id: 3, name: 'Fran Doe', status: 'active' },
             { id: 4, name: 'Andy Doe', status: 'active' },
             { id: 5, name: 'Mark Doe', status: 'discharged' },
             { id: 6, name: 'Bill Doe', status: 'discharged' },
             { id: 7, name: 'Bob Doe', status: 'discharged' },
             { id: 8, name: 'Karen Doe', status: 'discharged' },
             { id: 9, name: 'Willy Doe', status: 'discharged' },
             { id: 10, name: 'Bruce Doe', status: 'discharged' },
             { id: 11, name: 'Marc Doe', status: 'recent' },
             { id: 12, name: 'Jane Doe', status: 'recent' },
             { id: 13, name: 'Joe Doe', status: 'recent' },
             { id: 14, name: 'Liam Doe', status: 'recent' },
             { id: 15, name: 'Nate Doe', status: 'recent' },
         ]}
         deletedTodos={[]}
         />
    </Provider>,
    document.getElementById('root'),
);

registerServiceWorker();
