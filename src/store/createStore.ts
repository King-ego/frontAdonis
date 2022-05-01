import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import reduces from './module/rootReduce';
import rootSaga from './module/rootSaga';

const sagaMiddleware = createSagaMiddleware();
export const rootReduce = createStore(
  reduces,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
