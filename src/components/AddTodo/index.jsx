import React from 'react';
import PropTypes from 'prop-types';

const AddTodo = ({ submitTodo }) => {
    let input;

    return (
        <div>
          <form
             className="pure-form"
             onSubmit={(event) => {
                 event.preventDefault();
                 submitTodo(input.value);
                 input.value = '';
            }}
            >
            <input
               className="todo-input"
               ref = {(element) => {
                   input = element;
              }}
              />
              <button
                 type="submit"
                 className="pure-button pure-button-primary todo-submit">
                <i className="fa fa-plus"></i>
              </button>
          </form>
        </div>
    );
};

AddTodo.propTypes = {
    submitTodo: PropTypes.func.isRequired,
};

export default AddTodo;
