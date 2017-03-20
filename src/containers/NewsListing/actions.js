import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
} from './constants';

export function fetchData(source) {
  return {
    type: FETCH_DATA,
    payload: {
      source,
    }
  };
}

export function fetchDataSuccess(response) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: {
      response
    },
  };
}

export function fetchDataFail() {
  return {
    type: FETCH_DATA_FAIL,
  };
}
