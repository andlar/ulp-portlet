import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './App.css';
import logo from './logo.svg';
import AddTodo from './components/AddTodo';
import actions from './actions';

export const App = ({ submitTodo }) => (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        <AddTodo submitTodo={submitTodo} />
      </p>
    </div>
);

App.propTypes = {
    submitTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.todoListApp;

const mapDispatchToProps = dispatch => ({
    submitTodo: (text) => {
        if (text) {
            dispatch(actions.submitTodo(text));
        }
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
