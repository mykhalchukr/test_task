import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


const initialState = {
  peopleData: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_DATA_FROM_SERVER':
      return {
        peopleData: action.list,
      };
    default:
      return state;
  } 
};


const store = createStore(
  rootReducer,
  composeWithDevTools(),
);

export default store;