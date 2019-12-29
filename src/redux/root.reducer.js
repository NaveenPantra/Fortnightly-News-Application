import { combineReducers } from "redux";
import { newsDataReducer } from "./NewsData/newsData.reducers";
import { tagDataReducer } from "./TagsData/tagsData.reducers";

export default combineReducers({
  newsData: newsDataReducer,
  tagData: tagDataReducer
});
