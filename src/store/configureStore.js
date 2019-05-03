import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import gameReducer from '../reducers/game';

export default () => {
    const reducer = combineReducers({
        game: gameReducer
    });

    const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
        ?   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

    const enhancer = composeEnhancers(applyMiddleware(thunk));
    const store = createStore(reducer, enhancer);

    return store;
};
