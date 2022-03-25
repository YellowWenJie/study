import { Action, Reducer } from "redux";

export interface InitialState {
  name: string;
  address: string;
}

export const initialState: InitialState = {
  name: "",
  address: "",
};

export enum ActionType {
  UpdateName,
  UpdateAddress,
  DeleteName,
  DeleteAddress,
}

export interface DispatchAction extends Action<ActionType> {
  payload: Partial<InitialState>;
}

export const rootReducer: Reducer<InitialState, DispatchAction> = (
  state = initialState,
  action
) => {
  if (action.type === ActionType.UpdateName) {
    return { ...state, name: action.payload.name || "" };
  } else if (action.type === ActionType.DeleteName) {
    return { ...state, name: "" };
  } else if (action.type === ActionType.DeleteAddress) {
    return { ...state, address: "" };
  } else if (action.type === ActionType.UpdateAddress) {
    return { ...state, name: action.payload.name || "" };
  } else return state;
};
