import { Dispatch } from 'redux';
import { axiosApi } from '../../api';
import { ListActionType, listActionType } from './types.ts';

export const getList = () => {
  return async (dispatch: Dispatch<listActionType>) => {
    try {
      const response = await axiosApi.get(`/catalCategoryNestedData`);
      dispatch({
        type: ListActionType.SET_LIST,
        payload: response.data,
      });
    } catch (e) {
      console.error(e);
    }
  };
};

export const getList2 = () => {
  return async (dispatch: Dispatch<listActionType>) => {
    try {
      const response = await axiosApi.get(`/brandsList`);
      dispatch({
        type: ListActionType.SET_LIST2,
        payload: response.data,
      });
    } catch (e) {
      console.error(e);
    }
  };
};

// Action Creator
// Action
// Middleware
// Dispatcher
// Reducer
// Store

// const getCarNumber = () => {
//   return async () => {
//
//   }
// }

// OAuth2 -- JWT token, https://jwt.io/

// ----------------------------

// Server (data)
