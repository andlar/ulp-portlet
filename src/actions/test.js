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
});
