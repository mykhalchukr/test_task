import { SET_SORT_TYPE } from './actionTypes';

export const setSortType = (sortType) => ({action: SET_SORT_TYPE, sortType});

const reducer = (sortBy = '', action) => {
  switch (action.type) {
    case SET_SORT_TYPE:
      return action.sortType;
    default:
      return sortBy;
  }
};

export default reducer;