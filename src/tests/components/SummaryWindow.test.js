import React from 'react';
import { shallow } from 'enzyme';
import { SummaryWindow } from '../../components/SummaryWindow';
import { gameReducerDefaultState, alternateGameReducerState } from '../fixtures/game';

test('should render summary window with player 1\'s turn', () => {
    const game = {
        ...gameReducerDefaultState,
    }
    const wrapper = shallow(<SummaryWindow game={game} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render summary window with player 2\'s turn', () => {
    const game = {
        ...alternateGameReducerState,
    }
    const wrapper = shallow(<SummaryWindow game={game} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render summary window with player 1 winning', () => {
    const game = {
        ...gameReducerDefaultState,
        isGameActive: false,
        didPlayerWinGame: true
    }
    const wrapper = shallow(<SummaryWindow game={game} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render summary window with player 2 winning', () => {
    const game = {
        ...alternateGameReducerState,
        isGameActive: false,
        didPlayerWinGame: true
    }
    const wrapper = shallow(<SummaryWindow game={game} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render summary window with cat', () => {
    const game = {
        ...alternateGameReducerState,
        isGameActive: false,
        didPlayerWinGame: false
    }
    const wrapper = shallow(<SummaryWindow game={game} />);
    expect(wrapper).toMatchSnapshot();
});
