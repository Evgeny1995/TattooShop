import { TypeList1 } from '../../types/list.ts';

export interface ListState {
  list?: TypeList1[];
  list2?: TypeList1[];
}
export enum ListActionType {
  SET_LIST = 'SET_LIST',
  SET_LIST2 = 'SET_LIST2',
}

interface SetListAction {
  type: ListActionType.SET_LIST;
  payload: TypeList1[];
}

interface SetList2Action {
  type: ListActionType.SET_LIST2;
  payload: TypeList1[];
}

export type listActionType = SetList2Action | SetListAction;
