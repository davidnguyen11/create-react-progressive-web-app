import request from 'utils/request';
import { configs } from 'utils/configs';
import { normalizeData } from 'utils';
import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
} from './constants';

export function fetchData() {
  const requestURL = `${configs.apiUrl}/articles?source=ars-technica&apiKey=${configs.newsApiKey}`;
  return (dispatch) => {
    return request(requestURL).then(
      response => {
        response.articles = normalizeData(response.articles);
        dispatch(fetchDataSuccess(response));
      },
      error => dispatch(fetchDataFail())
    );
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
