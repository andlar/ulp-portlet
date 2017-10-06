/* global describe, expect, it, jest */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TodoList from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('the TodoList component', () => {
    const deleteMock = jest.fn();

    const props = {
        todos: [
            {
                id: 1,
                text: 'a todo',
            },
        ],
        deleteTodo: deleteMock,
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
});
