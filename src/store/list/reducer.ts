import { ListActionType, listActionType, ListState } from './types.ts';

const initialState: ListState = {
   catalogNestedList: [],
   catalogByBrandsList: [],
   deskHeaderAnotherList: [],
   mobCatalogCategoryDataList: [],
   mobCatalogCategoryDataList2: [],
   productPreviewSliderDataList: [],
   catalogDataMobTabList: [],
   catalogDataDeskList: [],
   homeSeasonalOffersDataList: [],
   mobTabHomePopularBrandsArrList: [],
   deskHomePopularBrandsArrList: [],
   homeReviewArrDataList: [],
   promoCodesDataList: [],
   paymentRadioBtnDataList: [],
   deliveryRadioBtnDataList: [],
};

export const listReducer = (
   state = initialState,
   action: listActionType,
): ListState => {
   switch (action.type) {
      case ListActionType.SET_CATALOG_NESTED_LIST:
         return { ...state, catalogNestedList: action.payload };

      case ListActionType.SET_CATALOG_BY_BRANDS_LIST:
         return { ...state, catalogByBrandsList: action.payload };

      case ListActionType.SET_DESK_HEADER_ANOTHER_LIST:
         return { ...state, deskHeaderAnotherList: action.payload };

      case ListActionType.SET_MOB_CATALOG_CATEGORY_DATA_LIST:
         return { ...state, mobCatalogCategoryDataList: action.payload };

      case ListActionType.SET_MOB_CATALOG_CATEGORY_DATA_LIST2:
         return { ...state, mobCatalogCategoryDataList2: action.payload };

      case ListActionType.SET_PRODUCT_PREVIEW_SLIDER_DATA_LIST:
         return { ...state, productPreviewSliderDataList: action.payload };

      case ListActionType.SET_CATALOG_DATA_MOB_TAB_LIST:
         return { ...state, catalogDataMobTabList: action.payload };

      case ListActionType.SET_CATALOG_DATA_DESK_LIST:
         return { ...state, catalogDataDeskList: action.payload };

      case ListActionType.SET_HOME_SEASONAL_OFFERS_DATA_LIST:
         return { ...state, homeSeasonalOffersDataList: action.payload };

      case ListActionType.SET_MOB_TAB_HOME_POPULAR_BRANDS_ARR_LIST:
         return { ...state, mobTabHomePopularBrandsArrList: action.payload };

      case ListActionType.SET_DESK_HOME_POPULAR_BRANDS_ARR_LIST:
         return { ...state, deskHomePopularBrandsArrList: action.payload };

      case ListActionType.SET_HOME_REVIEW_ARR_DATA_LIST:
         return { ...state, homeReviewArrDataList: action.payload };

      case ListActionType.SET_PROMO_CODES_DATA_LIST:
         return { ...state, promoCodesDataList: action.payload };

      case ListActionType.SET_PAYMENT_RADIO_BTN_DATA_LIST:
         return { ...state, paymentRadioBtnDataList: action.payload };

      case ListActionType.SET_DELIVERY_RADIO_BTN_DATA_LIST:
         return { ...state, deliveryRadioBtnDataList: action.payload };

      default:
         return state;
   }
};
