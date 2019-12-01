import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

export const persistor = persistStore(store);

export default { store, persistStore };
