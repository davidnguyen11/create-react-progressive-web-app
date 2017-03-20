import { call, put, takeLatest } from 'redux-saga/effects'
import {
  FETCH_DATA,
} from './constants';
import {
  fetchDataSuccess,
  fetchDataFail,
} from './actions';
import { configs } from 'utils/configs';
import request from 'utils/request';
import {
  prettyDisplayDate
} from 'utils';

function normalizeData(rawData) {
  return rawData.map(item => {
    item.publishedDate = `Published at ${prettyDisplayDate(item.publishedAt)}`;
    return item;
  });
}

function* fetchListItem(action) {
   try {
     const { source } = action.payload;
     const requestURL = `${configs.apiUrl}/articles?source=${source}&apiKey=${configs.newsApiKey}`;
     const response = yield call(request, requestURL);
     response.articles = normalizeData(response.articles);
     yield put(fetchDataSuccess(response));
   } catch (err) {
     yield put(fetchDataFail(err));
   }
}

function* getNewsData() {
  // const watcher = yield takeLatest(FETCH_DATA, fetchListItem);
  //  // Suspend execution until location changes
  // yield take(LOCATION_CHANGE);
  // yield cancel(watcher);
  yield takeLatest(FETCH_DATA, fetchListItem);
}

export default getNewsData;
