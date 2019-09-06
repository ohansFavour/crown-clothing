import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import {persistStore} from "redux-persist";

const middleware = [];
if(process.env.NODE_ENV === "development"){
 middleware.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store);

export default {store, persistor};