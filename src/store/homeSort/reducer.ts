import { ListActionType, listActionType, ListState } from './types.ts';

const initialState: ListState = {
  goodsCardsData: [],
};

export const goodsCardsReducer = (
  state = initialState,
  action: listActionType,
): ListState => {
  switch (action.type) {
    case ListActionType.SET_GOODS_CARDS_DATA:
      return { ...state, goodsCardsData: action.payload };

    default:
      return state;
  }
};
