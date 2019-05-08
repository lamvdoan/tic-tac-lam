import { 
    MAX_NUMBER_OF_CELLS, 
    UNOCCUPIED_CELL, 
    WINNING_CELLS_LIST
} from '../app/properties';

import { 
    updateCellOnBoard, 
    getNextPlayer, 
    setPlayerWinStatus, 
    setCatStatus 
} from '../actions/game';

function isMoveValid(game, index) {
    return game.grid[index] === UNOCCUPIED_CELL;
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

export function chooseACell(index) {
    return (dispatch, getState) =>  {
        const game = getState().game;

        if (game.isGameActive && isMoveValid(game, index)) {
            dispatch(updateCellOnBoard(index));
            const updatedGame = {
                ...game, 
                grid: game.grid.map((current, currentIndex) => {
                    return currentIndex == index ?  game.currentPlayer.getMarker() : current;
                })
            };

            if (isThereAWin(updatedGame)) {
                dispatch(setPlayerWinStatus());
            } else if (isThereACat(updatedGame)) {
                dispatch(setCatStatus());
            } else {
                dispatch(getNextPlayer());
            }
        }
    }
}
