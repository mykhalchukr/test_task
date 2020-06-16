import {LOAD_DATA_FROM_SERVER} from './actionTypes';

export const handleDataLoading = (list) => ({type: LOAD_DATA_FROM_SERVER, list});

const reducer = (peopleList = [], action) => {
  switch (action.type) {
    case LOAD_DATA_FROM_SERVER:
      return action.list;
    default:
      return peopleList;
  }
};

export default reducer;