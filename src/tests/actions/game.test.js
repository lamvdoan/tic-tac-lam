import { 
    restartGame,
    updateCellOnBoard,
    setPlayerWinStatus,
    setCatStatus,
    getNextPlayer
 } from '../../actions/game';

 import {
    RESTART_GAME,
    UPDATE_CELL_ON_BOARD,
    SET_PLAYER_WIN_STATUS,
    GET_NEXT_PLAYER,
    SET_CAT_STATUS
} from '../../actions/types';

test('should set up restart action object', () => {
    const results = restartGame();
    expect(results).toEqual({
        type: RESTART_GAME
    });
});

test('should set up update cell on board action object', () => {
    const index = 0;
    const results = updateCellOnBoard(0);
    expect(results).toEqual({
        type: UPDATE_CELL_ON_BOARD,
        index
    });
});

test('should set up set player win status action object', () => {
    const results = setPlayerWinStatus();
    expect(results).toEqual({
        type: SET_PLAYER_WIN_STATUS
    });
});

test('should set up set player cat status action object', () => {
    const results = setCatStatus();
    expect(results).toEqual({
        type: SET_CAT_STATUS
    });
});

test('should set up get next player action object', () => {
    const results = getNextPlayer();
    expect(results).toEqual({
        type: GET_NEXT_PLAYER
    });
});
