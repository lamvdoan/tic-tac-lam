import React from 'react';
import { shallow } from 'enzyme';
import { Board } from '../../components/Board';

test('should move be valid', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper).toMatchSnapshot();
});
