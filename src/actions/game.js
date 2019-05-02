import {
    RESTART_GAME,
    UPDATE_CELL_ON_BOARD,
    SET_GAME_INACTIVE,
    GET_NEXT_PLAYER
} from './types';

import { 
    MAX_NUMBER_OF_CELLS, 
    UNOCCUPIED_CELL, 
    WINNING_CELLS_LIST
} from '../properties/game';

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

export function setGameInActive() {
    return {
        type: SET_GAME_INACTIVE
    };
}

export function getNextPlayer() {
    return {
        type: GET_NEXT_PLAYER
    };
}

function isThereAWin(game) {
    const getPlayerMarkedCellsReducer = (accumulator, cellMarker, index) => {
        if (cellMarker === game.currentPlayer.getMarker()) {
            accumulator.push(index);
        }

        return accumulator;
    };

    const playerCells = game.grid.reduce(getPlayerMarkedCellsReducer, []);

    for (let i = 0; i < WINNING_CELLS_LIST.length; i++) {
        let winningCells = Array.from(WINNING_CELLS_LIST[i]);
        let didPlayerWin = winningCells.every(cell => playerCells.includes(cell));

        if (didPlayerWin) {
            return true;
        }
    }

    return false;
}

function isThereACat(game) {
    if (game.isGameActive) {
        const countOfOccupiedCells = game.grid.filter(cell => cell != UNOCCUPIED_CELL);
        return countOfOccupiedCells.length == MAX_NUMBER_OF_CELLS;
    }
}

export function checkEndGameCondition() {
    return (dispatch, getState) => {
        const game = getState().game;

        if (game.isGameActive) {
            if (isThereAWin(game) || isThereACat(game)) {
                dispatch(setGameInActive());
            } else {
                dispatch(getNextPlayer());
            }
        }
    }
}

function isMoveValid(game, index) {
    return game.grid[index] === UNOCCUPIED_CELL;
}

export function chooseACell(index) {
    return (dispatch, getState) =>  {
        const game = getState().game;

        if (game.isGameActive && isMoveValid(game, index)) {
            dispatch(updateCellOnBoard(index));
        }
    }
}
