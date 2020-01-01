import { NEWS_DATA_SKELETON } from "./newsData.constants";
import { FALSY_VALUES } from "./../../utils/constants";

export const formatNewsItemsData = ({ newsItems }) => {
  newsItems = Object.assign({}, newsItems);
  const formatedNewsItems = {};
  Object.keys(newsItems).forEach(newsID => {
    formatedNewsItems[newsID] = fromatNewsItem({ newsItem: newsItems[newsID] });
  });
  return formatedNewsItems;
};

export const fromatNewsItem = ({ newsItem }) => {
  return Object.assign({}, NEWS_DATA_SKELETON, newsItem);
};

export const getFormattedFullNewsItem = ({ stateNewsItem, apiNewsItem }) => {
  if (FALSY_VALUES.indexOf(stateNewsItem) > -1) return apiNewsItem;
  if (stateNewsItem.isCompletlyFetched) return stateNewsItem;
  return apiNewsItem;
};

export const getStateNewsItems = ({
  stateNewsItems = {},
  apiNewsItems = {}
}) => {
  const tempNewsItemsData = {};
  const ids = new Set([
    ...Object.keys(stateNewsItems),
    ...Object.keys(apiNewsItems)
  ]);
  for (const key of ids) {
    tempNewsItemsData[key] = getFormattedFullNewsItem({
      stateNewsItem: stateNewsItems[key],
      apiNewsItem: apiNewsItems[key]
    });
  }
  return tempNewsItemsData;
};
