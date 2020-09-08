import { AnyAction } from 'redux';

const initialState = {
  isLoading: false,
  error: null,
  favoritePromotions: []
};
export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'LOAD':
      return {
        ...state,
        isLoading: true
      };
    case 'CAT_SUC':
      return {
        ...state,
        isLoading: false,
        result: action.payload.data
      }
    case 'CAT_ERROR':
      return {
        ...state,
        isLoading: false,
        error: 'fuck'
      }
    case 'TOGGLE_FAVORITE':
      const updatedFavPromotion = [...state.favoritePromotions]
      const existing = state.favoritePromotions.findIndex(promotion => promotion.id === action.promotionId);
      updatedFavPromotion.splice(existing, 1)
      if (existing >= 0) {
        return {
          ...state, favoritePromotions: updatedFavPromotion
        }
      } else {
        return {
          ...state
        }
      }
      return {

      }
    default:
      return {
        ...state
      };
  }
};
export interface Interface {
  isLoading: false,
}
