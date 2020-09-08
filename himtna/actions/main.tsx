import client from '../store'
export function loadCategories() {
  return {
    type: ['LOAD', 'CAT_SUC', 'CAT_ERROR'],
    payload: {
      request: {
        url: client + '/categories'
      }
    }
  }
}

export function toggleFavorite(id) {
  return {
    type: 'TOGGLE_FAVORITE',
    promotionId: id

  }
}
