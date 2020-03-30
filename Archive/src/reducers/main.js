const initialState = {
  isLoading: false,
  error: null
};

export default function mainReducer(state=initialState, action) {
  switch(action.type) {
    case 'SEARCH':
      return {
        ...state,
        isLoading: true
      }
    case 'SEARCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        result: action.payload.data
      }
    case 'SEARCH_ERROR': 
      return {
        ...state,
        isLoading: false,
        error: 'fuck'
      }
    default: 
    return {
      ...state
    }
  }
}
