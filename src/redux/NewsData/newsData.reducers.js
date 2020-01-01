import {
  ACTIONS,
  INITIAL_NEWS_DATA,
  NEWS_ITEMS_SKELETON
} from "./newsData.constants";

import {
  getFormattedFullNewsItem,
  getStateNewsItems
} from "./newsData.helpers";

export const newsDataReducer = (state = NEWS_ITEMS_SKELETON, action) => {
  const { type, payload } = action;
  state = Object.assign({}, state);
  switch (type) {
    case ACTIONS.GET_NEWS_CONTENT:
      return state;
    case ACTIONS.DELETE_NEWS_CONTENT:
      return state;
    case ACTIONS.SET_NEWS_ITEMS:
      var { newsItems: apiNewsItems } = payload;
      var { newsItems: stateNewsItems } = state;
      // stateNewsItems = Object.keys(stateNewsItems).map(newsID => {
      //   return getFormattedFullNewsItem({
      //     stateNewsItem: stateNewsItems[newsID],
      //     apiNewsItem: newsItems[newsID]
      //   });
      // });
      // debugger;
      // state.newsItems = stateNewsItems;
      // newsItems = Object.assign({}, newsItems, state.newsItems);
      // debugger;
      newsItems = getStateNewsItems({ stateNewsItems, apiNewsItems });
      state = { ...state, newsItems };
      return state;
    case ACTIONS.SET_NEWS_ITEM:
      var { newsItem, newsItemID } = payload;
      var { newsItems = {} } = state;
      newsItems[newsItemID] = getFormattedFullNewsItem({
        stateNewsItem: newsItems[newsItemID],
        apiNewsItem: newsItem
      });
      state.newsItems = newsItems;
      return state;
    case ACTIONS.SET_LOADING_NEWS_ITEMS:
      const { isLoadingNewsItems } = payload;
      return { ...state, isLoadingNewsItems };
    case ACTIONS.SET_ERROR_LOADING_NEWS_ITEMS:
      const { isErrorLoadingNewsItems, errorMessage } = payload;
      return { ...state, isErrorLoadingNewsItems, errorMessage };
    default:
      return state;
  }
};
