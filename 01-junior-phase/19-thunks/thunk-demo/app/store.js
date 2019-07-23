import {createStore, applyMiddleware} from 'redux';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

// ACTION TYPES
const GOT_BUNNIES = 'GOT_BUNNIES';

// ACTION CREATORS
const gotBunnies = (bunnies) => ({
  type: GOT_BUNNIES,
  bunnies
});

// THUNK CREATOR (async action creator)
export const getBunnies = () => {
  // thunk
  return async (dispatch) => {
    const {data} = await axios.get('/bunnies');
    dispatch(gotBunnies(data));
  };
};

const initialState = {
  bunnies: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_BUNNIES:
      return {
        ...state,
        bunnies: action.bunnies
      };
    default:
      return state;
  }
};

const middlewares = applyMiddleware(loggingMiddleware, thunkMiddleware);

export default createStore(reducer, middlewares);
