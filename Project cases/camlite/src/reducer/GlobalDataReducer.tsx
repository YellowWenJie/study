export const initState = {
  users: [],
  customers: [],
  cases: [],
  tasks: [],
  user: null,
  customer: null,
  case: null,
  task: null,
};

export function reducer(state: any, { type, ...payload }: any) {
  switch (type) {
    case 'SET_VALUE': {
      return {
        ...state,
        [payload.key]: payload.value,
      };
    }
    case 'UPDATE_VALUE':
      return;
    default: {
      return state;
    }
  }
}
