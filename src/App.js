import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './App.css';
import logo from './logo.svg';
import AddTodo from './components/addTodo';
import PatientList from './components/patientList';
import TodoList from './components/todoList';
import actions from './actions';

export const App = ({
    deleteTodo,
    deletedTodos,
    patients,
    submitTodo,
    switchTab,
    tab,
    todos,
    undeleteTodo,
}) => (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <div className="tab">
        <button
           type="button"
           onClick={() => switchTab('todo')}
          >
          Todo App
        </button>
      </div>
      <div className="tab">
        <button
           type="button"
           onClick={() => switchTab('patients')}
          >
          Patients
        </button>
      </div>
      {tab === 'todo' &&
          <div>
                <AddTodo submitTodo={submitTodo} />
                    <TodoList
                           todos={todos}
                           deleteTodo={deleteTodo}
                           deletedTodos={deletedTodos}
                           undeleteTodo={undeleteTodo}
                           />
              </div>
          }
          {tab === 'patients' &&
              <div>
                    <h2>ULP Patients</h2>
                    <PatientList
                           status="recent"
                           patients={patients}
                           />
                        <PatientList
                               status="active"
                               patients={patients}
                               />
                            <PatientList
                                   status="discharged"
                                   patients={patients}
                                   />
                  </div>
              }
    </div>
);

App.propTypes = {
    deleteTodo: PropTypes.func.isRequired,
    deletedTodos: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        },
    )).isRequired,
    patients: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        },
    )).isRequired,
    submitTodo: PropTypes.func.isRequired,
    switchTab: PropTypes.func.isRequired,
    tab: PropTypes.string.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape(
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
    switchTab: (target) => {
        dispatch(actions.switchTab(target));
    },
    undeleteTodo: (id) => {
        if (id) {
            dispatch(actions.undeleteTodo(id));
        }
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
