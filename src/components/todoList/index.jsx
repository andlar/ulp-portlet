import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ todos, deleteTodo, deletedTodos, undeleteTodo }) => {
    const todoItems = todos.map(todo => (
        <li key={todo.id}>
          <button
             type="button"
             className="todo-delete"
             onClick={() => deleteTodo(todo.id)}
            >
            Delete
          </button>
          <span className="todo-text">{todo.text}</span>
        </li>
    ));

    const deletedTodoItems = deletedTodos.map(todo => (
        <li key={todo.id}>
          <button
             type="button"
             className="todo-undelete"
             onClick={() => undeleteTodo(todo.id)}
            >
            Un-Delete
          </button>
          <span className="todo-deleted-text">{todo.text}</span>
        </li>
    ));

    return (
        <span>
          <span>Active Todos:</span>
          <ul>
            {todoItems}
          </ul>
          <span>Deleted Todos:</span>
          <ul>
            {deletedTodoItems}
          </ul>
        </span>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        },
    )).isRequired,
    deletedTodos: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        },
    )).isRequired,
    deleteTodo: PropTypes.func.isRequired,
    undeleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
