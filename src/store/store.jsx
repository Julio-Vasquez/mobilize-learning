import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { ENV } from "./../common/config";

import rootSaga from "./Sagas";
import rootReducers from "./Reducers";

const sagaMiddleware = createSagaMiddleware();
let middleware = [sagaMiddleware];

if (ENV === "development") middleware = [...middleware, logger];

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export default store;
