import {createStore, applyMiddleware} from 'redux';
import reduxLogger from 'redux-logger';

// ACTION TYPES
const INCREMENT = 'INCREMENT';

// ACTION CREATORS
export const increment = () => ({type: INCREMENT});

// REDUCER
const initialState = {
  count: 0
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {count: state.count + 1};
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(reduxLogger));

export default store;
