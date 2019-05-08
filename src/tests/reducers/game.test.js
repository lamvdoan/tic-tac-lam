import { gameReducerDefaultState, alternateGameReducerState } from '../fixtures/game';
import gameReducer from '../../reducers/game';
import { X_CELL, O_CELL } from '../../app/properties';
import {
    RESTART_GAME,
    UPDATE_CELL_ON_BOARD,
    SET_PLAYER_WIN_STATUS,
    GET_NEXT_PLAYER,
    SET_CAT_STATUS
} from '../../actions/types';

test('should set default state', () => {
    const results = gameReducer(undefined, { type: '@@INIT' });
    expect(results).toEqual(gameReducerDefaultState);
});

test('should restart game', () => {
    const action = {
        type: RESTART_GAME
    };

    const results = gameReducer(gameReducerDefaultState, action);
    expect(results).toEqual(gameReducerDefaultState);
});

test('should update board with player 1 marker', () => {
    const index = 0;
    const action = {
        type: UPDATE_CELL_ON_BOARD,
        index
    };

    const results = gameReducer(gameReducerDefaultState, action);
    expect(results.grid[index]).toEqual(X_CELL);
});

test('should update board with player 2 marker', () => {
    const index = 8;
    const action = {
        type: UPDATE_CELL_ON_BOARD,
        index
    };

    const results = gameReducer(alternateGameReducerState, action);
    expect(results.grid[index]).toEqual(O_CELL);
});

test('should set player win status', () => {
    const action = {
        type: SET_PLAYER_WIN_STATUS
    };

    const results = gameReducer(gameReducerDefaultState, action);
    expect(results.isGameActive).toEqual(false);
    expect(results.didPlayerWinGame).toEqual(true);
});

test('should set player cat status', () => {
    const action = {
        type: SET_CAT_STATUS
    };

    const results = gameReducer(gameReducerDefaultState, action);
    expect(results.isGameActive).toEqual(false);
    expect(results.didPlayerWinGame).toEqual(false);
});

test('should set current player to player 1', () => {
    const action = {
        type: GET_NEXT_PLAYER
    };

    const results = gameReducer(gameReducerDefaultState, action);
    expect(results.currentPlayer).toEqual(results.players[1]);
});

test('should set current player to player 0', () => {
    const action = {
        type: GET_NEXT_PLAYER
    };

    const results = gameReducer(alternateGameReducerState, action);
    expect(results.currentPlayer).toEqual(results.players[0]);
});
