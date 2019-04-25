import { createStore, combineReducers } from 'redux';

export default () => {
    const store = createStore(
        combineReducers({
            reducer: (state = {}, action) => {
                switch(action.type) {
                    default: 
                    return state;
                }
            }
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};
