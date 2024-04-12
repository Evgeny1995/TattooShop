import { TypeList1 } from '../../types/list.ts';

export interface ListState {
  goodsCardsData?: TypeList1[];
}
export enum ListActionType {
  SET_GOODS_CARDS_DATA = 'SET_GOODS_CARDS_DATA',
}

interface SetGoodsCardsDataAction {
  type: ListActionType.SET_GOODS_CARDS_DATA;
  payload: TypeList1[];
}

export type listActionType = SetGoodsCardsDataAction;
