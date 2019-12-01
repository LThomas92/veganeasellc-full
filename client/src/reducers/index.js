import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cartReducer";
import userReducer from "./userReducer";

import shopReducer from "./shopReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
