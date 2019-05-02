import { Player } from '../app/player';
import { 
    MAX_NUMBER_OF_CELLS, 
    UNOCCUPIED_CELL, 
    PLAYER_ONE_ID, 
    PLAYER_TWO_ID, 
    X_CELL, 
    O_CELL
} from '../properties/game';

import { 
    RESTART_GAME, 
    UPDATE_CELL_ON_BOARD, 
    SET_GAME_INACTIVE, 
    GET_NEXT_PLAYER
} from '../actions/types';

const players = [
    new Player(X_CELL, PLAYER_ONE_ID), 
    new Player(O_CELL, PLAYER_TWO_ID)
];

const gameReducerDefaultState = {
    grid: Array(MAX_NUMBER_OF_CELLS).fill(UNOCCUPIED_CELL),
    isGameActive: true,
    players: players,
    currentPlayer: players[0]
};

export default (state = gameReducerDefaultState, action) => {
    switch (action.type) {
        case RESTART_GAME:
            return {
                ...gameReducerDefaultState
            };
        case UPDATE_CELL_ON_BOARD:
            return {
                ...state, 
                grid: state.grid.map((current, index) => {
                    if (index == action.index) {
                        return state.currentPlayer.getMarker();
                    }

                    return current;
                })
            };
        case SET_GAME_INACTIVE:
            return {
                ...state, 
                isGameActive: false
            };
        case GET_NEXT_PLAYER:
            return {
                ...state, 
                currentPlayer: state.currentPlayer.getPlayerId() === state.players[0].getPlayerId() ? state.players[1] : state.players[0]
            };
        default:
            return state;
    }
};
