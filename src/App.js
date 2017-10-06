import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './App.css';
import logo from './logo.svg';
import AddTodo from './components/addTodo';
import TodoList from './components/todoList';
import actions from './actions';

export const App = ({ submitTodo, todos, deleteTodo, deletedTodos, undeleteTodo }) => (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <AddTodo submitTodo={submitTodo} />
      <TodoList
         todos={todos}
         deleteTodo={deleteTodo}
         deletedTodos={deletedTodos}
         undeleteTodo={undeleteTodo}
         />
    </div>
);

App.propTypes = {
    submitTodo: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        },
    )).isRequired,
    deleteTodo: PropTypes.func.isRequired,
    deletedTodos: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        },
    )).isRequired,
    undeleteTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.reducer;

const mapDispatchToProps = dispatch => ({
    submitTodo: (text) => {
        if (text) {
            dispatch(actions.submitTodo(text));
        }
    },
    deleteTodo: (id) => {
        if (id) {
            dispatch(actions.deleteTodo(id));
        }
    },
    undeleteTodo: (id) => {
        if (id) {
            dispatch(actions.undeleteTodo(id));
        }
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
