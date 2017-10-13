import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ todos, deleteTodo, deletedTodos, undeleteTodo }) => {
    const todoItems = todos.map(todo => (
        <li key={todo.id}>
          <button
             type="button"
             className="pure-button todo-delete"
             onClick={() => deleteTodo(todo.id)}
            >
            <i className="fa fa-trash"></i>
          </button>
          <span className="todo-text">{todo.text}</span>
        </li>
    ));

    const deletedTodoItems = deletedTodos.map(todo => (
        <li key={todo.id}>
          <button
             type="button"
             className="pure-button todo-undelete"
             onClick={() => undeleteTodo(todo.id)}
            >
            <i className="fa fa-undo"></i>
          </button>
          <span className="todo-deleted-text">{todo.text}</span>
        </li>
    ));

    return (
        <span>
          {todoItems.length > 0 &&
              <span>
                    <span>Active Todos:</span>
                        <ul>
                              {todoItems}
                            </ul>
                  </span>
              }
              {deletedTodoItems.length > 0 &&
                  <span>
                        <span>Deleted Todos:</span>
                            <ul>
                                  {deletedTodoItems}
                                </ul>
                      </span>
                  }
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
