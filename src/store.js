import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { reducer } from './reducers/';
import mySaga from './reducers/sagas';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    reducer,
});

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(mySaga);

export default store;
