import { ACTIONS } from "./newsData.constants";

export const getNewsData = ({ payload }) => ({
  type: ACTIONS.GET_NEWS_CONTENT,
  payload
});

export const deleteNewsContent = ({ payload }) => ({
  type: ACTIONS.DELETE_NEWS_CONTENT,
  payload
});
