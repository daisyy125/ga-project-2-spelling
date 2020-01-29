import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';

describe('Nav Component', () => {
    it('should render as expected', () => {
        const component = shallow(<Nav />)
        expect(component.contains('Spelling BusyBees')).toBe(true);
    })
})

export default Nav