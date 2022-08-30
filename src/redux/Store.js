import {
    legacy_createStore as createStore,
    applyMiddleware
} from "redux";
import logger from "redux-logger";

import RootReducer from './RootReducer';

const Store = createStore(RootReducer, applyMiddleware(logger))

export default Store;