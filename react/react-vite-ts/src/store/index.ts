import { DispatchAction, InitialState, rootReducer } from "./reducer";
import { createStore } from "redux";

export const store = createStore<InitialState, DispatchAction, null, null>(
  rootReducer
);
