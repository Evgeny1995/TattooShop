import { ListActionType, listActionType, ListState } from './types.ts';

const initialState: ListState = {
  list: [],
  list2: [],
};

export const listReducer = (
  state = initialState,
  action: listActionType,
): ListState => {
  switch (action.type) {
    case ListActionType.SET_LIST:
      return { ...state, list: action.payload };
    case ListActionType.SET_LIST2:
      return { ...state, list2: action.payload };
    default:
      return state;
  }
};
