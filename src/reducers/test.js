/* global describe, expect, it */
import types from '../constants/';
import { reducer, initialState } from '.';

describe('the Reducer', () => {
    const todoText = 'a todo';

    it('should return the initial state when no action passed', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    describe('when submitting a todo', () => {
        it('should return the correct state', () => {
            const action = {
                type: types.SUBMIT_TODO,
                id: 1,
                text: todoText,
            };

            const expectedState = {
                todos: [
                    {
                        id: 1,
                        text: todoText,
                    },
                ],
            };

            expect(reducer(undefined, action)).toEqual(expectedState);
        });
    });
});
