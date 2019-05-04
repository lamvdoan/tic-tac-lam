import {
    RESTART_GAME,
    UPDATE_CELL_ON_BOARD,
    SET_PLAYER_WIN_STATUS,
    GET_NEXT_PLAYER,
    SET_CAT_STATUS
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

function isMoveValid(game, index) {
    return game.grid[index] === UNOCCUPIED_CELL;
}

export function chooseACell(index) {
    return (dispatch, getState) =>  {
        const game = getState().game;

        if (game.isGameActive && isMoveValid(game, index)) {
            dispatch(updateCellOnBoard(index));
            const updatedGame = {
                ...game, 
                grid: game.grid.map((current, oldIndex) => {
                    if (oldIndex == index) {
                        return game.currentPlayer.getMarker();
                    }

                    return current;
                })
            }

            dispatch(checkEndGameCondition(updatedGame));
        }
    }
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
    const countOfOccupiedCells = game.grid.filter(cell => cell != UNOCCUPIED_CELL);
    return countOfOccupiedCells.length == MAX_NUMBER_OF_CELLS;
}

function checkEndGameCondition(game) {
    return (dispatch, getState) => {

        if (isThereAWin(game)) {
            dispatch(setPlayerWinStatus());
        } else if (isThereACat(game)) {
            dispatch(setCatStatus());
        } else {
            dispatch(getNextPlayer());
        }
    }
}
