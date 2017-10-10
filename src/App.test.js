/* global it, expect, jest */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { App } from './App';
import { initialState } from './reducers/';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const mockFunction = jest.fn();

    const component = shallow(<App
                              state={initialState}
                              submitTodo={mockFunction}
                              deleteTodo={mockFunction}
                              tab={'todo'}
                              patients={[]}
                              getPatients={mockFunction}
                              switchTab={mockFunction}
                              undeleteTodo={mockFunction}
                              deletedTodos={[]}
                              todos={[]}
                              />);
    expect(component.exists()).toEqual(true);
});
