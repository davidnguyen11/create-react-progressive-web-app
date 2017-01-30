import {
  FETCH_DATA_SUCCESS,
} from './constants';

const initialState = {
  articles: [],
  source: null,
  fetching: true,
};

function tcReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_DATA_SUCCESS: {
      return {
        ...state,
        articles: action.payload.response.articles,
        source: action.payload.response.source,
        fetching: false,
      }
    }
    default: {
      return state;
    }
  }
}

export default tcReducer;
