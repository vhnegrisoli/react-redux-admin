import * as api from './api';
import * as constants from './actionTypes';

export function fetchTodos() {
  return async dispatch => {
    dispatch({ type: constants.TODOS_FETCH_REQUEST });
    await api
      .getTodos()
      .then(res => {
        dispatch({ type: constants.TODOS_FETCH_SUCCESS, payload: res.data });
      })
      .catch(error => {
        dispatch({ type: constants.TODOS_FETCH_FAILURE, payload: error.data });
      });
  };
}
