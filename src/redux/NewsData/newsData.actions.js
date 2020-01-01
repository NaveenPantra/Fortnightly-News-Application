import {
  ACTIONS,
  INITIAL_NEWS_DATA,
  NEWS_ITEMS_DATA
} from "./newsData.constants";
import { formatNewsItemsData, fromatNewsItem } from "./newsData.helpers";
import { API_TIMER } from "./../../utils/constants";

export const getNewsData = ({ payload }) => ({
  type: ACTIONS.GET_NEWS_CONTENT,
  payload
});

export const deleteNewsContent = ({ payload }) => ({
  type: ACTIONS.DELETE_NEWS_CONTENT,
  payload
});

export const setNewsItems = payload => ({
  type: ACTIONS.SET_NEWS_ITEMS,
  payload
});

export const setNewsItem = payload => ({
  type: ACTIONS.SET_NEWS_ITEM,
  payload
});

export const setLoadingNewsItems = payload => ({
  type: ACTIONS.SET_LOADING_NEWS_ITEMS,
  payload
});

export const setErrorLoadingNewsItems = payload => ({
  type: ACTIONS.SET_ERROR_LOADING_NEWS_ITEMS,
  payload
});

export const getNewsItemsAsync = () => {
  return dispatch => {
    // Here we are simulating API Request with setTimeout
    dispatch(setLoadingNewsItems({ isLoadingNewsItems: true }));
    const simulatedAPI = new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          resolve(INITIAL_NEWS_DATA);
        }, API_TIMER);
      } catch (err) {
        reject(err);
      }
    });
    simulatedAPI
      .then(data => {
        dispatch(
          setNewsItems({ newsItems: formatNewsItemsData({ newsItems: data }) })
        );
        dispatch(setLoadingNewsItems({ isLoadingNewsItems: false }));
        dispatch(setErrorLoadingNewsItems({ isErrorLoadingNewsItems: false }));
      })
      .catch(err => {
        dispatch(
          setErrorLoadingNewsItems({
            isErrorLoadingNewsItems: true,
            errorMessage: err.message
          })
        );
      });
  };
};

export const getNewsItemAsync = ({ newsID }) => {
  return dispatch => {
    // Here we are simulating API Request with setTimeout
    const simulatedAPI = new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          resolve(NEWS_ITEMS_DATA[newsID]);
        }, API_TIMER);
      } catch (err) {
        reject(err);
      }
    });
    simulatedAPI
      .then(data => {
        dispatch(
          setNewsItem({
            newsItem: fromatNewsItem({ newsItem: data }),
            newsItemID: newsID
          })
        );
      })
      .catch(err => {
        dispatch(
          setErrorLoadingNewsItems({
            isErrorLoadingNewsItems: true,
            errorMessage: err.message
          })
        );
      });
  };
};
