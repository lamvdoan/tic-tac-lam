import React from 'react';
import { shallow } from 'enzyme';
import { RestartButton } from '../../components/RestartButton';

let wrapper;
let restartGame;

beforeEach(() => {
    restartGame = jest.fn();
    wrapper = shallow(<RestartButton restartGame={restartGame}/>);
});

test('should render restart button', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onClick', () => {
    wrapper.find('button').simulate('click');
    expect(restartGame).toHaveBeenCalled();
});
