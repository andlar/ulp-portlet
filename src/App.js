import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './App.css';
import AddTodo from './components/addTodo';
import PatientList from './components/patientList';
import TodoList from './components/todoList';
import actions from './actions';

export const App = ({
    deleteTodo,
    deletedTodos,
    getPatients,
    patients,
    submitTodo,
    switchTab,
    tab,
    todos,
    undeleteTodo,
}) => (
    <div>
      <div className="pure-g custom-wrapper">
        <div className="pure-u-1-3">
          <div className="pure-menu pure-menu-horizontal">
            <a
               className="pure-menu-heading pure-menu-link custom-wrapper-menu-link"
               >
              ULP
            </a>
          </div>
        </div>
        <div className="pure-u-1-3">
          <div className="pure-menu pure-menu-horizontal">
            <ul className="pure-menu-list">
              <li className={'pure-menu-item ' + (tab === 'todo' ? 'custom-wrapper-menu-selected' : '')}>
                <a
                   className="pure-menu-link custom-wrapper-menu-link"
                   onClick={() => switchTab('todo')}
                  >
                  Todo App
                </a>
              </li>
              <li className={'pure-menu-item ' + (tab === 'patients' ? 'custom-wrapper-menu-selected' : '')}>
                <a
                   className="pure-menu-link custom-wrapper-menu-link"
                   onClick={() => switchTab('patients')}
                  >
                  Patients
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {tab === 'todo' &&
          <div className="pure-g">
                <div className="pure-u-1-5">
                      <h1>Todo List</h1>
                          <AddTodo submitTodo={submitTodo} />
                              <TodoList
                                     todos={todos}
                                     deleteTodo={deleteTodo}
                                     deletedTodos={deletedTodos}
                                     undeleteTodo={undeleteTodo}
                                     />
                    </div>
              </div>
          }
          {tab === 'patients' &&
              <div>
                    <div className="pure-g">
                          <div className="pure-u-1-5">
                                <h1>ULP Patients</h1>
                                    <button
                                           type="button"
                                           className="pure-button pure-button-primary"
                                           onClick={() => getPatients()}>
                                          <i className="fa fa-refresh fa-spin" />
                                        </button>
                              </div>
                        </div>
                        <div className="pure-g">
                              <div className="pure-u-1-3">
                                    <PatientList
                                           status="recent"
                                           patients={patients}
                                           />
                                  </div>
                                  <div className="pure-u-1-3">
                                        <PatientList
                                               status="active"
                                               patients={patients}
                                               />
                                      </div>
                                      <div className="pure-u-1-3">
                                            <PatientList
                                                   status="discharged"
                                                   patients={patients}
                                                   />
                                          </div>
                            </div>
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
    getPatients: PropTypes.func.isRequired,
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
    getPatients: () => {
        dispatch(actions.getPatients());
    },
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
