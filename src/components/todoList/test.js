/* global describe, expect, it */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TodoList from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('the TodoList component', () => {
    const todos = [
        {
            id: 1,
            text: 'a todo',
        },
    ];

    const component = shallow(<TodoList todos={todos} />);

    it('should render', () => {
        expect(component.exists()).toEqual(true);
    });

    it('should diplay a todo when passed in as a prop', () => {
        expect(component.find('.todo-text').text()).toEqual(todos[0].text);
    });
});
