import { Game } from '../../app/game';
import * as grid from '../fixtures/grid';

/* startGame() */

test('should initialize values', () => {
    let game = new Game();
    game.startGame();
    expect(game.grid).toEqual(Array(9).fill(''));
    expect(game.isGameActive).toEqual(true);
    expect(game.currentPlayer).toEqual(game.players[0]);
});


/* chooseACell() */

test('should call a series of function when chosen cell is valid', () => {
    let game = new Game();

    game.cellIsMarked = jest.fn();
    game.checkForWinCondition = jest.fn();
    game.checkForCatCondition = jest.fn();
    game.nextPlayer = jest.fn();
    
    game.startGame();
    game.chooseACell(2);

    expect(game.cellIsMarked).toHaveBeenCalledWith(2);
    expect(game.checkForWinCondition).toHaveBeenCalled();
    expect(game.checkForCatCondition).toHaveBeenCalled();
    expect(game.nextPlayer).toHaveBeenCalled();
});


/* isMoveValid() */

test('should be a valid move', () => {
    let game = new Game();
    game.startGame();
    game.grid = grid.gridPartiallyFilled;
    const isMoveValid = game.isMoveValid(4);
    expect(isMoveValid).toEqual(true);
});

test('should be an invalid move', () => {
    let game = new Game();
    game.startGame();
    game.grid = grid.gridPartiallyFilled;
    const isMoveValid = game.isMoveValid(3);
    expect(isMoveValid).toEqual(false);
});


/* cellIsMarked() */

test('should mark a cell with X', () => {
    let game = new Game();
    game.startGame();
    game.cellIsMarked(0);
    expect(game.grid[0]).toEqual('X');
});

test('should mark a cell with O', () => {
    let game = new Game();
    game.startGame();
    game.nextPlayer();
    game.cellIsMarked(8);
    expect(game.grid[8]).toEqual('O');
});


/* checkForWinCondition() */

test('should win when there is a horizontal match', () => {
    let game = new Game();
    game.startGame();
    game.grid = grid.gridHorizontalXWin;
    game.checkForWinCondition();
    expect(game.isGameActive).toEqual(false);
});

test('should win when there is a vertical match', () => {
    let game = new Game();
    game.startGame();
    game.nextPlayer();
    game.grid = grid.gridVerticalOWin;
    game.checkForWinCondition();
    expect(game.isGameActive).toEqual(false);
});

test('should win when there is a diagonal match', () => {
    let game = new Game();
    game.startGame();
    game.grid = grid.gridDiagonalXWin;
    game.checkForWinCondition();
    expect(game.isGameActive).toEqual(false);
});

test('should not win when there is cat', () => {
    let game = new Game();
    game.startGame();
    game.grid = grid.gridIsCat;
    game.checkForWinCondition();
    expect(game.isGameActive).toEqual(true);
});


/* checkForCatCondition() */

test('should be cat when board is fully filled with dataset 1', () => {
    let game = new Game();
    game.startGame();
    game.grid = grid.gridIsCat;
    game.checkForCatCondition();
    expect(game.isGameActive).toEqual(false);
});

test('should be cat when board is fully filled with dataset 2', () => {
    let game = new Game();
    game.startGame();
    game.grid = grid.gridIsCatAgain;
    game.checkForCatCondition();
    expect(game.isGameActive).toEqual(false);
});

test('should not be cat when board is partially filled with', () => {
    let game = new Game();
    game.startGame();
    game.grid = grid.gridPartiallyFilled;
    game.checkForCatCondition();
    expect(game.isGameActive).toEqual(true);
});


/* nextPlayer() */

test('should make current player be player 1 at start of game', () => {
    let game = new Game();
    game.startGame();
    expect(game.currentPlayer).toEqual(game.players[0]);
});

test('should make current player be player 2 after 1 turn', () => {
    let game = new Game();
    game.startGame();
    game.nextPlayer();
    expect(game.currentPlayer).toEqual(game.players[1]);
});

test('should make current player be player 1 after 2 turns', () => {
    let game = new Game();
    game.startGame();
    game.nextPlayer();
    game.nextPlayer();
    expect(game.currentPlayer).toEqual(game.players[0]);
});
