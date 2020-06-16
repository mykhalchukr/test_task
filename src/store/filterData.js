import { FILTER_BY_SURNAME } from './actionTypes';

export const handleSearchQuery = (surname) => ({type: FILTER_BY_SURNAME, surname});

const reducer = (query = '', action) => {
  switch (action.type) {
    case FILTER_BY_SURNAME: 
      return action.surname;
    default:
      return query;
  }
};

export default reducer;