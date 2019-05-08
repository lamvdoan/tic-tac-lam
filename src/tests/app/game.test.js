import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { chooseACell } from '../../app/game';
import {
    UPDATE_CELL_ON_BOARD,
    SET_PLAYER_WIN_STATUS,
    SET_CAT_STATUS,
    GET_NEXT_PLAYER
} from '../../actions/types';

import {
    boardIsCat,
    boardIsCatAgain,
    boardHorizontalXWin,
    boardVerticalOWin,
    boardPartiallyFilled
} from '../fixtures/board';
import { gameReducerDefaultState, alternateGameReducerState } from '../fixtures/game';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const path = require('path');
const appGamePath = path.join(__dirname, '../../app/game.js');

const isMoveValid = require(appGamePath).__get__('isMoveValid');
const isThereAWin = require(appGamePath).__get__('isThereAWin');
const isThereACat = require(appGamePath).__get__('isThereACat');


test('should be a valid move', () => {
    const game = {
        grid: boardPartiallyFilled
    };
    const index = 7;

    const results = isMoveValid(game, index);
    expect(results).toEqual(true);
});

test('should be an invalid move', () => {
    const game = {
        grid: boardPartiallyFilled
    };
    const index = 0;

    const results = isMoveValid(game, index);
    expect(results).toEqual(false);
});

test('should win when x matches', () => {
    const game = {
        ...gameReducerDefaultState,
        grid: boardHorizontalXWin
    };

    const results = isThereAWin(game);
    expect(results).toEqual(true);
});

test('should win when o matches', () => {
    const game = {
        ...alternateGameReducerState,
        grid: boardVerticalOWin
    };

    const results = isThereAWin(game);
    expect(results).toEqual(true);
});

test('should not be a win when there is a cat', () => {
    const game = {
        ...alternateGameReducerState,
        grid: boardIsCat
    };

    const results = isThereAWin(game);
    expect(results).toEqual(false);
});

test('should not be a win when board is partially filled', () => {
    const game = {
        ...alternateGameReducerState,
        grid: boardPartiallyFilled
    };

    const results = isThereAWin(game);
    expect(results).toEqual(false);
});

test('should be a cat with dataset one', () => {
    const game = {
        ...alternateGameReducerState,
        grid: boardIsCat
    };

    const results = isThereACat(game);
    expect(results).toEqual(true);
});

test('should be a cat with dataset two', () => {
    const game = {
        ...alternateGameReducerState,
        grid: boardIsCatAgain
    };

    const results = isThereACat(game);
    expect(results).toEqual(true);
});

test('should not be a cat when board is partially filled', () => {
    const game = {
        ...alternateGameReducerState,
        grid: boardPartiallyFilled
    };

    const results = isThereACat(game);
    expect(results).toEqual(false);
});

test('should choose a cell and dispatch setPlayerWinStatus actions', () => {
    const index = 7;

    const expectedActions = [
        { type: UPDATE_CELL_ON_BOARD, index },
        { type: SET_PLAYER_WIN_STATUS }
    ];

    const store = mockStore({
        game: {
            ...gameReducerDefaultState,
            grid: boardPartiallyFilled
        }
    });

    store.dispatch(chooseACell(index));
    expect(store.getActions()).toEqual(expectedActions);
});

test('should choose a cell and dispatch setCatStatus actions', () => {
    const index = 7;

    const expectedActions = [
        { type: UPDATE_CELL_ON_BOARD, index },
        { type: SET_CAT_STATUS }
    ];

    const store = mockStore({
        game: {
            ...alternateGameReducerState,
            grid: boardPartiallyFilled
        }
    });

    store.dispatch(chooseACell(index));
    expect(store.getActions()).toEqual(expectedActions);
});

test('should choose a cell and dispatch setPlayerWinStatus actions', () => {
    const index = 7;

    const expectedActions = [
        { type: UPDATE_CELL_ON_BOARD, index },
        { type: GET_NEXT_PLAYER }
    ];

    const store = mockStore({
        game: {
            ...gameReducerDefaultState
        }
    });

    store.dispatch(chooseACell(index));
    expect(store.getActions()).toEqual(expectedActions);
});

test('should choose an invalid cell and dispatch no actions', () => {
    const index = 0;

    const store = mockStore({
        game: {
            ...gameReducerDefaultState,
            grid: boardPartiallyFilled
        }
    });

    store.dispatch(chooseACell(index));
    expect(store.getActions()).toEqual([]);
});
