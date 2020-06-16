import { SET_SORT_TYPE } from './actionTypes';

export const setSortType = (typeOfSort) => ({type: SET_SORT_TYPE, typeOfSort});

const reducer = (sortBy = '', action) => {
  switch (action.type) {
    case SET_SORT_TYPE:
      return action.typeOfSort;
    default:
      return sortBy;
  }
};

export default reducer;