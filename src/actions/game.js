import {
    RESTART_GAME,
    UPDATE_GRID_ELEMENT,
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
        type: RESTART_GAME,
    };
}

export function updateGridElement(index) {
    return {
        type: UPDATE_GRID_ELEMENT,
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

export function isMoveValid(index) {
    return (dispatch, getState) =>  {
        return (getState().game.grid[index] === UNOCCUPIED_CELL) ? true : false;
    }
}

export function checkForWinCondition() {
    return (dispatch, getState) => {
        const game = getState().game;

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
                dispatch(setGameInActive());
                // TODO: display victory for specified player
                break;
            }
        }
    }
}

export function checkForCatCondition() {
    return (dispatch, getState) =>  {
        const game = getState().game;

        if (game.isGameActive) {
            const countOfOccupiedCells = game.grid.filter(cell => cell != UNOCCUPIED_CELL);

            if (countOfOccupiedCells.length == MAX_NUMBER_OF_CELLS) {
                dispatch(setGameInActive());

                // TODO: display cat condition
            }
        }
    }
}

export function chooseACell(index) {
    return (dispatch, getState) =>  {
        const game = getState().game;

        if (game.isGameActive) {
            const validMove = dispatch(isMoveValid(index));

            if (validMove) {
                dispatch(updateGridElement(index));
                dispatch(checkForWinCondition());
                dispatch(checkForCatCondition());
                
                if (game.isGameActive) {
                    dispatch(getNextPlayer());
                }
            } else {
            // TODO: Display message to try again
            }
        }
    }
}
