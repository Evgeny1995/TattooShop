import { RadioBtnOption, TypeList1 } from '../../types/list.ts';

export interface ListState {
   catalogNestedList?: TypeList1[];
   catalogByBrandsList?: TypeList1[];
   deskHeaderAnotherList?: TypeList1[];
   mobCatalogCategoryDataList?: TypeList1[];
   mobCatalogCategoryDataList2?: TypeList1[];
   productPreviewSliderDataList?: TypeList1[];
   catalogDataMobTabList?: TypeList1[];
   catalogDataDeskList?: TypeList1[];
   homeSeasonalOffersDataList?: TypeList1[];
   mobTabHomePopularBrandsArrList?: TypeList1[];
   deskHomePopularBrandsArrList?: TypeList1[];
   homeReviewArrDataList?: TypeList1[];
   promoCodesDataList?: TypeList1[];
   paymentRadioBtnDataList?: RadioBtnOption[];
   deliveryRadioBtnDataList?: RadioBtnOption[];
   servicesListData?: TypeList1[];
}
export enum ListActionType {
   SET_CATALOG_NESTED_LIST = 'SET_CATALOG_NESTED_LIST',
   SET_CATALOG_BY_BRANDS_LIST = 'SET_CATALOG_BY_BRANDS_LIST',
   SET_DESK_HEADER_ANOTHER_LIST = 'SET_DESK_HEADER_ANOTHER_LIST',
   SET_MOB_CATALOG_CATEGORY_DATA_LIST = 'SET_MOB_CATALOG_CATEGORY_DATA_LIST',
   SET_MOB_CATALOG_CATEGORY_DATA_LIST2 = 'SET_MOB_CATALOG_CATEGORY_DATA_LIST2',
   SET_PRODUCT_PREVIEW_SLIDER_DATA_LIST = 'SET_PRODUCT_PREVIEW_SLIDER_DATA_LIST',
   SET_CATALOG_DATA_MOB_TAB_LIST = 'SET_CATALOG_DATA_MOB_TAB_LIST',
   SET_CATALOG_DATA_DESK_LIST = 'SET_CATALOG_DATA_DESK_LIST',
   SET_HOME_SEASONAL_OFFERS_DATA_LIST = 'SET_HOME_SEASONAL_OFFERS_DATA_LIST',
   SET_MOB_TAB_HOME_POPULAR_BRANDS_ARR_LIST = 'SET_MOB_TAB_HOME_POPULAR_BRANDS_ARR_LIST',
   SET_DESK_HOME_POPULAR_BRANDS_ARR_LIST = 'SET_DESK_HOME_POPULAR_BRANDS_ARR_LIST',
   SET_HOME_REVIEW_ARR_DATA_LIST = 'SET_HOME_REVIEW_ARR_DATA_LIST',
   SET_PROMO_CODES_DATA_LIST = 'SET_PROMO_CODES_DATA_LIST',
   SET_PAYMENT_RADIO_BTN_DATA_LIST = 'SET_PAYMENT_RADIO_BTN_DATA_LIST',
   SET_DELIVERY_RADIO_BTN_DATA_LIST = 'SET_DELIVERY_RADIO_BTN_DATA_LIST',
   SET_SERVICES_LIST_DATA = 'SET_SERVICES_LIST_DATA',
}
interface SetCatalogNestedList {
   type: ListActionType.SET_CATALOG_NESTED_LIST;
   payload: TypeList1[];
}

interface SetCatalogByBrandsListAction {
   type: ListActionType.SET_CATALOG_BY_BRANDS_LIST;
   payload: TypeList1[];
}

interface SetDeskHeaderAnotherListAction {
   type: ListActionType.SET_DESK_HEADER_ANOTHER_LIST;
   payload: TypeList1[];
}

interface SetMobCatalogCategoryDataListAction {
   type: ListActionType.SET_MOB_CATALOG_CATEGORY_DATA_LIST;
   payload: TypeList1[];
}

interface SetMobCatalogCategoryDataListAction2 {
   type: ListActionType.SET_MOB_CATALOG_CATEGORY_DATA_LIST2;
   payload: TypeList1[];
}

interface SetProductPreviewSliderDataListAction {
   type: ListActionType.SET_PRODUCT_PREVIEW_SLIDER_DATA_LIST;
   payload: TypeList1[];
}

interface SetCatalogDataMobTabListAction {
   type: ListActionType.SET_CATALOG_DATA_MOB_TAB_LIST;
   payload: TypeList1[];
}

interface SetCatalogDataDeskListAction {
   type: ListActionType.SET_CATALOG_DATA_DESK_LIST;
   payload: TypeList1[];
}

interface SetHomeSeasonalOffersDataListAction {
   type: ListActionType.SET_HOME_SEASONAL_OFFERS_DATA_LIST;
   payload: TypeList1[];
}

interface SetMobTabHomePopularBrandsArrListAction {
   type: ListActionType.SET_MOB_TAB_HOME_POPULAR_BRANDS_ARR_LIST;
   payload: TypeList1[];
}

interface SetDeskHomePopularBrandsArrListAction {
   type: ListActionType.SET_DESK_HOME_POPULAR_BRANDS_ARR_LIST;
   payload: TypeList1[];
}

interface SetHomeReviewArrDataListAction {
   type: ListActionType.SET_HOME_REVIEW_ARR_DATA_LIST;
   payload: TypeList1[];
}

interface SetPromoCodesDataListAction {
   type: ListActionType.SET_PROMO_CODES_DATA_LIST;
   payload: TypeList1[];
}

interface SetPaymentRadioBtnListAction {
   type: ListActionType.SET_PAYMENT_RADIO_BTN_DATA_LIST;
   payload: RadioBtnOption[];
}

interface SetDeliveryRadioBtnListAction {
   type: ListActionType.SET_DELIVERY_RADIO_BTN_DATA_LIST;
   payload: RadioBtnOption[];
}

interface SetServicesListDataAction {
   type: ListActionType.SET_SERVICES_LIST_DATA;
   payload: TypeList1[];
}

export type listActionType =
   | SetCatalogNestedList
   | SetCatalogByBrandsListAction
   | SetDeskHeaderAnotherListAction
   | SetMobCatalogCategoryDataListAction
   | SetMobCatalogCategoryDataListAction2
   | SetProductPreviewSliderDataListAction
   | SetCatalogDataMobTabListAction
   | SetCatalogDataDeskListAction
   | SetHomeSeasonalOffersDataListAction
   | SetMobTabHomePopularBrandsArrListAction
   | SetDeskHomePopularBrandsArrListAction
   | SetHomeReviewArrDataListAction
   | SetPromoCodesDataListAction
   | SetPaymentRadioBtnListAction
   | SetDeliveryRadioBtnListAction
   | SetServicesListDataAction;
