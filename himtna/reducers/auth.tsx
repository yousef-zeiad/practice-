import { AnyAction } from 'redux';

const initialState = {
  user: {},
  existingNumber: null
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'EXISTING_NUMBER':
      return {
        ...state,
        existingNumber: action.payload
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      }
    case 'LOGOUT':
      localStorage.clear()
      return {
        ...initialState
      }
    default:
      return state
  }
}

export interface Interface {
  existingNumber: typeof initialState.existingNumber,
  user: typeof initialState.user,
}
