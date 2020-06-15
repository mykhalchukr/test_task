import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  peopleData: [],
  filterData: "",
  sortBy:"",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_DATA_FROM_SERVER':
      return {
        ...state,
        peopleData: action.list,
      };
    case 'FILTER_BY_SURNAME':
      return {
        ...state,
        filterData: action.surname,
      };
     case 'SET_SORT_TYPE': 
      return {
        ...state,
        sortBy: action.sortType,
      }
    default:
      return state;
  } 
};


const store = createStore(
  rootReducer,
  composeWithDevTools(),
);

export default store;