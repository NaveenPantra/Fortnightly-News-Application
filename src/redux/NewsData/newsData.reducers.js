import { ACTIONS, INITIAL_NEWS_DATA } from "./newsData.constants";

export const newsDataReducer = (state = INITIAL_NEWS_DATA, action) => {
  const { type } = action;
  switch (type) {
    case ACTIONS.GET_NEWS_CONTENT:
      return state;
    case ACTIONS.DELETE_NEWS_CONTENT:
      return state;
    default:
      return state;
  }
};
