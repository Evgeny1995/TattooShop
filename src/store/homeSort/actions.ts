import { Dispatch } from 'redux';
import { axiosApi } from '../../api';
import { ListActionType, listActionType } from './types.ts';

export const getGoodCardData = () => {
   return async (dispatch: Dispatch<listActionType>) => {
      try {
         const response = await axiosApi.get(`/goodsCards`);
         dispatch({
            type: ListActionType.SET_GOODS_CARDS_DATA,
            payload: response.data,
         });
      } catch (e) {
         console.error(e);
      }
   };
};

// Action -> Middleware (async function for fetching from api) -> Dispatch -> Reducer -> Store
