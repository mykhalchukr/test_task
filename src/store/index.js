import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import filterReducer from './filterData';
import peopleDataReducer from './peopleData';
import sortTypeReducer from './sortType';

const rootReducer = combineReducers({
  peopleData: peopleDataReducer,
  filterData: filterReducer,
  sortBy: sortTypeReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(),
);

export default store;