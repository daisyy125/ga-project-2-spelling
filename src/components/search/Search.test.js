import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

// Hou comment: remove any unnecessary comments/unused code from your files. Nice job with these tests!
describe('Search Component', () => {
  let component;

  beforeEach(() => (component = shallow(<Search />)));

  it('should have a form element with className formParent', () => {
    expect(component.find('.formParent').length).toEqual(1);
  });

  it('should have a two elements with className formItem', () => {
    expect(component.find('.formItem').length).toEqual(2);
  });

  it('should have a button that submit search input', () => {
    expect(component.contains('BeeFind')).toBe(true);
  });
});

export default Search;
