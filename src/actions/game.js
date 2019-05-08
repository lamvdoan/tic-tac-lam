import {
    RESTART_GAME,
    UPDATE_CELL_ON_BOARD,
    SET_PLAYER_WIN_STATUS,
    GET_NEXT_PLAYER,
    SET_CAT_STATUS
} from './types';

export function restartGame() {
    return {
        type: RESTART_GAME
    };
}

export function updateCellOnBoard(index) {
    return {
        type: UPDATE_CELL_ON_BOARD,
        index
    };
}

export function setPlayerWinStatus() {
    return {
        type: SET_PLAYER_WIN_STATUS
    };
}

export function setCatStatus() {
    return {
        type: SET_CAT_STATUS
    };
}

export function getNextPlayer() {
    return {
        type: GET_NEXT_PLAYER
    };
}
