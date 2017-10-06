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
                deletedTodos: [],
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

    describe('when deleting a todo', () => {
        it('should return the correct state', () => {
            const startingState = {
                todos: [
                    {
                        id: 1,
                        text: todoText,
                    },
                ],
                deletedTodos: [],
            };

            const action = {
                type: types.DELETE_TODO,
                id: 1,
            };

            const expectedState = {
                deletedTodos: [
                    {
                        id: 1,
                        text: todoText,
                    },
                ],
                todos: [],
            };

            expect(reducer(startingState, action)).toEqual(expectedState);
        });
    });

    describe('when undeleting a todo', () => {
        it('should return the correct state', () => {
            const startingState = {
                todos: [],
                deletedTodos: [
                    {
                        id: 1,
                        text: todoText,
                    },
                ],
            };

            const action = {
                type: types.UNDELETE_TODO,
                id: 1,
            };

            const expectedState = {
                todos: [
                    {
                        id: 1,
                        text: todoText,
                    },
                ],
                deletedTodos: [],
            };

            expect(reducer(startingState, action)).toEqual(expectedState);
        });
    });
});
