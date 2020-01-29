import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('Search Component', () => {
    let component;

    beforeEach(() => (
        component = shallow(<Search />)
    ))
    
    it('should have a form element with className formParent', () => {
        // console.log('Hello World', component.find('.formParent').length)
        expect(component.find('.formParent').length).toEqual(1);
    });

    it('should have a two elements with className formItem', () => {
        // console.log('Hello World', component.find('.formItem').length);
        expect(component.find('.formItem').length).toEqual(2);
    })

    it('should have a button that submit search input', () => {
        expect(component.contains('BeeFind')).toBe(true);
    })

})

export default Search;