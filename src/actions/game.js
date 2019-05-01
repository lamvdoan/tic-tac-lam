import { UPDATE_GRID_ELEMENT, SET_IS_GAME_ACTIVE, SET_CURRENT_PLAYER } from '../properties/actions';

export function cellIsMarked(index) {
    return {
        type: UPDATE_GRID_ELEMENT,
        index
    };
}

export function setIsGameActive() {
    return {
        type: SET_IS_GAME_ACTIVE,
        isGameActive: false
    };
}

export function setCurrentPlayer() {
    return {
        type: SET_CURRENT_PLAYER
    };
}
