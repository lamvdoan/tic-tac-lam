import Player from '../../app/player';
import { 
    MAX_NUMBER_OF_CELLS, 
    UNOCCUPIED_CELL, 
    PLAYER_ONE_ID, 
    PLAYER_TWO_ID, 
    X_CELL, 
    O_CELL
} from '../../app/properties';

const players = [
    new Player(X_CELL, PLAYER_ONE_ID), 
    new Player(O_CELL, PLAYER_TWO_ID)
];

const gameReducerDefaultState = {
    grid: Array(MAX_NUMBER_OF_CELLS).fill(UNOCCUPIED_CELL),
    isGameActive: true,
    didPlayerWinGame: false,
    players: players,
    currentPlayer: players[0]
};

const alternateGameReducerState = {
    grid: Array(MAX_NUMBER_OF_CELLS).fill(UNOCCUPIED_CELL),
    isGameActive: true,
    didPlayerWinGame: false,
    players: players,
    currentPlayer: players[1]
};

export { gameReducerDefaultState, alternateGameReducerState };
