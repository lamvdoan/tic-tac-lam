import { Player } from './player';
import { UNOCCUPIED_CELL, MAX_NUMBER_OF_CELLS, PLAYER_ONE_ID, PLAYER_TWO_ID, WINNING_CELLS_LIST } from './properties';

export class Game {
    constructor() {
        this.players = [new Player('X', PLAYER_ONE_ID), new Player('O', PLAYER_TWO_ID)];
    }

    startGame() {
        this.grid = Array(MAX_NUMBER_OF_CELLS).fill(UNOCCUPIED_CELL);
        this.isGameActive = true;
        this.currentPlayer = this.players[0];
        console.log('Game starting...');
    }

    chooseACell(index) {
        if (this.isGameActive) {
            if (this.isMoveValid(index)) {
                this.cellIsMarked(index);
                this.checkForWinCondition();
                this.checkForCatCondition();
                this.nextPlayer();
            } else {
                // Display message to try again
            }
        }
    }

    isMoveValid(index) {
        return (this.grid[index] === UNOCCUPIED_CELL) ? true : false;
    }

    cellIsMarked(index) {
        this.grid[index] = this.currentPlayer.getMarker();
    }

    checkForWinCondition() {
        const getPlayerMarkedCellsReducer = (accumulator, cell, index) => {
            if (cell === this.currentPlayer.getMarker()) {
                accumulator.push(index);
            }

            return accumulator;
        };

        const playerCells = this.grid.reduce(getPlayerMarkedCellsReducer, []);

        for (let i = 0; i < WINNING_CELLS_LIST.length; i++) {
            let winningCells = Array.from(WINNING_CELLS_LIST[i]);
            let didPlayerWin = winningCells.every(cell => playerCells.includes(cell));

            if (didPlayerWin) {
                this.isGameActive = false;
                break;

            // display victory for specified player
            }
        }
    }

    checkForCatCondition() {
        if (this.isGameActive) {
            const countOfOccupiedCells = this.grid.filter(cell => cell != UNOCCUPIED_CELL);

            if (countOfOccupiedCells.length == MAX_NUMBER_OF_CELLS) {
                this.isGameActive = false;

                // display cat condition
            }
        }
    }

    nextPlayer() {
        if (this.isGameActive) {
            this.currentPlayer = (this.currentPlayer.getPlayerId() === PLAYER_ONE_ID) ? this.players[1] : this.players[0];

            // display whose turn
        }
    }
}
