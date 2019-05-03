import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import gameReducer from '../reducers/game';

export default () => {
    const reducer = combineReducers({
        game: gameReducer
    });

    const store = createStore(
        reducer,
        compose(
            applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );

    return store;
};
