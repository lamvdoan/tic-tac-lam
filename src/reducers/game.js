import { Player } from '../app/player';
import { MAX_NUMBER_OF_CELLS, UNOCCUPIED_CELL, PLAYER_ONE_ID, PLAYER_TWO_ID } from '../properties/game';
import { UPDATE_GRID_ELEMENT, SET_IS_GAME_ACTIVE, SET_CURRENT_PLAYER } from '../properties/actions';

const players = [
    new Player('X', PLAYER_ONE_ID), 
    new Player('O', PLAYER_TWO_ID)
];

const gameReducerDefaultState = {
    grid: Array(MAX_NUMBER_OF_CELLS).fill(UNOCCUPIED_CELL),
    isGameActive: true,
    players: players,
    currentPlayer: players[0],
};

export default (state = gameReducerDefaultState, action) => {
    switch (action.type) {
        case 'UPDATE_GRID_ELEMENT':
            return {
                ...state, 
                grid: state.grid.map((current, index) => {
                    if (index == action.index) {
                        return state.currentPlayer.getMarker();
                    }

                    return current;
                })
            };
        case 'SET_IS_GAME_ACTIVE':
            return {
                ...state, 
                isGameActive: false
            };
        case 'SET_CURRENT_PLAYER':
            return {
                ...state, 
                currentPlayer: state.currentPlayer.getPlayerId() === PLAYER_ONE_ID ? state.players[1] : state.players[0]
            };
        default:
            return state;
    }
};
