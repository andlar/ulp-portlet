/* global describe, expect, it */
import actions from '.';
import types from '../constants/';

describe('Actions', () => {
    const todoText = 'a todo';

    it('should create an action to submit a todo', () => {
        const expectedAction = {
            type: types.SUBMIT_TODO,
            id: 1,
            text: todoText,
        };

        expect(actions.submitTodo(todoText)).toEqual(expectedAction);
    });

    it('should create an action to delete a todo', () => {
        const expectedAction = {
            type: types.DELETE_TODO,
            id: 1,
        };

        expect(actions.deleteTodo(1)).toEqual(expectedAction);
    });

    it('should create an action to undelete a todo', () => {
        const expectedAction = {
            type: types.UNDELETE_TODO,
            id: 1,
        };

        expect(actions.undeleteTodo(1)).toEqual(expectedAction);
    });

    it('should create an action to switch to a tab', () => {
        const expectedAction = {
            type: types.SWITCH_TAB,
            target: 'patients',
        };

        expect(actions.switchTab('patients')).toEqual(expectedAction);
    });

    it('should create an action to get Patients', () => {
        const expectedAction = {
            type: types.GET_PATIENTS,
        };


        expect(actions.getPatients()).toEqual(expectedAction);
    });
});
