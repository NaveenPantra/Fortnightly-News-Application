import { ACTIONS, INITIAL_TAG_DATA } from "./tagsData.constants";

export const tagDataReducer = (state = INITIAL_TAG_DATA, action) => {
  const { type } = action;
  switch (type) {
    case ACTIONS.GET_TAG_NAMES:
      return state;
    case ACTIONS.DELETE_TAG_NAME:
      return state;
    default:
      return state;
  }
};
