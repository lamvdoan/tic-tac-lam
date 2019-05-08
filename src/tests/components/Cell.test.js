import React from 'react';
import { shallow } from 'enzyme';
import { Cell } from '../../components/Cell';
import { X_CELL, O_CELL, UNOCCUPIED_CELL } from '../../app/properties';

let game;
let chooseACell;

beforeEach(() => {
    game = {
        grid: [X_CELL, O_CELL, UNOCCUPIED_CELL]
    };
    chooseACell = jest.fn();
});

test('should render cell', () => {
    let id = 0;
    let wrapper = shallow(<Cell chooseACell={chooseACell} id={id} game={game}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should handle onClick', () => {
    let id = 0;
    let wrapper = shallow(<Cell chooseACell={chooseACell} id={id} game={game}/>);
    wrapper.find('div').simulate('click');
    expect(chooseACell).toHaveBeenLastCalledWith(id);
});

test('should get X marker', () => {
    let id = 0;
    let wrapper = shallow(<Cell chooseACell={chooseACell} id={id} game={game}/>);
    expect(wrapper.instance().getMarker()).toEqual(X_CELL);
});

test('should get O marker', () => {
    let id = 1;
    let wrapper = shallow(<Cell chooseACell={chooseACell} id={id} game={game}/>);
    expect(wrapper.instance().getMarker()).toEqual(O_CELL);
});

test('should get unoccupied marker', () => {
    let id = 2;
    let wrapper = shallow(<Cell chooseACell={chooseACell} id={id} game={game}/>);
    expect(wrapper.instance().getMarker()).toEqual(UNOCCUPIED_CELL);
});
