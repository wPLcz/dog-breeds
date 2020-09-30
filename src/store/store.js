import { createStore,compose, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";

import rootReducer from './reducers';

// SAGA SETUP AND RUNNING
import sagaManager from "./sagaManager";
const sagaMiddleware = createSagaMiddleware();

const createAppStore = compose(
  applyMiddleware(sagaMiddleware)
)(createStore);

// STORE SETUP
export default function configureStore(initialState) {

  const store = createAppStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  sagaManager.startSagas(sagaMiddleware);

  //TODO hot module replacement
  if (module.hot) {
    module.hot.accept("./reducers", () =>
      store.replaceReducer(require("./reducers").default)
    );

    module.hot.accept("./sagaManager", () => {
      sagaManager.cancelSagas(store);
      require("./sagaManager").default.startSagas(sagaMiddleware);
    });
  }
  return store
}
