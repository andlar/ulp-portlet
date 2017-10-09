/* global describe, expect, it */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PatientList from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('the PatiengList component', () => {
    const props = {
        status: 'active',
        patients: [
            {
                id: 1,
                name: 'John',
                status: 'active',
            },
            {
                id: 2,
                name: 'James',
                status: 'discharged',
            },
        ],
    };

    const component = shallow(<PatientList {...props} />);

    it('should render', () => {
        expect(component.exists()).toEqual(true);
    });

    it('should diplay a patient when passed in as a prop', () => {
        expect(component.find('.patient-name').at(0).text()).toEqual(props.patients[0].name);
    });

    it('should filter patients by status', () => {
        expect(component.find('.patient-name').length).toEqual(1);
    });
});
