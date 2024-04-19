import { Dispatch } from 'redux';
import { axiosApi } from '../../api';
import { ListActionType, listActionType } from './types.ts';

export const getCatalNestedList = () => {
   return async (dispatch: Dispatch<listActionType>) => {
      try {
         const response = await axiosApi.get(`/catalCategoryNestedData`);
         dispatch({
            type: ListActionType.SET_CATALOG_NESTED_LIST,
            payload: response.data,
         });
      } catch (e) {
         console.error(e);
      }
   };
};

export const getCatalogByBrandsList = () => {
   return async (dispatch: Dispatch<listActionType>) => {
      try {
         const response = await axiosApi.get(`/brandsList`);
         dispatch({
            type: ListActionType.SET_CATALOG_BY_BRANDS_LIST,
            payload: response.data,
         });
      } catch (e) {
         console.error(e);
      }
   };
};

export const getDeskHeaderAnotherList = () => {
   return async (dispatch: Dispatch<listActionType>) => {
      try {
         const response = await axiosApi.get(`/deskNavList`);
         dispatch({
            type: ListActionType.SET_DESK_HEADER_ANOTHER_LIST,
            payload: response.data,
         });
      } catch (e) {
         console.error(e);
      }
   };
};

export const getMobCatalogCategoryDataList = () => {
   return async (dispatch: Dispatch<listActionType>) => {
      try {
         const response = await axiosApi.get(`/mobCatalCategoryData`);
         dispatch({
            type: ListActionType.SET_MOB_CATALOG_CATEGORY_DATA_LIST,
            payload: response.data,
         });
      } catch (e) {
         console.error(e);
      }
   };
};

export const getMobCatalogCategoryDataList2 = () => {
   return async (dispatch: Dispatch<listActionType>) => {
      try {
         const response = await axiosApi.get(`/mobCatalCategoryData2`);
         dispatch({
            type: ListActionType.SET_MOB_CATALOG_CATEGORY_DATA_LIST2,
            payload: response.data,
         });
      } catch (e) {
         console.error(e);
      }
   };
};

export const getProductPreviewSliderDataList = () => {
   return async (dispatch: Dispatch<listActionType>) => {
      try {
         const response = await axiosApi.get(`/productPreviewSliderData`);
         dispatch({
            type: ListActionType.SET_PRODUCT_PREVIEW_SLIDER_DATA_LIST,
            payload: response.data,
         });
      } catch (e) {
         console.error(e);
      }
   };
};

export const getCatalogDataMobTabList = () => {
   return async (dispatch: Dispatch<listActionType>) => {
      try {
         const response = await axiosApi.get(`/catalogListDataMobTab`);
         dispatch({
            type: ListActionType.SET_CATALOG_DATA_MOB_TAB_LIST,
            payload: response.data,
         });
      } catch (e) {
         console.error(e);
      }
   };
};

export const getCatalogDataDeskList = () => {
   return async (dispatch: Dispatch<listActionType>) => {
      try {
         const response = await axiosApi.get(`/catalogListDataDesk`);
         dispatch({
            type: ListActionType.SET_CATALOG_DATA_DESK_LIST,
            payload: response.data,
         });
      } catch (e) {
         console.error(e);
      }
   };
};

export const getHomeSeasonalOffersDataList = () => {
   return async (dispatch: Dispatch<listActionType>) => {
      try {
         const response = await axiosApi.get(`/homeSeasonalOffersData`);
         dispatch({
            type: ListActionType.SET_HOME_SEASONAL_OFFERS_DATA_LIST,
            payload: response.data,
         });
      } catch (e) {
         console.error(e);
      }
   };
};

export const getMobTabHomePopularBrandsArrList = () => {
   return async (dispatch: Dispatch<listActionType>) => {
      try {
         const response = await axiosApi.get(`/mobTabHomePopularBrandsArr`);
         dispatch({
            type: ListActionType.SET_MOB_TAB_HOME_POPULAR_BRANDS_ARR_LIST,
            payload: response.data,
         });
      } catch (e) {
         console.error(e);
      }
   };
};

export const getDeskHomePopularBrandsArrList = () => {
   return async (dispatch: Dispatch<listActionType>) => {
      try {
         const response = await axiosApi.get(`/deskHomePopularBrandsArr`);
         dispatch({
            type: ListActionType.SET_DESK_HOME_POPULAR_BRANDS_ARR_LIST,
            payload: response.data,
         });
      } catch (e) {
         console.error(e);
      }
   };
};

export const getHomeReviewArrDataList = () => {
   return async (dispatch: Dispatch<listActionType>) => {
      try {
         const response = await axiosApi.get(`/homeReviewArrData`);
         dispatch({
            type: ListActionType.SET_HOME_REVIEW_ARR_DATA_LIST,
            payload: response.data,
         });
      } catch (e) {
         console.error(e);
      }
   };
};

export const getPromoCodesDataList = () => {
   return async (dispatch: Dispatch<listActionType>) => {
      try {
         const response = await axiosApi.get(`/promoCodesDataList`);
         dispatch({
            type: ListActionType.SET_PROMO_CODES_DATA_LIST,
            payload: response.data,
         });
      } catch (e) {
         console.error(e);
      }
   };
};

export const getPaymentRadioBtnDataList = () => {
   return async (dispatch: Dispatch<listActionType>) => {
      try {
         const response = await axiosApi.get(`/paymentRadioBtnOption`);
         dispatch({
            type: ListActionType.SET_PAYMENT_RADIO_BTN_DATA_LIST,
            payload: response.data,
         });
      } catch (e) {
         console.error(e);
      }
   };
};

export const getDeliveryRadioBtnDataList = () => {
   return async (dispatch: Dispatch<listActionType>) => {
      try {
         const response = await axiosApi.get(`/deliveryRadioBtnOption`);
         dispatch({
            type: ListActionType.SET_DELIVERY_RADIO_BTN_DATA_LIST,
            payload: response.data,
         });
      } catch (e) {
         console.error(e);
      }
   };
};

export const getServicesListData = () => {
   return async (dispatch: Dispatch<listActionType>) => {
      try {
         const response = await axiosApi.get(`/servicesListData`);
         dispatch({
            type: ListActionType.SET_SERVICES_LIST_DATA,
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
