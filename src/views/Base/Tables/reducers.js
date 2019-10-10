import * as constants from './actionTypes';

const initialState = {
  items: [],
  error: [],
  isLoading: false,
};

export default function tableReducer(state = initialState, { type, payload }) {
  switch (type) {
    case constants.TODOS_FETCH_REQUEST:
      return { ...state, isLoading: true };
    case constants.TODOS_FETCH_SUCCESS:
      return { ...state, items: payload, isLoading: false };
    case constants.TODOS_FETCH_FAILURE:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
}
