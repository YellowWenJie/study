import { createContext, useReducer } from 'react';
import { initState, reducer } from '../reducer/GlobalDataReducer';

export interface CTX {
  state: any;
  dispatch: React.Dispatch<any>;
  getValue: (key: string) => any;
  setValue: (key: any, value: any) => void;
}

export const Context = createContext({});

export function ConfigContext(props: any) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, dispatch] = useReducer(reducer, initState);
  const getValue = (key: string) => state[key];
  const setValue = (key: any, value: any) => {
    return dispatch({ type: 'SET_VALUE', key, value });
  };

  const updateValue = (key: any, value: any) => {
    return dispatch({ type: 'UPDATE_VALUE', key, value });
  };

  const ctx = {
    state,
    dispatch,
    getValue,
    setValue,
    updateValue,
  };

  return <Context.Provider value={ctx}>{props.children}</Context.Provider>;
}
