/* global describe, expect, it, jest */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TodoList from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('the TodoList component', () => {
    const deleteMock = jest.fn();
    const undeleteMock = jest.fn();

    const props = {
        todos: [
            {
                id: 1,
                text: 'a todo',
            },
        ],
        deletedTodos: [
            {
                id: 2,
                text: 'a deleted todo',
            },
        ],
        deleteTodo: deleteMock,
        undeleteTodo: undeleteMock,
    };

    const component = shallow(<TodoList {...props} />);

    it('should render', () => {
        expect(component.exists()).toEqual(true);
    });

    it('should diplay a todo when passed in as a prop', () => {
        expect(component.find('.todo-text').text()).toEqual(props.todos[0].text);
    });

    it('should call the delete function when required', () => {
        expect(deleteMock.mock.calls.length).toEqual(0);
        component.find('.todo-delete').simulate('click');
        expect(deleteMock.mock.calls.length).toEqual(1);
    });

    it('should call the undelete function when required', () => {
        expect(undeleteMock.mock.calls.length).toEqual(0);
        component.find('.todo-undelete').simulate('click');
        expect(undeleteMock.mock.calls.length).toEqual(1);
    });
});
